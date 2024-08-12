import React, { createContext, useState, useContext } from 'react';

// Create a context
const QuizContext = createContext();

// Create a provider component
export const QuizProvider = ({ children }) => {
  const questions = [
    {
      question: 'What is React?',
      options: ['CSS Framework', 'React Library', 'React Framework', 'Testing Tools'],
      answer: 'React Library'
    },
    {
      question: 'What is 2+2?',
      options: ['5', '6', '4', '7'],
      answer: '4'
    },
    {
        question: 'Which language is used to style web pages?',
        options: ['HTML', 'JavaScript', 'CSS', 'Python'],
        answer: 'CSS'
      },
      {
        question: 'Which company developed React?',
        options: ['Google', 'Facebook', 'Microsoft', 'Twitter'],
        answer: 'Facebook'
      },
      {
        question: 'What does HTML stand for?',
        options: [
          'HyperText Markup Language',
          'HighText Machine Language',
          'HyperText and links Markup Language',
          'None of these'
        ],
        answer: 'HyperText Markup Language'
      },
      {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        answer: 'Paris'
      },
      {
        question: 'Which year was JavaScript created?',
        options: ['1995', '1990', '2000', '1985'],
        answer: '1995'
      }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        currentAnswer,
        score,
        handleClick,
        handleNextQuestion
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use the Quiz context
export const useQuiz = () => useContext(QuizContext);
