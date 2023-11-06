import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function OptionsCamera() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Subir foto"
          onPress={() => { /* Agrega la lógica aquí */ }}
          color="#53ac59" // Color del texto
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Usar cámara"
          onPress={() => { /* Agrega la lógica aquí */ }}
          color="#53ac59" // Color del texto
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03484c'
  },
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 5,
    width: 200, // Ancho del botón
  },
});

export default OptionsCamera;
