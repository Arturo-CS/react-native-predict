// DiseaseCornGraySpot.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const cercosporaRecommendation = {
  text: 'La hoja está afectada por Cercospora (Manchas rojas).',
  treatedBy: 'Experto en cultivo de maíz',
  howToCure: 'Para tratar esta enfermedad, sigue estos pasos:',
  cureDetails: [
    '1. Utilizar fertilizante de alto contenido en nitrógeno, fósforo y potasio.',
    '2. Agregar fungicidas foliares como Picaxystrobin + Cyproconazole.',
    '3. Utilizar un rociador y aplicar la mezcla sobre las hojas afectadas, asegurándose de cubrir toda la superficie.',
    '4. Repetir el proceso cada 2 semanas hasta que mejore la condición de las hojas.'
  ],
};

const DiseaseCornGraySpot = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>La hoja está enferma 🤒</Text>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Caso:</Text>
        <Text style={styles.content}>{cercosporaRecommendation.text}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Tratada por:</Text>
        <Text style={styles.content}>{cercosporaRecommendation.treatedBy}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Cómo curar:</Text>
        {cercosporaRecommendation.cureDetails.map((detail, index) => (
          <Text key={index} style={styles.content}>{detail}</Text>
        ))}
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

export default DiseaseCornGraySpot;
