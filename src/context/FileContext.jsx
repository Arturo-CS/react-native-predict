import { useContext, createContext, useState } from "react";
import { uploadImage } from "../api/network.js";

export const FileContext = createContext();

export const useFile = () => {
  const context = useContext(FileContext);
  if (!context) throw new Error("useFile debería ser usado con FileProvider");
  return context;
};

export const FileProvider = ({ children }) => {
  const [fileData, setFileData] = useState(null);
  const [error, setError] = useState(null);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file); // Asegúrate de nombrar el archivo como "file"

    // Realiza la solicitud POST al backend
    const response = await fetch("http://192.168.0.3:5000/uploadfile", {
      method: "POST",
      body: formData,
    });

    // Manejo de la respuesta del backend
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Muestra la respuesta en la consola del navegador
      return data; // Podrías retornar la respuesta si es necesario
    } else {
      throw new Error("Error al cargar el archivo"); // Manejo de errores
    }
  };

  return (
    <FileContext.Provider value={{ fileData, error, uploadFile }}>
      {children}
    </FileContext.Provider>
  );
};
