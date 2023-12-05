import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/FontAwesome";
import TitleLogo from "../TitleLogo/TitleLogo";
import { useNavigate } from "react-router-native";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: authErrors } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    try {
      await signin(data);
      setLoading(true); // Activar el indicador de carga

    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  return (
    <View style={styles.container}>
      <TitleLogo />

      <Text style={styles.title}>Iniciar Sesión</Text>
      {authErrors.map((error, i) => (
        <Text key={i} style={styles.errorAuth}>
          {error}
        </Text>
      ))}
      <View style={styles.emailSection}>
        <Text>Email:</Text>
        <Icon name="envelope" size={17} color="black" style={styles.icon} />
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Correo Electrónico"
              onChangeText={(text) => field.onChange(text)}
              value={field.value}
            />
          )}
          name="email"
          rules={{ required: "El correo es obligatorio" }}
          defaultValue=""
        />
      </View>
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}
      <View style={styles.emailSection}>
        <Text>Contraseña:</Text>
        <Icon name="lock" size={20} color="black" style={styles.icon} />
      </View>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={true}
              onChangeText={(text) => field.onChange(text)}
              value={field.value}
            />
          )}
          name="password"
          rules={{ required: "La contraseña es obligatoria" }}
          defaultValue=""
        />
      </View>
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <TouchableHighlight
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#1c5270" />
        ) : (
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        )}
      </TouchableHighlight>

      <TouchableHighlight onPress={handleNavigateToRegister}>
        <Text style={styles.toggleText}>¿No estás registrado? Regístrate</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 24,
    color: "#1c455e",
    marginBottom: 20,
  },
  emailSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 10,
  },
  icon: {
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#3295c5",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  toggleText: {
    color: "#3295c5",
    marginTop: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 5,
    marginTop: 4,
  },
  errorAuth: {
    backgroundColor: "red",
    color: "white",
    marginVertical: 4,
    textAlign: "center",
    paddingVertical: 5
  },
});

export default Login;
