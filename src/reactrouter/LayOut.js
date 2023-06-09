import { Link, Outlet } from "react-router-dom";

const LayOut = () => {
    return ( 
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">LogInForm</Link>
                </li>
                <li>
                    <Link to="/play">PlayContainer</Link>
                </li>
                <li>
                    <Link to="/endgame">EndGameModal</Link>
                </li>
                <li>
                    <Link to="leader-board">LeaderBoard</Link>
                </li>
            </ul>
        </nav>

        <Outlet/>
        
        </>


     );
}
 
export default LayOut;