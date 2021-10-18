import React from "react";
import './style.css'
import QuizTitle from'./QuizTitle'
import Q1 from'./Q1'
import Q2 from './Q2';

function Quiz() {
    return (
            <div className="Quiz">
                <QuizTitle/>
                <Q1/>
                <Q2/>
            </div>
        )
}

export default Quiz;