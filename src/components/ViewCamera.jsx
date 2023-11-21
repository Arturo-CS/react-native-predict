import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import ButtonCamera from "./ButtonCamera/ButtonCamera";
import { useFile } from "../context/FileContext";
import ViewResult from "./ResultPredict/ViewResult";

function ViewCamera() {
  const [label, setLabel] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false); // Nuevo estado para indicar si está cargando
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
        setLoading(true); // Muestra el spinner al tomar la foto
        const data = await cameraRef.current.takePictureAsync();
        const { uri } = data;
        const asset = await MediaLibrary.createAssetAsync(uri);
        setImage(uri);

        if (asset) {
          const assetDetails = await MediaLibrary.getAssetInfoAsync(asset);
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
      } finally {
        setLoading(false); // Oculta el spinner después de tomar la foto
      }
    }
  };

  const sendImage = async () => {
    setLoading(true); // Muestra el spinner antes de enviar la imagen
    const result = await uploadFile(fileData);
    setLabel(result.label);
    setShowResult(true);
    setLoading(false); // Oculta el spinner después de enviar la imagen
  };

  if (!hasCameraPermission) {
    return <Text>No hay acceso a la cámara</Text>;
  }

  return (
    <View style={showResult ? styles.containerResult : styles.container}>
      {showResult ? (
        <>
          {loading && <ActivityIndicator size="large" color="#ffffff" />}
          <ViewResult label={label} />
        </>
      ) : (
        <>
          {image ? (
            <Image source={{ uri: image }} style={styles.camera} />
          ) : (
            <Camera
              style={styles.camera}
              type={type}
              flashMode={flash}
              ref={cameraRef}
            />
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
            ) : (
              <ButtonCamera
                title={"Tomar fotografía"}
                icon={"camera"}
                onPress={takePicture}
              />
            )}
          </View>
        </>
      )}
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
  containerResult: {
    flex: 1,
    backgroundColor: "#0f684b",
    justifyContent: "center",
    padding: 8,
    paddingBottom: 15,
    color: "#f1f1f1",
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around", // o "space-around"
  },
});

export default ViewCamera;
