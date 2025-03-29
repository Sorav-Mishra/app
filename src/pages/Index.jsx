import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Index = () => {
  const navigate = useNavigate();

  const topics = [
    { name: "Spot the Error", file: "spot_the_error" },
    { name: "Sentence Improvement", file: "sentence_improvement" },
    { name: "Narration", file: "narration" },
    { name: "Active Passive", file: "active_passive" },
    { name: "Para Jumble", file: "para_jumble" },
    { name: "Fill in the Blanks", file: "fill_in_the_blanks" },
    { name: "Cloze Test", file: "cloze_test" },
    { name: "Comprehension", file: "comprehension" },
    { name: "One Word Substitution", file: "one_word_substitution" },
    { name: "Idioms", file: "idioms" },
    { name: "Synonyms", file: "synonyms" },
    { name: "Antonyms", file: "antonyms" },
    { name: "Spelling Check", file: "spelling_check" },
    { name: "Homonyms", file: "homonyms" },
  ];

  const handleTopicClick = (file) => {
    navigate(`/McqPractice/${file}`);
  };

  return (
    <div className="container">
      <h2 className="title">SSC English Index</h2>
      <div className="grid-container">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleTopicClick(topic.file)}
          >
            <h3>{topic.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
