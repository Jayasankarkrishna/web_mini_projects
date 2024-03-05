import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie';

import logo from './logo.svg';
import './App.css';
import Login from './Components/practice/Login'
import Activity from './Components/practice/Activity';
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
import Sidebar from './Components/practice/Sidebar';
import Navbar from './Components/practice/Navbar';

function App({ toggleSidebar, closeSidebar }) {
  

  return (
    <div className="App">
{/* <Practice/> */}


{/* <ChessGame/> */}

{/* <MyGame/> */}



      <Router>
    <Routes>
       <Route path="/" element={<Login  />} />
    <Route path="/activity" element={<Activity />} />
  
       </Routes>
 </Router> 








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




