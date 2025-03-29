import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Index from "./pages/index";
import Dashboard from "./pages/Dashboard";
import McqPractice from "./pages/McqPractice";
import Subject from "./pages/Subject";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/McqPractice/:topic" element={<McqPractice />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
