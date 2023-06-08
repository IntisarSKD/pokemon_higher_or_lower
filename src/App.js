import './App.css';
import PlayContainer from './containers/PlayContainer';
import LogInForm from './components/LogInForm';
import EndGameModal from './components/EndGameModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInForm />} />
        <Route path="/play" element={<PlayContainer />} />
      </Routes>
    </Router>
  );
}

export default App;