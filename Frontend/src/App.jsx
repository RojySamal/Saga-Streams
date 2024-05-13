import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import HomePage from "./Home/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Layout from "./Pages/Layout";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./Pages/CreatePost";
import AboutPage from "./Pages/AboutPage";
import SagaBlogs from "./Pages/SagaBlogs";
import FireBaseImgUpload from "./Components/Firebase/FireBaseImgUpload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="pensaga" element={<CreatePost />} />
        <Route path="readsaga" element={<SagaBlogs />} />
      </Route>
    </Routes>
  );
}

export default App;
