import React, { useState } from 'react';
import './Question.css';

export default function Questions() {
    const questions = [
        {
            questionText: 'What language is Lorem ipsum dolor sit amet consectetuer?',
            answerOpitons: [
                { answerText: 'Latin', isCorrect: true },
                { answerText: 'Icelandic', isCorrect: false },
                { answerText: 'German', isCorrect: false },
                { answerText: 'Italian', isCorrect: false },
            ]
        },
        {
            questionText: 'Gandalf is a known fictional character but in what story does he appear in?',
            answerOpitons: [
                { answerText: 'Captain Underpants', isCorrect: false },
                { answerText: 'Lord of the Rings', isCorrect: true },
                { answerText: 'Harry Potter', isCorrect: false },
                { answerText: 'Sleeping Beauty', isCorrect: false },
            ]
        },
        {
            questionText: 'How do you get a job without experience? how do you get experience without a job?',
            answerOpitons: [
                { answerText: 'Impossible!', isCorrect: false },
                { answerText: 'By making mobile apps or websites much like this one!', isCorrect: true },
            ]
        },
        {
            questionText: 'Would you hire me?',
            answerOpitons: [
                { answerText: 'Absolutely!', isCorrect: true },
                { answerText: 'No...', isCorrect: false },
                { answerText: 'Uhmmm... Let me get to know you a bit better first.', isCorrect: true },
            ]
        },
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionDecision = (isCorrect) => {
        if(isCorrect) {
            setScore(score+1);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }  
    }; 
    return (
        <div className="card">
            {showScore ? (
                <div className='score-count'>
                    Your score is {score} out of {questions.length}
                </div> 
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span> Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOpitons.map((answerOpitons) => 
                            <button onClick={() => handleAnswerOptionDecision(answerOpitons.isCorrect)}>{answerOpitons.answerText}</button>
                        )}
                    </div>
                </>
            )
            }
        </div>
    )
}