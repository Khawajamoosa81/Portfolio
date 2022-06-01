import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element="" />
          <Route path="/project" element="" />
          <Route path="/about" element="" />
          <Route path="/resume" element="" />
          <Route path="*" element="" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
