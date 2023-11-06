import React from 'react';
import { Route, Routes, useLocation } from 'react-router-native';
import Home from './Home';
import ListPlant from './ListPlant';
import OptionsCamera from './OptionsCamera.jsx';
import ProfilePlant from './ProfilePlant.jsx';
import AppBar from './AppBar.jsx';

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
        <Route path="/profile/:id" element={<ProfilePlant />} />
        {/* Agrega más rutas aquí según sea necesario */}
      </Routes>
    </>
  );
}

export default Main;
