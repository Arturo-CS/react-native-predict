import ConfettiCannon from "react-native-confetti-cannon";
import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

const CornHealthy = () => {
  return useMemo(
    () => (
      <>
        <ConfettiCannon
          count={200}
          origin={{ x: -50, y: -50 }}
          fallSpeed={2000}
          explosionSpeed={300}
          fadeOut={true}
        />
        <View style={styles.container}>
          <Text style={styles.text}>¡La hoja del maíz está saludable! ✅</Text>
        </View>
      </>
    ),
    []
  ); // Agrega las dependencias necesarias si las hay
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30, // Puedes ajustar este valor según el tamaño que desees
    fontWeight: "bold",
  },
});

export default CornHealthy;
