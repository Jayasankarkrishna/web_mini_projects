import React, { useState, useRef } from "react";
import { useLocation , Link} from "react-router-dom";
import './Activity.css'
import { OverlayTrigger, Popover, Image, Button, Container, Row, Col } from 'react-bootstrap';
import './SideBar.css'
import ThreeDPage from '../3DWebsites/3DCube'
import { useNavigate} from 'react-router-dom'; 
import Activity from "./Activity";



function Navbar({ userData }) {
  const [showProfile, setShowProfile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const location = useLocation();
  const profileRef = useRef(null);

  const user = JSON.parse(sessionStorage.getItem('useData'));

  const navigate = useNavigate();


console.log(JSON.parse(sessionStorage.getItem('useData')).name);
console.log(JSON.parse(sessionStorage.getItem('useData')).userId);
if(!user.userId){
  navigate( '/Activity',{state: {userData}});
}
  const handleLogout = () => {
    window.location.href = "/";
    sessionStorage.removeItem("useData")
    // Assuming '/' is your login page URL
  };


  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Profile Details</Popover.Header>
      <Popover.Body style={{ textAlign: "center" }}>
        <div>
          <Image
            src="/photo.png"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
            ref={profileRef}
          />
        </div>
        <br />
        <span className="underline">Name</span>: {user.name}<br />
        <span className="underline">MobileNO</span>: {user.mobileNo}<br />
        <span className="underline">UserId</span>: {user.userId}<br />
      </Popover.Body>
    </Popover>
  );

  const sidebar = (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <Container>
        <Row>
          <Col>
            <ul><br/><br/>
           <li><Link to="/Activity" className="active">Dashboard</Link></li><br/><br/><br/>

              <li>Link 2</li><br/><br/>
              <li>Link 3</li><br/>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <div>
       <ul>
    <li> <a onClick={() => setShowSidebar(!showSidebar)} className="sidebar-toggle">
        ☰
      </a>
      {sidebar}
      </li>
     
     
        <li>
          <a className="active" onClick={handleLogout}>
            Logout
          </a>
        </li>

         {/* <li> */}
          {/* Add your 3D icon component here */}
          {/* <ThreeDPage /> */}
        {/* </li> */}

        <li>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose={true}>
            <a variant="secondary">
              <Image
                src="/photo.png" // Path to the image in the public folder
                width={32}
                height={32}
                border-radius={50}
                style={{ borderRadius: "50%" }}
                ref={profileRef}
              />
            </a>
          </OverlayTrigger>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
