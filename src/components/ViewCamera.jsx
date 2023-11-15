import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import ButtonCamera from "./ButtonCamera/ButtonCamera";
import { useFile } from "../context/FileContext";

function ViewCamera() {
  const [touch, setTouch] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const { uploadFile } = useFile();

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        setTouch(true)
        const data = await cameraRef.current.takePictureAsync();
        const { uri } = data;
        const asset = await MediaLibrary.createAssetAsync(uri);
        setImage(uri);
        console.log(asset);

        if (asset) {
          const assetDetails = await MediaLibrary.getAssetInfoAsync(asset);
          console.log(assetDetails);
          const size = assetDetails.height * assetDetails.width;
          const mimeType =
            assetDetails.mediaType === "photo" ? "image/jpeg" : "unknown";

          const formData = {
            uri: assetDetails.uri,
            type: mimeType,
            name: assetDetails.filename,
            size: size,
            lastModified: assetDetails.creationTime,
          };
          setFileData(formData);
        }
      } catch (error) {
        console.log("Error al tomar la fotografía:", error);
      }
    }
  };

  const sendImage = async () => {
    if (image) {
      uploadFile(fileData);
    } else {
    }
  };

  if (!hasCameraPermission) {
    return <Text>No hay acceso a la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.camera} />
      ) : (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        ></Camera>
      )}

      <View>
        {image ? (
          <View style={styles.buttons}>
            <ButtonCamera
              title={""}
              icon={"retweet"}
              onPress={() => setImage(null)}
            />
            <ButtonCamera title={""} icon={"check"} onPress={sendImage} />
          </View>
        ) : !touch ? (
          <ButtonCamera
            title={"Tomar fotografía"}
            icon={"camera"}
            onPress={takePicture}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 8,
    paddingBottom: 15,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
});

export default ViewCamera;
