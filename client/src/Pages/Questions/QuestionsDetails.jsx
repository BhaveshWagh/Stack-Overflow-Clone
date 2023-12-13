import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";

import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";

import "./Questions.css";

const QuestionsDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);

  // var questionsList = [
  //   {
  //     _id: "1",
  //     upVotes: 3,
  //     downVotes: 1,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function ?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongodb", "javascript"],
  //     userPosted: "Monu",
  //     askedOn: "Nov 27 2000",
  //     useId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Kumar Sanu",
  //         answeredOn: "Nov 30 2000",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "2",
  //     upVotes: 345,
  //     downVotes: 23,
  //     noOfAnswers: 23,
  //     questionTitle: "What is rendering in reactjs ?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongodb", "javascript"],
  //     userPosted: "Sonu",
  //     askedOn: "Jan 15 2020",
  //     useId: 1,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Ajay Kumar",
  //         answeredOn: "Jan 17 2020",
  //         userId: 2,
  //       },
  //     ],
  //   },
  //   {
  //     _id: "3",
  //     upVotes: 123,
  //     downVotes: 10,
  //     noOfAnswers: 50,
  //     questionTitle: "What is a API's ?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongodb", "javascript"],
  //     userPosted: "Tinu",
  //     askedOn: "Feb 1 2018",
  //     useId: 5,
  //     answer: [
  //       {
  //         answerBody: "Answer",
  //         userAnswered: "Kumar Sanu",
  //         answeredOn: "Jan 17 2020",
  //         userId: 2,
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="question-details-page">
      {questionsList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upvote} alt="upvote-logo" width="18" />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img src={downvote} alt="downvote-logo" width="18" />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          {" "}
                          <p>Asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userPosted.id}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>

                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} answers</h3>
                    <DisplayAnswer key={question._id} question={question} />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form>
                    <textarea name="" id="" cols="30" rows="10"></textarea>{" "}
                    <br />
                    <input
                      type="Submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p className="">
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}
                    or{" "}
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
