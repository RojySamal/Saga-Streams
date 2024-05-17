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
import { useAuthContext } from "./hooks/useAuthContext";
import ProfilePage from "./Pages/ProfilePage";
import BlogPage from "./Pages/BlogPage";
import Feedback from "./Pages/Feedback";

function App() {
  const {
    state: { user },
  } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="pensaga" element={user ? <CreatePost /> : <HomePage />} />
        <Route path="readsaga" element={user ? <SagaBlogs /> : <HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="blog" element={user ? <BlogPage /> : <HomePage />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
    </Routes>
  );
}

export default App;
