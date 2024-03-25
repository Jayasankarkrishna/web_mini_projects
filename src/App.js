import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie';

import logo from './logo.svg';
import './App.css';
import Login from './Components/DashBoard/Login'
import Activity from './Components/DashBoard/Activity';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WhatsAppQRCode from './Components/WhatApp_Qr/Qr'

import Home from './pages/Home';
import ProfileCreation from './pages/ProfileCreation';
import Chat from './pages/Chat';
import AgentWorkflow from './pages/AgentWorkflow';
import SideMenu from './Components/SideMenu/SideMenu';
import LoginForm from './Components/Authentication/LoginForm';
import SignupForm from './Components/Authentication/SignupForm';

import MyGame from './Components/StylePractice/MyGame';

import ChessGame from './Chess/Chess';
import Sidebar from './Components/DashBoard/Sidebar';
import Navbar from './Components/DashBoard/Navbar';

import ThreeDPage from './Components/3DWebsites/3DCube';

import Welcome from './Components/DashBoard/Welcomepage';
import Practice from './Components/Practice_makes_good/practice'

import wel from './Components/Practice_makes_good/welcome'


function App() {
  

  return (
    <div className="App">

<Practice/>

{/* <Practice/> */}


{/* <ChessGame/> */}

{/* <MyGame/> */}


{/* 
      <Router>
    <Routes>
       <Route path="/" element={<Login  />} />
    <Route path="/Welcome" element={<Welcome />} />
    <Route path='/activity' element={<Activity/>}/>
       </Routes>
 </Router>   */}
{/* <Welcome/> */}
{/* <ThreeDPage></ThreeDPage> */}


{/*  */}
{/* <Practice/> */}





{/* <WhatsAppQRCode /> */}

{/* <Router>
            <div className="route">
                <SideMenu /><br/><br/><br/><br/><br/>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/profile-creation" element={<ProfileCreation />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/agent-workflow" element={<AgentWorkflow />} />
                </Routes>
            </div>
        </Router> */}
    

     {/* <h1>Welcome to your app</h1>
<LoginForm/>
<SignupForm/> */}

{/* <Activity1/> */}


    </div>




  );
}

export default App;




