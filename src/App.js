import './App.css';

import React from 'react';
import Signin from './compoenet/Signin';
import Signup from './compoenet/Signup';

// function Login() {
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');

// const handleUsernameChange = (e) => {
//   setUsername(e.target.value);
// };

// const handlePasswordChange = (e) => {
//   setPassword(e.target.value);
// };
// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (username === 'yourUsername' && password === 'yourPassword') {
//       alert('Login successful');
//     } else {
//       alert('Login failed. Please check your username and password.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//           Username:
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//         onChange={handleUsernameChange}
//       /><br/>
//       Password:
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={handlePasswordChange}
//       /><br/>
//       <button type="submit">Login</button>
//     </form>
//   </div>
// );
// }
function App(){
  return(
  <div>
    <h1>Hello</h1>
    <Signin/>
    <Signup/>
  </div>
  );
}
export default App;