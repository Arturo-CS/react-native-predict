// Healthy.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Healthy = () => {
  return (
    <View style={styles.container}>
      <Text>¡La planta está saludable!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Healthy;
