import React from "react";
import "./End.css";

function End(props) {
  return (
    <div className="scoreContainer">
      <p className="scoreP">SCORE: {props.score}/10</p>
    </div>
  );
}

export default End;
