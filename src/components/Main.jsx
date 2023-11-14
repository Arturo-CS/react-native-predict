import React from 'react';
import { Route, Routes, useLocation } from 'react-router-native';
import Home from './Home';
import ListPlant from './ListPlant';
import OptionsCamera from './OptionsCamera.jsx';
import ProfilePlant from './ProfilePlant.jsx';
import AppBar from './AppBar.jsx';
import ViewCamera from './ViewCamera.jsx'; // Asegúrate de que esta importación sea correcta

function Main() {
  const location = useLocation();
  const isRootPath = location.pathname === '/';

  return (
    <>
      {!isRootPath && <AppBar />}
      <Routes>
        <Route element={<Home />} path="/" />
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
