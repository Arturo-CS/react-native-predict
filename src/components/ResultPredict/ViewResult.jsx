import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Healthy from "./Healthy";
import CornHealthy from "./CornHealthy";
import Disease from "./Disease"; // Importa los componentes para diferentes enfermedades
import DiseaseCornGraySpot from "./DiseaseCornGraySpot";
import DiseaseCornCommon from "./DiseaseCornCommon";
import DiseaseCornNorthern from "./DiseaseCornNorthern";

const ViewResult = ({ label }) => {
  let resultComponent;

  // Usa un switch para determinar qué componente mostrar según la etiqueta recibida
  switch (label) {
    case "saludable":
      resultComponent = <Healthy />;
      break;
    case "enferma":
      resultComponent = <Disease />;
      break;
    case "Corn_(maize)___healthy":
      resultComponent = <CornHealthy />;
      break;
    case "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot":
      resultComponent = <DiseaseCornGraySpot />;
      break;
    case "Corn_(maize)___Common_rust_":
      resultComponent = <DiseaseCornCommon />;
      break;
    case "Corn_(maize)___Northern_Leaf_Blight":
      resultComponent = <DiseaseCornNorthern />;
      break;

    default:
      resultComponent = <Text>Enfermedad desconocida</Text>;
  }

  return <View style={styles.container}>{resultComponent}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
  },
});

export default ViewResult;
