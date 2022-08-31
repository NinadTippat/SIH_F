import React, { useState } from 'react'
import "./Test.css"
import { Link } from "react-router-dom";


function Test() {

    const questions = [
        {
            questionText: "Do you like to go on treks, hiking, or simply walking in nature ?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you like to read books or magazines, or watch films or TV programmes in which nature is present?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Are you good at writing down the differences between different types of trees, dogs, birds, or other kinds of flora or fauna?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you love pets?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Are you concerned with the destruction of nature?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you have a hobby that is related to nature in some way (for example,bird watching)",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you prefer to go on holiday to natural environments rather than to big cities?",
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
    const [score3, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect === 5) {
            setScore(score3 + 5);
        } else if (isCorrect === 4) {
            setScore(score3 + 4);
        } else if (isCorrect === 3) {
            setScore(score3 + 3);
        } else if (isCorrect === 2) {
            setScore(score3 + 2);
        } else if (isCorrect === 1) {
            setScore(score3 + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    const per3 = (score3 * 100 / 35);
    const res3 = per3.toPrecision(4);
    const Render_Score3 = () => {
        if ((score3 * 100 / 35) > 85) {
            return <>
                Based on your answers,  here are some recommended careers
                <br />
                <br />
                Astronomer
                <br />
                Botanist
                <br />
                Conservationist
                <br />
                Gardener
                <br />
                Farmer
                <br />
                Animal Trainer
                <br />
                Zookeeper
                <br />
                Geologist
                <br />
                Marine Biologist
                <br />
                Ecologist
                <br />
                Veterinarian
                <br />
                Forest ranger
                <br />
                Landscaper
                <br />
                Meteorologist
                <br />
                Nature photographer
                <br />
                <div >
                    <Link to="/test4"><button className="next_btn" >Next</button></Link>
                </div>
            </>
        }
        else if ((score3 * 100 / 35) < 85) {
            return <>
                <div className="score-section">
                    <h2> Based on your answers,  we request you to go for next test.</h2>
                    <div >
                        <Link to="/test4"><button className="next_btn" >Next</button></Link>
                    </div>
                </div>
            </>
        }
    }



    return (
        <div className="test">
            <h1 className='test_heading'>Naturalistic Test</h1>
            <div className="app">
                {showScore ? (
                    <div className="score-section">
                        <Render_Score3 />
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