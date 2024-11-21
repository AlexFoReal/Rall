import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/products';
import Markisen from '../pages/products/markisen';
import FensterTueren from '../pages/products/fenster-tueren';
import Terrassendach from '../pages/products/terrassendach';
import Rollladen from '../pages/products/rollladen';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produkte" element={<Products />} />
      <Route path="/produkte/markisen" element={<Markisen />} />
      <Route path="/produkte/fenster-tueren" element={<FensterTueren />} />
      <Route path="/produkte/terrassendach" element={<Terrassendach />} />
      <Route path="/produkte/rollladen" element={<Rollladen />} />
    </Routes>
  );
};

export default AppRoutes;