import { useContext, createContext, useState } from "react";
import { uploadImage } from "../api/network.js";
import { NEURONAL_NETWORK } from "../config/neuronalNetwork.js";

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
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`http://${NEURONAL_NETWORK}/uploadfile`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        throw new Error("Error al cargar el archivo");
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
      // Puedes realizar un manejo adicional de errores si es necesario
    }
  };

  const uploadFileBlue = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`http://${NEURONAL_NETWORK}/uploadfile-blueberry`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        throw new Error("Error al cargar el archivo");
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
      // Puedes realizar un manejo adicional de errores si es necesario
    }
  };

  return (
    <FileContext.Provider value={{ fileData, error, uploadFile, uploadFileBlue }}>
      {children}
    </FileContext.Provider>
  );
};
