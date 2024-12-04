import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import SingleShowPage from "./components/SingleShowPage";
import { Routes, Route, Navigate } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <HomePage />
            <Footer />
          </>
        }
      />
      <Route
        path="single-show/:id"
        element={
          <>
            <Header />
            <SingleShowPage />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};
export default App;
