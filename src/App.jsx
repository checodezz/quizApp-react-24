import { useState } from "react";
import "./App.css";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [results, setResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is 2 + 2?",
      options: ["3", "4", "5"],
      correctAnswer: "4",
    },
    {
      id: 2,
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      id: 3,
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ["Harper Lee", "J.K. Rowling", "Stephen King"],
      correctAnswer: "Harper Lee",
    },
  ];

  const currentQuestionObj = questions[currentQuestionIndex];
  
  const handleAnswerChange = (event) => {
    const value = event.target.value;
    if (value === currentQuestionObj.correctAnswer) {
      setScore((prevValue) => prevValue + 1);
    }
    setSelectedOption(value);
  };

  
  const handleNextClick = () => {
    setCurrentQuestionIndex((prevVal) => prevVal + 1);
    if (currentQuestionIndex + 1 >= questions.length) {
      setResults(true);
    }
  };

  
  return (
    <main>
      <h1>Quiz App</h1>
      {!results && (
        <div>
          <h2>Question {currentQuestionObj.id}</h2>
          <p>{currentQuestionObj.question}</p>
          <ul>
            {currentQuestionObj.options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    name={`quest_${currentQuestionObj.id}`}
                    onChange={handleAnswerChange}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextClick}>Next</button>
        </div>
      )}
      {results && (
        <div>
          <h2>Quiz Result</h2>
          <p>Your score: {`${score}/ ${questions.length}`}</p>
        </div>
      )}
    </main>
  );
}
