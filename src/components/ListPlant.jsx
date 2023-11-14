import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Link } from "react-router-native";
import dataPlant from "../data/dataPlant.js";

function ListPlant() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require("../assets/logo_planta.png")}
          style={styles.backgroundImage}
        />
        <Text style={styles.title}>Tipos de Plantas</Text>
      </View>
      <Text style={styles.description}>
        Estas son las plantas más cosechadas en Trujillo.
      </Text>
      <FlatList
        data={dataPlant}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link to={`/profile/${item.id}`} key={item.id}>
            <View style={styles.plantContainer}>
              <Image source={{ uri: item.profile }} style={styles.plantImage} />
              <Text style={styles.plantName}>{item.name}</Text>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{">"}</Text>
              </View>
            </View>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#03484c",
  },
  titleContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  description: {
    fontSize: 16,
    color: "#1c232e",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  plantContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#53ac59",
    borderRadius: 20,
    overflow: "hidden",
  },
  plantImage: {
    width: 70,
    height: 70,
    borderRadius: 20,
    overflow: "hidden",
  },
  plantName: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  iconContainer: {
    width: 40,
    height: 70,
    backgroundColor: "#3b8952",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default ListPlant;
