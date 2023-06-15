import { useState } from "react";

const OtherLoginModal = ({ handleLogin, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login to your account</h2>
        <form>
          <label>
            Trainer-name:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>Log in</button>
          <button onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default OtherLoginModal;
