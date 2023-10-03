import logo from "../images/jt.png";
import instagram from "../images/icons/instagram.svg";
import itunes from "../images/icons/itunes.svg";
import soundcloud from "../images/icons/soundcloud.svg";
import spotify from "../images/icons/spotify.svg";
import bars from "../images/icons/bars.svg";
import React, { useEffect, useState } from "react";
import { createRain } from "./createRain";

const Initial = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    createRain();
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShowDropdown(false);
  };

  return (
    <div className="initial">
      <div className="rain">{}</div>
      <div className="content-container">
        {}
        <div className="topBar">
          {/* Desktop navigation */}
          <nav className={`navBar ${showDropdown ? "hidden" : ""}`}>
            <li>
              <a className="navItem joey-tranvik"> Joey Tranvik </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("about")}
                className="navItem nav-begone"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("music")}
                className="navItem nav-begone"
              >
                Music
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("coming-soon")}
                className="navItem nav-begone"
              >
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
              <img
                src={instagram}
                alt="instagram"
                className="socialLogo nav-begone"
              />
            </a>
            <a
              href="https://open.spotify.com/artist/0EwxM1Pv0584OF4jZsG8TI?si=qt4ehNSfTDSOo9gjPLkOhg"
              className="socialLink"
              target="_blank"
            >
              <img
                src={spotify}
                alt="spotify"
                className="socialLogo nav-begone"
              />
            </a>
            <a
              href="https://music.apple.com/us/artist/joey-tranvik/1486106096"
              className="socialLink"
              target="_blank"
            >
              <img
                src={itunes}
                alt="itunes"
                className="socialLogo nav-begone"
              />
            </a>
            <a
              href="https://soundcloud.com/joeytranvik"
              className="socialLink"
              target="_blank"
            >
              <img
                src={soundcloud}
                alt="soundcloud"
                className="socialLogo nav-begone"
              />
            </a>
            <a onClick={toggleDropdown}>
              <img
                src={bars}
                alt="hamburger menu"
                className="socialLogo bars nav-begone"
              />
            </a>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`mobile-menu ${showDropdown ? "open" : ""}`}>
          <div className="dropdown">
            <ul>
              <li>
                <a onClick={() => scrollToSection("about")} className="navItem">
                  About
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("music")} className="navItem">
                  Music
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("coming-soon")}
                  className="navItem"
                >
                  Coming Soon
                </a>
              </li>
            </ul>
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
