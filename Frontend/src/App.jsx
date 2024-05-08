import React from "react";
import "./App.css";
import Blog from "./Home/Blog";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
// import Layout from "./Pages/Layout";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route instead of createBrowserRouter and RouterProvider

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Blog />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
