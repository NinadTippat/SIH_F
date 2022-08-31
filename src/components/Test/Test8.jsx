import React, { useState } from 'react'
import "./Test.css"
import { Link } from "react-router-dom";


function Test() {

    const questions = [
        {
            questionText: "I enjoy working on my own and don't perfer to work with others also have a few close friends",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: " I have a good understanding of my feelings and How I will react to situations",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "I have a my firm opinion on questions concerning values and beliefs and am not easily influenced by others ?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "You spend a lot of time thinking about life and reflecting on your place in the world.",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "You have a very philosophical outlook on life - and it's always evolving.",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "You are ambitious and confident in your own abilities.",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "If you're feeling bad, you're usually able to discover the root of your negative emotions.",
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
    const [score8, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect === 5) {
            setScore(score8 + 5);
        } else if (isCorrect === 4) {
            setScore(score8 + 4);
        } else if (isCorrect === 3) {
            setScore(score8 + 3);
        } else if (isCorrect === 2) {
            setScore(score8 + 2);
        } else if (isCorrect === 1) {
            setScore(score8 + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const per8 = (score8 * 100 / 35);
    const res8 = per8.toPrecision(4);
    const Render_Score8 = () => {
        if ((score8 * 100 / 35) > 85) {
            return <>
                Based on your answers,  here are some recommended careers
                <br />
                <br />
                Psychologist
                <br />
                Philosopher
                <br />
                Writer
                <br />
                Theologian
                <br />
                Career counselor
                <br />
                Consultant
                <br />
                Criminologist
                <br />
                Energy healer
                <br />
                Personal counselor
                <br />
                Philosopher
                <br />
                Program planner
                <br />
                <div >
                    <Link to="/CareerLibrary"><button className="next_btn" >Home</button></Link>
                </div>
            </>
        }
        else if ((score8 * 100 / 35) < 85) {
            return <>
                <div className="score-section">
                    <h2> Based on your answers,  we request you to go for next test.</h2>
                    <div >
                        <Link to="/CareerLibrary"><button className="next_btn" >Home</button></Link>
                    </div>
                </div>
            </>
        }
    }




    return (
        <div className="test">
            <h1 className='test_heading'>Intrapersonal Test</h1>
            <div className="app">
                {showScore ? (
                    <div className="score-section"  >
                        <Render_Score8 />
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