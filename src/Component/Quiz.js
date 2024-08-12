import React, { useState } from 'react';
import QuestionList from './QuestionList';

const Quiz = () => {
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

  const [currentQuestionIndex,SetCurrentQuestionIndex] = useState(0);
  const [currentAnswer,SetCurrentAnswer] = useState(null);
  const [score,SetScore]=useState(0)


  const handleClick=(option)=>{
    SetCurrentAnswer(option)
    if(option===questions[currentQuestionIndex].answer){
        SetScore(score+1)
    }

  };

  const handleNextQuestion=()=>{
    SetCurrentQuestionIndex(currentQuestionIndex+1)
    SetCurrentAnswer(null)
  }


  return (
    <div>

        {currentQuestionIndex <questions.length ? 
         <div>
         <QuestionList 
             question={questions[currentQuestionIndex].question}
             options={questions[currentQuestionIndex].options} handleClick={handleClick}
             currentAnswer={currentAnswer}
            
           />
            <button disabled={currentAnswer===null}  className={currentAnswer===null ? 'button-disable' : 'button'}
             onClick={handleNextQuestion} >Next Question </button>
         </div> : <h1>Your Score is : {score}</h1> }
   
    </div>
  );
};

export default Quiz;
