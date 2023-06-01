import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import quizzesData from "../../QuizData.json";
import "./Quiz.css";
import NextButton from "../Buttons/NextButton";
import End from "../End/End";

function Quiz() {
  const { quizId } = useParams();
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const quiz = quizzesData.find((quiz) => quiz.quizId === quizId);
    setCurrentQuiz(quiz);
  }, [quizId]);

  if (!currentQuiz) {
    return <p>Loading quiz...</p>;
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  const handleAnswerSelect = (isCorrect) => {
    document.getElementById("nextButtonContainer").style.display = "flex";
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    currentQuestion.answers.map((answer, index) => {
      if (answer.isCorrect === true) {
        document.getElementById(index).style.backgroundColor = "green";
        document.getElementById(index).style.pointerEvents = "none";
      } else {
        document.getElementById(index).style.backgroundColor = "red";
        document.getElementById(index).style.pointerEvents = "none";
      }
    });
  };

  const nextQuestion = () => {
    const elements = document.getElementsByClassName("quizButtons");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#086788";
      elements[i].style.pointerEvents = "auto";
    }
    document.getElementById("nextButtonContainer").style.display = "none";
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (currentQuestionIndex >= currentQuiz.questions.length) {
    return <End score={score} />;
  }

  return (
    <div className="quizContainer">
      <div className="quizTop">
        <div className="emptyToCenter"></div>
        <h2 className="quizTitle">{currentQuiz.quizName}</h2>
        <p className="quizScore">Score: {score}/10</p>
      </div>
      <div className="quizBottom">
        <h3 className="quizQuestions">{currentQuestion.question}</h3>
        <ul className="quizUl">
          {currentQuestion.answers.map((answer, index) => (
            <li key={index} className={`quizAnswers`}>
              <button
                onClick={() => handleAnswerSelect(answer.isCorrect)}
                className="quizButtons"
                id={index}
              >
                {answer.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        id="nextButtonContainer"
        onClick={nextQuestion}
        style={{ display: "none" }}
      >
        <NextButton />
      </div>
    </div>
  );
}

export default Quiz;
