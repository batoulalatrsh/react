import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
export default function Question({
  questionText,
  answers,
  answerState,
  selectedAnswer,
  onSelectedAnswer,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timer={10000} onTimeOut={onSkipAnswer} />
      <h2>{questionText}</h2>

      <Answer
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelectAnswer={onSelectedAnswer}
      />
    </div>
  );
}
