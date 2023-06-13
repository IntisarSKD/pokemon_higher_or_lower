import { BrowserRouter, Route, Routes } from "react-router-dom";
import EndGameModal from "./components/EndGameModal";
import LogInForm from "./components/LogInForm";
import PlayContainer from "./containers/PlayContainer";
import LayOut from "./reactrouter/LayOut";
import NoPage from "./reactrouter/NoPage";
import ReactDOM from "react-dom/client";
import './App.css';
import { useState } from "react";
import { Filecontext } from "./reactrouter/FileContext";
export default function App() {
  // const [currentUser, setCurrentUser] = useState({highScore:0});
  const [currentGame, setCurrentGame] = useState({score:0, isComplete:false});
  const [player, setPlayer] = useState(null);
  return (
    <Filecontext.Provider value={{currentGame, setCurrentGame, player, setPlayer}}>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LayOut/>}/>
      <Route index element={<LogInForm/>}/>
      <Route path='play' element={<PlayContainer/>}/>
      <Route path='endgame' element={<EndGameModal/>}/>
      <Route path='*' element={<NoPage/>}/>
      {/* <Route path='leader-board' element={<LeaderBoard/>}/> */}
      </Routes>
    </BrowserRouter>
    </Filecontext.Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);