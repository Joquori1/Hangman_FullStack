//import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Hangman from "./components/Hangman";
import Players from "./components/Players";

export default function App() {
  return (
    <>
    
      <Router>
     
      <Routes>
         <Route path="/" element={<Navbar/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/players" element={<Players />} />
          <Route path="/hangman" element={<Hangman />} />

          </Routes>
      </Router>
      </>
  );
}
