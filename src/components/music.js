import { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Music = () => {
  const [isLoading, setIsLoading] = useState(true);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
  };

  const musicItems = [
    {
      src:
        'https://open.spotify.com/embed/album/7zswj77WxeI6wkUcCdwoMq?utm_source=generator&theme=0',
      height: '152',
    },
    {
      src: 'https://open.spotify.com/embed/album/5gGBHy2wYWJiBEgWUgf1qA?utm_source=generator',
      height: '352',
    },
    {
      src: 'https://open.spotify.com/embed/album/1nUNpDFO1ButAVpIaRWaYs?utm_source=generator',
      height: '352',
    },
  ];

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="music-main">
      <div className="music-container">
        {isLoading && (
          <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <Slider {...settings}>
          {musicItems.map((item, index) => (
            <div key={index} className="music-item">
              <div className="iframe-wrapper">
                <iframe
                  src={item.src}
                  width="80%"
                  height={item.height}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="auto"
                  onLoad={handleIframeLoad}
                  style={{ display: isLoading ? 'none' : 'block' }}
                ></iframe>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mask-overlay left"></div>
        <div className="mask-overlay right"></div>
      </div>
    </div>
  );
};

export default Music;