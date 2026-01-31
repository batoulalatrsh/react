import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answer.jsx";
import quizCompleteImg from "../assets/quiz-complete.png";
export default function Quiz({}) {
  const [userAnswer, setUserAnswer] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const shuffledAnswers = useRef();

  const activeQuestionIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      //To determine the selected answer
      setAnswerState("answered");

      setUserAnswer((prevAnswer) => [...prevAnswer, selectedAnswer]);

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex],
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz Complete" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  //Shuffle the answers
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.current.sort((a, b) => Math.random() - 0.5);
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timer={10000}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

        <Answer answers={QUESTIONS[activeQuestionIndex].answers} selectedAnswer={} />
      </div>
    </div>
  );
}
