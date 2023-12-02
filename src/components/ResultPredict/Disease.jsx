// Disease.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const arandanoRecommendation = {
  text: 'El enfermada de la hoja es mildiú polvoriento.',
  treatedBy: 'Experto en cultivo de arándanos',
  howToCure: 'Rociar las hojas con una mezcla especial para arándanos:',
  cureDetails: [
    '1. Utilizar fertilizante de alto contenido en nitrógeno.',
    '2. Agregar 1 cucharadita de fungicida LonselorSC especial para arándanos al agua.',
    '3. Agitar bien la mezcla para asegurarse de que esté completamente disuelta.',
    '4. Utilizar un rociador y aplicar la mezcla sobre las hojas afectadas, asegurándose de cubrir toda la superficie.',
    '5. Repetir el proceso cada 2 semanas hasta que mejore la condición de las hojas.'
  ],
};

const Disease = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>La hoja se encuentra enferma 🤒</Text>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Caso:</Text>
        <Text style={styles.content}>{arandanoRecommendation.text}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Tratada por:</Text>
        <Text style={styles.content}>{arandanoRecommendation.treatedBy}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Cómo curar:</Text>
        {arandanoRecommendation.cureDetails.map((detail, index) => (
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

export default Disease;
