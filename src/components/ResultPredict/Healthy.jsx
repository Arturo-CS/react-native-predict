// Healthy.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Healthy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡La planta está saludable!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30, // Puedes ajustar este valor según el tamaño que desees
    fontWeight: 'bold',
  },
});

export default Healthy;
