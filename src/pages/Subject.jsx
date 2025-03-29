import React from "react";
import "./Subject.css";

const subjects = ["English", "GK"];

const Subject = () => {
  return (
    <div
      className="container"
      onClick={() => (window.location.href = "/Index")}
    >
      <h2>Subjects</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default Subject;
