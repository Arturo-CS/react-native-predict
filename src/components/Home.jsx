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
          <View style={styles.button}>
            <Text style={styles.buttonText}>Explorar plantas</Text>
          </View>
        </Link>

        <Link to="/options">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Fotografiar hojas</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03484c',
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
    color: '#fff',
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
    color: '#009ddd',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#53ac59',
    padding: 10,
    paddingHorizontal: 75,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
  },
});

export default Home;
