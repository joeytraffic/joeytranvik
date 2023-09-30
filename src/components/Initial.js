import logo from "../images/jt.png";
import instagram from "../images/icons/instagram.svg";
import itunes from "../images/icons/itunes.svg";
import soundcloud from "../images/icons/soundcloud.svg";
import spotify from "../images/icons/spotify.svg";
import xtwitter from "../images/icons/x-twitter.svg";
import React, { useEffect } from "react";
import { createRain } from "./createRain";

const Initial = () => {
  useEffect(() => {
    createRain();
  }, []);

  return (
    <div className="initial">
      <div className="rain">{}</div>
      <div className="content-container">
        {}
        <div className="topBar">
          <nav className="navBar">
            <li>
              <a className="navItem" href="#about">
                {" "}
                About{" "}
              </a>
            </li>
            <li>
              <a className="navItem" href="#music">
                Music
              </a>
            </li>
            <li>
              <a className="navItem" href="#coming-soon">
                Coming Soon
              </a>
            </li>
          </nav>
          <div className="navBar icons">
            <a
              href="https://www.instagram.com/joeytranvik/"
              className="socialLink"
              target="_blank"
            >
              <img src={instagram} alt="instagram" className="socialLogo" />
            </a>
            {/* <a
              href="https://twitter.com/joeytraffic"
              className="socialLink"
              target="_blank"
            >
              {" "}
              <img src={xtwitter} alt="twitter" className="socialLogo" />
            </a> */}
            <a
              href="https://open.spotify.com/artist/0EwxM1Pv0584OF4jZsG8TI?si=qt4ehNSfTDSOo9gjPLkOhg"
              className="socialLink"
              target="_blank"
            >
              {" "}
              <img src={spotify} alt="spotify" className="socialLogo" />
            </a>
            <a
              href="https://music.apple.com/us/artist/joey-tranvik/1486106096"
              className="socialLink"
              target="_blank"
            >
              {" "}
              <img src={itunes} alt="itunes" className="socialLogo" />
            </a>
            <a
              href="https://soundcloud.com/joeytranvik"
              className="socialLink"
              target="_blank"
            >
              {" "}
              <img src={soundcloud} alt="soundcloud" className="socialLogo" />
            </a>
          </div>
        </div>
      </div>
      <div className="logo-container">
        <img draggable="false" src={logo} className="logo" alt="jt logo" />
      </div>
    </div>
  );
};

export default Initial;
