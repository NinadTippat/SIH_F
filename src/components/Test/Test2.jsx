import React, { useState } from 'react'
import "./Test.css"
import { Link } from "react-router-dom";


function Test() {

    const questions = [
        {
            questionText: "Do you understand Language and Literature, Social Sciences, and History better than Mathematics and Natural Sciences in your school?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you feel you understand what you read better than others?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "You have no trouble reading?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Is it easy for you to speak or read in other languages?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you enjoy word games like Scrabble, Anagram Scramble?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Are books important for you?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do your friends ask you to explain things they don’t know how to explain?",
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
    const [score2, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect === 5) {
            setScore(score2 + 5);
        } else if (isCorrect === 4) {
            setScore(score2 + 4);
        } else if (isCorrect === 3) {
            setScore(score2 + 3);
        } else if (isCorrect === 2) {
            setScore(score2 + 2);
        } else if (isCorrect === 1) {
            setScore(score2 + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const per2 = (score2 * 100 / 35);
    const res2 = per2.toPrecision(4);
    const Render_Score2 = () => {
        if ((score2 * 100 / 35) > 85) {
            return <>
                Your score is {res2} Based on your score,  here are some recommended careers
                <br />
                <br />
                Editor
                <br />
                Public Speaker
                <br />
                Computer technician
                <br />
                Politician
                <br />
                Preacher
                <br />
                Historian
                <br />
                Journalist
                <br />
                Teacher
                <br />
                Poet
                <br />
                Broadcaster
                <br />
                English / Writing Tutor
                <br />
                Actor / Actress
                <br />
                <div >
                    <Link to="/test3"><button className="next_btn" >Next</button></Link>
                </div>
            </>
        }
        else if ((score2 * 100 / 35) < 85) {
            return <>
                <div className="score-section">
                    <h2> Based on your answers,  we request you to go for next test.</h2>
                    <div >
                        <Link to="/test3"><button className="next_btn" >Next</button></Link>
                    </div>
                </div>
            </>
        }
    }




    return (
        <div className="test">
            <h1 className='test_heading'>Linguistic Test</h1>
            <div className="app">
                {showScore ? (
                    <div className="score-section">
                        <Render_Score2 />
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