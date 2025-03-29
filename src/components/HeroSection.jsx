import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>SSC Exam Practice Questions</h1>
        <p>
          Prepare with <span className="highlight">20,000+</span> questions in
          English & GK to boost your success in SSC Exams.
        </p>
        <button className="hero-button" onClick={() => navigate("/subject")}>
          Start Practicing
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
