import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest } from "../api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-native";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setIsAuthenticated(true);
      setUser(res.data);
      if (res.data) {
        // Esperar 2 segundos antes de navegar a la ruta
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data.error)) {
        return setErrors(error.response.data.error);
      }
      setErrors([error.response.data.error]);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setIsAuthenticated(true);
      setUser(res.data);
      if (res.data) {
        // Esperar 2 segundos antes de navegar a la ruta
        setTimeout(() => {
          navigate("/home");
        }, 2000);
        await AsyncStorage.setItem("token", res.data.token);
      }
      // Guardar el token en AsyncStorage
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data.error)) {
        return setErrors(error.response.data.error);
      }
      setErrors([error.response.data.error]);
    }
  };

  const logout = async () => {
    // Eliminar el token de AsyncStorage
    await AsyncStorage.removeItem("token");

    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    // Verificar si hay un token en AsyncStorage al cargar la aplicación
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  if (loading) {
    // Puedes mostrar un indicador de carga aquí si es necesario
    return null;
  }

  return (
    <AuthContext.Provider
      value={{ signup, signin, loading, user, isAuthenticated, errors, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
