import React from 'react';
import { Route, Routes, useLocation } from 'react-router-native';
import Home from './Home';
import ListPlant from './ListPlant';
import OptionsCamera from './OptionsCamera.jsx';
import ProfilePlant from './ProfilePlant.jsx';
import AppBar from './AppBar.jsx';
import ViewCamera from './ViewCamera.jsx'; // Asegúrate de que esta importación sea correcta
import Register from './Auth/Register.jsx';
import Login from './Auth/Login.jsx';

function Main() {
  const location = useLocation();
  const isRootPath = location.pathname === '/';
  const isRootPathRegister = location.pathname === '/register';

  return (
    <>
      {!(isRootPath || isRootPathRegister) && <AppBar />}
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route element={<Home />} path="/home" />
        <Route element={<ListPlant />} path="/list" />
        <Route element={<OptionsCamera />} path="/options" />
        <Route element={<ViewCamera />} path="/camera" /> {/* Debe estar configurado de esta manera */}
        <Route path="/profile/:id" element={<ProfilePlant />} />
        {/* Agrega más rutas aquí según sea necesario */}
      </Routes>
    </>
  );
}

export default Main;
