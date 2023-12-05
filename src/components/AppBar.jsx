import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import theme from "../theme.js";
import { Link, useNavigate, useLocation } from "react-router-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext.jsx";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020",
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  scroll: {
    paddingVertical: 15,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
  text: {
    color: theme.appBar.textSecondary,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  logoutButton: {
    color: "red",
  },
});

const AppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user: userLoged } = useAuth()

  // Mock user data for demonstration
  const user = {
    name: userLoged.username || "User",
    // Puedes reemplazar la imagen de marcador de posición con la imagen real del usuario.
    image: require("../assets/user.png"),
  };

  const handleBack = () => {
    // Configurar la lógica de navegación de retroceso según tus requerimientos
    // Por ejemplo, aquí asumo que solo estás manejando la navegación de opciones y lista.
    if (location.pathname.startsWith("/profile/")) {
      navigate("/list");
    } else {
      navigate("/home");
    }
  };

  const handleLogout = () => {
    console.log("Logout");
    navigate("/");
    // Agregar la lógica de cierre de sesión si es necesario
  };

  return (
    <View style={styles.container}>


      {/* Muestra la información del usuario y el botón de logout solo en la pantalla de inicio */}
      {location.pathname.startsWith("/home") ? (
        <>
          <View style={styles.userContainer}>
            <Image source={user.image} style={styles.userImage} />
            <Text style={styles.text}>{user.name}</Text>
          </View>
          <TouchableWithoutFeedback onPress={handleLogout}>
            <Ionicons
              style={[styles.text, styles.logoutButton]}
              name="log-out"
              size={24}
              color="#9c1818"
            />
          </TouchableWithoutFeedback>
        </>
      ):(
        <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}
      >
        <TouchableWithoutFeedback onPress={handleBack}>
          <View style={styles.iconContainer}>
            {location.pathname !== "/home" && (
              <FontAwesome
                name="chevron-left"
                size={20}
                color={theme.appBar.textSecondary}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      )}
    </View>
  );
};

export default AppBar;
