import { useState } from 'react';
import LogInModal from './LogInModal';

const LogInForm = () => {

    const [listOfUsers, setListOfUsers] = useState([]);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
    };

    const handleLogin = (username, password) => {
        const newUser = {
        username,
        password,
        };
        setListOfUsers([...listOfUsers, newUser]);
        setShowLoginModal(false);
    };

    return (  
        <>
            <h1>Higher or Lower: Pokèmon edition</h1>
            <button onClick={toggleLoginModal}>Login</button>
            <button>Play</button>
            <button>LeaderBoard</button>

            {showLoginModal && (
            <LogInModal handleLogin={handleLogin} />
        )}
        </>

    );
}
 
export default LogInForm;