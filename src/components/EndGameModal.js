import App from "../App";
import PlayContainer from "../containers/PlayContainer";
import score from "../containers/PlayContainer"

const EndGameModal = () => {
    return ( 
        <>
            {/* <App/> */}
            {/* <PlayContainer/> */}
            <h1>Game Over!</h1>
            <p>Final Score: {score}</p>
            <button>Play again</button>
        </>
     );
}
 
export default EndGameModal;