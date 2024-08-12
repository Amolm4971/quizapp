import React from 'react';
import QuestionList from './QuestionList';
import { QuizProvider, useQuiz } from './QuizContext';

const QuizContent = () => {
  const { questions, currentQuestionIndex, currentAnswer, handleNextQuestion, score } = useQuiz();

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <div>
          <QuestionList />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? 'button-disable' : 'button'}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div>Your Score is {score}</div>
      )}
    </div>
  );
};

const Quiz = () => (
  <QuizProvider>
    <h1>Quiz</h1>
    <QuizContent />
  </QuizProvider>
);

export default Quiz;
