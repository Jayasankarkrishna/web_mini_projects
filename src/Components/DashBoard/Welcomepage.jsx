import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom'; 


const Welcome = ({ userData }) => {

    // const navigate = useNavigate();

    const location = useLocation();
    // navigate( '/Activity',{state: {userData}});
    const user = JSON.parse(sessionStorage.getItem('useData'));

    return (
        <div>
            <Navbar/><br/>
            <h2>Hai Welcome {user.name} !</h2>
        </div>
    )
};

export default Welcome;