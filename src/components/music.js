import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./customArrows.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Music = () => {
  const [isLoading, setIsLoading] = useState(true);
  const slider = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const musicItems = [
    {
      src: "https://open.spotify.com/embed/album/7zswj77WxeI6wkUcCdwoMq?utm_source=generator&theme=0",
      height: "152",
    },
    {
      src: "https://open.spotify.com/embed/album/5gGBHy2wYWJiBEgWUgf1qA?utm_source=generator",
      height: "352",
    },
    {
      src: "https://open.spotify.com/embed/album/1nUNpDFO1ButAVpIaRWaYs?utm_source=generator",
      height: "352",
    },
  ];
  const renderArrows = () => {
    return (
      <div className="custom-arrows">
        <NextArrow
          className="next-arrow"
          onClick={() => slider.current.slickNext()}
        />
        <PrevArrow
          className="prev-arrow"
          onClick={() => slider.current.slickPrev()}
        />
      </div>
    );
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="music-main">
      <div className="releases-container">
        <span className="latest-releases">Latest releases</span>
      </div>
      <div className="music-container">
        {isLoading && (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {renderArrows()}
        <div className="slider-container">
          <Slider className="spotify" ref={slider} {...settings}>
            {musicItems.map((item, index) => (
              <div key={index} className="music-item">
                <div className="iframe-wrapper">
                  <iframe
                    src={item.src}
                    width="80%"
                    height={item.height * 1.8}
                    frameBorder="0"
                    allowFullScreen={false}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="auto"
                    onLoad={handleIframeLoad}
                    style={{ display: isLoading ? "none" : "block" }}
                  ></iframe>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Music;
