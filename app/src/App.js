import React from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Chose_one from './components/chose_one';
import Register from './components/Register';
import Login from './components/Login';
import About from "./components/About";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Chose_one />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
