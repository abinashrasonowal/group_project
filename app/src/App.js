import React from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import About from "./components/About";
import Profile from "./components/Profile";
import { useSelector } from "react-redux"
import ProtectedRoute from "./ProtectedRoute";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const { isAuthenticated } = useSelector((state) => state.root);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route exact path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
