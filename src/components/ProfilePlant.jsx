import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useParams } from "react-router-native";
import Constants from "expo-constants";
import dataPlant from "../data/dataPlant";

function ProfilePlant() {
  const { id } = useParams();
  const plant = dataPlant[Number(id) - 1];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: plant.profile }} style={styles.profileImage} />
        <Text style={styles.profileName}>{plant.name}</Text>
        <Text style={styles.profileDescription}>{plant.description}</Text>
      </View>
      <View style={styles.characteristicsContainer}>
        <Text style={styles.characteristicsTitle}>Características:</Text>
        {plant.characteristics.map((characteristic, index) => (
          <Text key={index} style={styles.characteristicItem}>
            {characteristic}
          </Text>
        ))}
      </View>
      <View style={styles.diseasesContainer}>
        <Text style={styles.diseasesTitle}>Enfermedades:</Text>
        {plant.diseases.map((disease, index) => (
          <View key={index} style={styles.diseaseItem}>
            <Text style={styles.diseaseName}>{disease.name}</Text>
            <Text style={styles.diseaseDescription}>{disease.description}</Text>
            <Image
              source={{ uri: disease.image }}
              style={styles.diseaseImage}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#0f2412'
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  profileImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileDescription: {
    fontSize: 16,
    color: "#666",
  },
  characteristicsContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  characteristicsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  characteristicItem: {
    fontSize: 16,
  },
  diseasesContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  diseasesTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  diseaseItem: {
    marginBottom: 10,
  },
  diseaseName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  diseaseDescription: {
    fontSize: 14,
    color: "#666",
  },
  diseaseImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
});

export default ProfilePlant;
