import logo from "../images/jt.png";
import React, { useEffect } from "react";
import { createRain } from "./createRain";

const Initial = () => {
  useEffect(() => {
    createRain(); // Call createRain function when the component mounts
  }, []);

  return (
    <div className="initial">
      <div className="rain">{/* Your rain animation */}</div>
      <div className="content-container" style={{ zIndex: 2 }}>
        {/* Your content (topBar, navBar, logo) */}
        <div className="topBar">
          <nav className="navBar">
            <li className="navItem">About</li>
            <li className="navItem">Music</li>
            <li className="navItem">Socials</li>
          </nav>
        </div>
      </div>
      <div className="logo-container">
        <img draggable="false" src={logo} className="logo" alt="jt logo" />
      </div>
    </div>
  );
};

export default Initial;
