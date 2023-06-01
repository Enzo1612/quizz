import React from "react";
import { Link } from "react-router-dom";
import "./QuizList.css";

function QuizList({ quizzes }) {
  return (
    <div className="quizListContainer">
      <h1>ALL THE QUIZZES</h1>
      <ul className="quizListUl">
        {quizzes.map((quiz) => (
          <li key={quiz.quizId} className="quizzListLi">
            <Link to={`/quiz/${quiz.quizId}`}>{quiz.quizName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
