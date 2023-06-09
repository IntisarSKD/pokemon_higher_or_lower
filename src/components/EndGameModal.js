import { useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";
import PlayContainer from "../containers/PlayContainer";
import score from "../containers/PlayContainer"
import setScore from "../containers/PlayContainer"
import maxScore from "../containers/PlayContainer"
import setMaxScore from "../containers/PlayContainer"
import setLives from "../containers/PlayContainer"

const EndGameModal = () => {

    const navigate = useNavigate();

    const handlePlayAgain = (score, setMaxScore) => {
        navigate("/play")
        setMaxScore(score);
    };


    const handleMainMenu = () => {
        navigate ("/")
    };

    return ( 
        <>
            <h1>Game Over!</h1>
            <p>Final Score: {score}</p>
            <button onClick={handlePlayAgain}>Play again</button>
            <button onClick={handleMainMenu}>Main Menu</button>
        </>
     );
    }
 
export default EndGameModal;