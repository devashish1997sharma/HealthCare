// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, System } from "../screens";
import { Summary } from "../screens/summary";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/system" element={<System />} />
    <Route path="/summary" element={<Summary />} />
  </Routes>
);

export default AppRoutes;
