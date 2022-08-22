import React, { useState } from 'react'
import "./Test.css"
import { Link } from "react-router-dom";


function Test() {

    const questions = [
        {
            questionText: "Do you understand the rhythm of a musical theme with a percussion instrument?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you know the melodies of many songs or pieces of music?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you perceive when a musical note is off key?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you play a musical instrument?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you always listen to music?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Can you differentiate the instruments that are playing in any piece of music?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you produce sounds or sing while  studying or working?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score4, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect === 5) {
            setScore(score4 + 5);
        } else if (isCorrect === 4) {
            setScore(score4 + 4);
        } else if (isCorrect === 3) {
            setScore(score4 + 3);
        } else if (isCorrect === 2) {
            setScore(score4 + 2);
        } else if (isCorrect === 1) {
            setScore(score4 + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };




    return (
        <div className="test">
            <h1 className='test_heading'>Musical Test</h1>
            <div className="app">
                {showScore ? (
                    <div className="score-section">
                        {/* You scored {(score * 100) / 35}% out of {(questions.length * 5 * 100) / 35}% */}
                        Your scored {score4}

                        <div >
                            <Link to="/test5"><button className="next_btn" >Next</button></Link>
                        </div>
                    </div>

                ) : (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">
                                {questions[currentQuestion].questionText}
                            </div>
                        </div>
                        <div className="answer-section">
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className='ans_btn'
                                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                                >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>


                    </>
                )}
            </div>
        </div>


    )
}

export default Test 