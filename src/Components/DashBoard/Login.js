import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom'; 
import axios from 'axios'; 
import './Task1.css'
import {Image } from 'react-bootstrap';
import { AiFillLock } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';





const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); 
    const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      setErrorMessage('');
      axios.post('https://www.mypartydashboard.com/ActivityTrack/WebService/loginUser', {
        username: username,
        password: password
      })
        .then(response => {

          console.log('Login Successful', response.data);

          if(response.data.loginStatus !== "Fail") {


          setUserData(response.data);
          sessionStorage.setItem('useData', JSON.stringify(response.data));
          setLoggedIn(true);

          setTimeout(() => {

            navigate( '/welcome',{state: {userData}});

            setErrorMessage('Login Succesful ',response.data.message)

          }, 1000); // Delay of 5 seconds

          } else {
            setErrorMessage('User credentials are wrong');

            console.log('Login fail', response.data);

          }
          if(response.status === 200){
            setUserData(response.data);
            // setLoggedIn(true);
          }else{
            setErrorMessage(response.data.message || 'Invalid username or password.');
          setLoggedIn(false);

        }
        })
        .catch(error => {
          console.error('Login Error:', error.response);
          setErrorMessage('An error occurred during login.');
        });
    } else {
      setErrorMessage('Please enter both username and password.');
    }
  };

  return (
    <div className='wrapper'>
      <div className='login_box'>
        <div className="login-header">
          <span>Login</span>
        </div>

        {!loggedIn ? (
          <>
<Image
    src="/photo.png"
    width={80}
    height={80}
    className="rounded-circle"
    alt="Your Alt Text"
/>

        <div className='input_box'>
          <input
            type="text"
            value={username}
            className="input-field"
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="user" className="label">Username</label>

          <BsFillPersonFill className="icon" />
             </div>
        <div className='input_box'>
          <input
            type="password"
            value={password}
            className="input-field"
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="pass" className="label">Password</label>

          <AiFillLock className="icon" />

                       </div>
        {errorMessage && <p style={{ color: 'black' }}>{errorMessage}</p>}
        <div className="input_box">
          <input onClick={handleLogin} type="submit" className="input-submit" value="Login" />
        </div>
        <div className="remember-forgot">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="forgot">
            <a href="#">Forgot password?</a>
          </div>
        </div><br/>
        <div className="register">
          <span>Don't have an account? <a href="#">Register</a></span>
        </div>

        </>
               ) : (
<div>
                <h2>Hai! {userData.name}</h2>

               <p>Login Succesful</p>
               </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
