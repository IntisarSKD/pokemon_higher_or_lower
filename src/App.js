import { useState } from 'react';
import './App.css';
import LogInModal from './components/LogInModal';
import PlayContainer from './containers/PlayContainer';
import LogInForm from './components/LogInForm';
import Pokemon from './components/Pokemon';

function App() {
  // const [listOfUsers, setListOfUsers] = useState([]);
  // const [loggedInUserId, setLoggedInUserId] = useState(0);
  return (
    <>
    <h1>App.js</h1>
    
    {/* <PlayContainer/> */}
    {/* <LogInModal/> */}
    {/* <LogInForm/> */}
    <Pokemon/>
    </>
  );
}

export default App;
