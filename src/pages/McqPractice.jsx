import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./McqPractice.css";

const McqPractice = () => {
  const { topic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [progress, setProgress] = useState({});
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/data/${topic}.json`);
        if (!response.ok) throw new Error("Failed to load data");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuestions();
  }, [topic]);

  if (questions.length === 0) return <div>Loading questions...</div>;
  const question = questions[index];

  const handleOptionClick = (optionKey) => {
    if (progress[index]) return;
    setSelectedOption(optionKey);
    setShowAnswer(true);
    setAttempted((prev) => prev + 1);

    if (optionKey === question.correct_option) {
      setCorrect((prev) => prev + 1);
      setProgress((prev) => ({ ...prev, [index]: "correct" }));
    } else {
      setWrong((prev) => prev + 1);
      setProgress((prev) => ({ ...prev, [index]: "wrong" }));
    }
  };

  const nextQuestion = () => {
    setIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  const prevQuestion = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + questions.length) % questions.length
    );
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div className="mcq-container">
      <h2>MCQ Practice</h2>
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`progress-circle ${progress[i] || "neutral"} ${
                i === index ? "active" : ""
              }`}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <p className="stats">
        Attempted: {attempted} | Correct: {correct} | Wrong: {wrong}
      </p>
      <div className="question-header">
        <p>
          {question.question}{" "}
          <span className="exam-name">
            ({question.exam_name || question.exam})
          </span>
        </p>
      </div>
      <div className="options">
        {Object.entries(question.options).map(([key, option]) => (
          <button
            key={key}
            className={`option-btn ${
              showAnswer
                ? key === question.correct_option
                  ? "correct"
                  : selectedOption === key
                  ? "wrong"
                  : ""
                : ""
            }`}
            onClick={() => handleOptionClick(key)}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>
      {showAnswer && (
        <p className="solution">
          Solution:{" "}
          {typeof question.solution === "object"
            ? JSON.stringify(question.solution)
            : question.solution}
        </p>
      )}
      <div className="button-group">
        <button
          className="prev-btn"
          onClick={prevQuestion}
          disabled={index === 0}
        >
          Previous
        </button>
        <button className="next-btn" onClick={nextQuestion}>
          Next
        </button>
      </div>
    </div>
  );
};

export default McqPractice;
