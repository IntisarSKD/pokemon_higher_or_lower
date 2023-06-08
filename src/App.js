import './App.css';
import PlayContainer from './containers/PlayContainer';
import LogInForm from './components/LogInForm';
import EndGameModal from './components/EndGameModal';

function App() {

  return (
    <>
      <LogInForm/>
      <PlayContainer />
      <EndGameModal/>
    </>
  );
}

export default App;

