import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";
import * as DocumentPicker from "expo-document-picker";
import { useFile } from "../context/FileContext";
import ViewResult from "./ResultPredict/ViewResult";
import { ActivityIndicator } from "react-native";

function OptionsCamera() {
  const { uploadFile, uploadFileBlue } = useFile();
  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState("");
  const navigate = useNavigate()

  const navigateCamera = () => {
    navigate("/camera")
  }
  const selectImg = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: "image/*",
      });

      const asset = file.assets;

      if (!asset) return;

      const image = asset[0];

      // Asegúrate de que estás creando un nuevo objeto FormData y adjuntando el archivo correctamente
      let dataToSend;
      if (Platform.OS === "web") {
        dataToSend = image.file; // Para la plataforma web
      } else {
        dataToSend = {
          uri: image.uri,
          type: image.mimeType,
          name: image.name,
          size: image.size,
          lastModified: image.lastModified,
        };
      }

      setLoading(true);

      const result = await uploadFile(dataToSend);
      setLabel(result.label);
      console.log(dataToSend);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const selectImgBlueberry = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: "image/*",
      });

      const asset = file.assets;

      if (!asset) return;

      const image = asset[0];

      // Asegúrate de que estás creando un nuevo objeto FormData y adjuntando el archivo correctamente
      let dataToSend;
      if (Platform.OS === "web") {
        dataToSend = image.file; // Para la plataforma web
      } else {
        dataToSend = {
          uri: image.uri,
          type: image.mimeType,
          name: image.name,
          size: image.size,
          lastModified: image.lastModified,
        };
      }

      setLoading(true);

      const result = await uploadFileBlue(dataToSend);
      setLabel(result.label);
      console.log(dataToSend);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="#ffffff" size="large" />
      ) : (
        <>
          {label ? (
            <ViewResult label={label} />
          ) : (
            <>
              <TouchableOpacity
                style={[styles.button, styles.buttonUpload]}
                onPress={selectImg}
              >
                <Text style={styles.buttonText}>Subir foto de maiz</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonUpload]}
                onPress={selectImgBlueberry}
              >
                <Text style={styles.buttonText}>Subir foto de arándano</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonUpload]}
                onPress={navigateCamera}>
                <Text style={styles.buttonText}>Usar cámara</Text>
              </TouchableOpacity>
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5f1f9",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3295c5",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "80%", // Ajusta el ancho según tus necesidades
  },
  buttonText: {
    color: "#fff",
  },
  linkButton: {
    backgroundColor: "#3295c5",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
    width: "80%", // Ajusta el ancho según tus necesidades
  },
});

export default OptionsCamera;
