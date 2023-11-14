import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import * as DocumentPicker from "expo-document-picker";
import { useFile } from "../context/FileContext";

function OptionsCamera() {

  const { uploadFile } = useFile();

  const selectImg = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: "image/*",
      });
      const asset = file.assets;

      if (!asset) return;

      const image = asset[0];
      uploadFile(image.file);
      console.log(image.file);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.buttonUpload]}
        onPress={selectImg}
      >
        <Text style={styles.buttonText}>Subir foto</Text>
      </TouchableOpacity>
      <Link to="/camera">
        <View style={styles.linkButton}>
          <Text style={styles.buttonText}>Usar cámara</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#03484c",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#53ac59",
    padding: 10,
    paddingHorizontal: 85,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  linkButton: {
    backgroundColor: "#53ac59",
    padding: 10,
    paddingHorizontal: 85,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default OptionsCamera;
