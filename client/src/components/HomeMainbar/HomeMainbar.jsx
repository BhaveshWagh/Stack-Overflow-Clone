import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import QuestionList from "./QuestionList";
import "./HomeMainbar.css";

const HomeMainbar = () => {
  var questionsList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function ?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb", "javascript"],
      userPosted: "Monu",
      askedOn: "Nov 27 2000",
    },
    {
      id: 2,
      votes: 2,
      noOfAnswers: 23,
      questionTitle: "What is rendering in reactjs ?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb", "javascript"],
      userPosted: "Sonu",
      askedOn: "Jan 15 2020",
    },
    {
      id: 3,
      votes: 111,
      noOfAnswers: 50,
      questionTitle: "What is a API's ?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb", "javascript"],
      userPosted: "Tinu",
      askedOn: "Feb 1 2018",
    },
  ];

  const location = useLocation();

  const user = 1;
  const navigate = useNavigate();

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
