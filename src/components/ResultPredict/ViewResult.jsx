// ViewResult.jsx
import React from 'react';
import { View, Text } from 'react-native';
import Healthy from './Healthy';
import Disease from './Disease';

const ViewResult = ({ label }) => {
  return (
    <View>
      {label === "saludable" ? (
        <Healthy />
      ) : (
        <Disease />
      )}
    </View>
  );
};

export default ViewResult;
