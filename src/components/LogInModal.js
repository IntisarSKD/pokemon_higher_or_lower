// import { useState } from "react";

// const LogInModal = ({ handleLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (username) => {
//     setUsername(username.target.value);
//   };

//   const handlePasswordChange = (password) => {
//     setPassword(password.target.value);
//   };

//   const handleSubmit = (submit) => {
//     submit.preventDefault();
//     handleLogin(username, password);
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={handleUsernameChange}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </label>
//           <button type="submit">Join</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LogInModal;


import { useState } from "react";

const LogInModal = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (username) => {
    setUsername(username.target.value);
  };

  const handlePasswordChange = (password) => {
    setPassword(password.target.value);
  };

  const handleSubmit = (submit) => {
    submit.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
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
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
};

export default LogInModal;

