import React from "react";
import "./App.css";
import Blog from "./Home/Blog";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Layout from "./Pages/Layout";
import { Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Blog />} />
        <Route path="login" element={<LoginPage />} /> 
        <Route path="register" element={<RegisterPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;
