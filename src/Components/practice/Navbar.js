
import React, { useState, useRef, useMemo } from "react";
import { useLocation , Link} from "react-router-dom";
import './Activity.css'
import { OverlayTrigger, Popover,Image } from 'react-bootstrap';
import Sidebar from "./Sidebar";

function Navbar({ userData }) {
  const [showProfile, setShowProfile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();
  const profileRef = useRef(null);
  const user = location.state.userData;



  const handleLogout = () => {
    window.location.href = "/";
    //  Assuming '/' is your login page URL
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
        /></div><br/>
      <span className="underline">Name</span>: {user.name}<br/>
      <span className="underline">MobileNO</span>: {user.mobileNo}<br/>
      <span className="underline">UserId</span>: {user.userId}<br/>
      </Popover.Body>
    </Popover>
  );

  
  
   


  
  console.log(user.name);

  return (
    <div>
  
      <ul>
      <div className="sidebar">

      <li>
<Sidebar/>
</li>
</div>

        <li>
          <a className="active" onClick={handleLogout}>
            Logout
          </a>
        </li>
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