import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native'; // Importa el componente Link

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        {/* Título */}
        <Text style={styles.title}>AgroMedic</Text>

        {/* Imagen circular centrada */}
        <Image
          source={require('../assets/logo_planta.png')}
          style={styles.circularImage}
        />

        {/* Eslogan */}
        <Text style={styles.slogan}>"Cultiva el conocimiento, Cuida tus plantas"</Text>

        {/* Botón para explorar plantas con Link */}
        <Link to="/list"> 
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Explorar plantas</Text>
          </View>
        </Link>

        <Link to="/options">
          <View style={styles.button2}>
            <Text style={styles.buttonText}>Fotografiar hojas</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5f1f9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredContent: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  title: {
    marginTop: Constants.statusBarHeight + StatusBar.currentHeight,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1c455e',
  },
  circularImage: {
    width: 320,
    height: 320,
    borderRadius: 160,
    marginBottom: 20,
  },
  slogan: {
    fontSize: 16,
    marginBottom: 20,
    color: '#75bde1',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  button1: {
    backgroundColor: '#3295c5',
    padding: 10,
    paddingHorizontal: 80,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  button2: {
    backgroundColor: '#3295c5',
    padding: 10,
    paddingHorizontal: 76,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
  },
});

export default Home;
