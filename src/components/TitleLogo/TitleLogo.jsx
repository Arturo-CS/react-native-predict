import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function TitleLogo() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo_planta.png")}
        style={styles.circularImage}
      />
      <Text style={styles.text}>Agromedic</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Alinea los elementos horizontalmente
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30
  },
  circularImage: {
    width: 32,
    height: 32,
    borderRadius: 50,
    marginRight: 10, // Añade espacio entre la imagen y el texto
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#132d3e"
  },
});

export default TitleLogo;
