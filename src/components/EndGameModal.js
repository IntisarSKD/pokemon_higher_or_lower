import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import App from "../App";
import PlayContainer from "../containers/PlayContainer";
import score from "../containers/PlayContainer"
import setScore from "../containers/PlayContainer"
import highScore from "../containers/PlayContainer"
import setHighScore from "../containers/PlayContainer"
import setLives from "../containers/PlayContainer"
const EndGameModal = () => {
    const navigate = useNavigate();
    // const { setHighScore, highScore} = useContext(Filecontext)
    const location = useLocation();
    const score = location.state?.score;

    const handlePlayAgain = () => {
        navigate("/play")
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