import React from 'react';
import './Quiz.css';
import { useQuiz } from './QuizContext';

const QuestionList = () => {
  const { questions, currentQuestionIndex, handleClick, currentAnswer } = useQuiz();

  return (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <ul>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(option)}
            className={currentAnswer === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
