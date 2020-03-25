import React from "react";
import "./Score.css";


function Score(props) {
    return (
        <div className="card-body">
            <p className="card-text">Score: {props.score}</p>
            <p className="card-text">highscore: {props.score}</p>
        </div>

    )
}





export default Score;