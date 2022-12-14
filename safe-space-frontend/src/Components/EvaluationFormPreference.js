import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Text, Title, Container } from "@mantine/core";
import { useAuth } from "./AuthContext.js";
import "./EvaluationFormPref.css";

import NavBar from "./NavBar.js";
import Footer from "./Footer.js";
export default function EvaluationFormPreference() {
  const navigate = useNavigate();

  const { updateAgePreference, updateLanguage, updateGender, updateReligion } =
    useAuth();

  const questions = [
    {
      questionText: "State your preferred language.",
      answerOptions: [
        { answerText: "English and Chinese", value: 1, isClicked: true },
        { answerText: "English and Tamil", value: 2, isClicked: true },
        { answerText: "English and Malay", value: 3, isClicked: true },
      ],
    },
    {
      questionText: "What is your preferred gender of the therapist?",
      answerOptions: [
        { answerText: "Male", value: "Male", isClicked: true },
        { answerText: "Female", value: "Female", isClicked: true },
      ],
    },
    {
      questionText: "Indicate your religion if any.",
      answerOptions: [
        { answerText: "No Preference", value: 1, isClicked: true },
        { answerText: "Christianity", value: 2, isClicked: true },
        { answerText: "Buddhism", value: 3, isClicked: true },
        { answerText: "Islam", value: 4, isClicked: true },
        { answerText: "Hinduism", value: 5, isClicked: true },
      ],
    },
    {
      questionText:
        "What is the age of the therapist you are comfortable with.",
      answerOptions: [
        { answerText: "20 to 29 years old", value: 1, isClicked: true },
        { answerText: "30 to 39 years old", value: 2, isClicked: true },
        { answerText: "40 to 49 years old", value: 3, isClicked: true },
        { answerText: "50 to 59 years old", value: 4, isClicked: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = async (isClicked, e) => {
    if (isClicked) {
      if (currentQuestion === 0) {
        updateLanguage(
          questions[currentQuestion].answerOptions[e.target.name].value
        );
      } else if (currentQuestion === 1) {
        updateGender(
          questions[currentQuestion].answerOptions[e.target.name].value
        );
      } else if (currentQuestion === 2) {
        updateReligion(
          questions[currentQuestion].answerOptions[e.target.name].value
        );
      } else if (currentQuestion === 3) {
        updateAgePreference(
          questions[currentQuestion].answerOptions[e.target.name].value
        );
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate("/evaluation/2");
    }
  };

  return (
    <div className="Page-body ">
      <NavBar />
      <div className="Content-container">
        <div className="align">
          <Container className="Content-body" size="md" px="xs">
            <Card
              className="Eval-form"
              shadow="sm"
              p="lg"
              radius="md"
              withBorder
            >
              <br />
              <br />
              <Title order={2} weight={500} align="center">
                Evaluation Form Preference{" "}
              </Title>
              <br />
              <br />
              <div className="app">
                <div className="question-section">
                  <div className="question-count">
                    <Text align="center" size="md">
                      <span>Question {currentQuestion + 1}</span>/
                      {questions.length}
                    </Text>
                  </div>
                  <Text align="center" size="md">
                    <div className="question-text">
                      {questions[currentQuestion].questionText}
                    </div>
                  </Text>
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption, index) => (
                      <button
                        className="buttonForm"
                        name={index}
                        onClick={(e) =>
                          handleAnswerOptionClick(answerOption.isClicked, e)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </div>
            </Card>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}
