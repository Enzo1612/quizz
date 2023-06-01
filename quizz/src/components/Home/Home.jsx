import React, { useEffect, useState } from "react";
import "./Home.css";
import QuizList from "../QuizzList/QuizzList";
import quizzesData from "../../QuizData.json";

const Home = () => {
  return (
    <div className="homeContainer">
      <QuizList quizzes={quizzesData} />
    </div>
  );
};

export default Home;
