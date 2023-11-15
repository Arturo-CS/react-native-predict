// ViewResult.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Healthy from './Healthy';
import Disease from './Disease';

const ViewResult = ({ label }) => {
  return (
    <View style={styles.container}>
      {label === "saludable" ? (
        <Healthy/>
      ) : (
        <Disease />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    margin: 16,
    alignItems: 'center', // Centra los componentes dentro del contenedor
  },
});

export default ViewResult;
