import { BrowserRouter, Route, Routes } from "react-router-dom";
import EndGameModal from "./components/EndGameModal";
import LogInForm from "./components/LogInForm";
import PlayContainer from "./containers/PlayContainer";
import LayOut from "./reactrouter/LayOut";
import NoPage from "./reactrouter/NoPage";
import ReactDOM from "react-dom/client";
import './App.css';


export default function App() {
  return (
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
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
