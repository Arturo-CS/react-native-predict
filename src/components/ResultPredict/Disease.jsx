// Disease.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Disease = () => {
  return (
    <View style={styles.container}>
      <Text>La planta se encuentra enferma</Text>
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

export default Disease;
