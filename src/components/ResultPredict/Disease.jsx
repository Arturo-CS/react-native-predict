// Disease.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Disease = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>La planta se encuentra enferma</Text>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Recomendación:</Text>
        <Text style={styles.content}>Número de recomendación</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Tratada por:</Text>
        <Text style={styles.content}>Nombre de la persona</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
});

export default Disease;
