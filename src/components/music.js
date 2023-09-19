const Music = () => {
  return (
    <div>
      {/* create carousel of music here */}
      <div className="music-container">
        <div className="music">
          <div className="music-item">
            <iframe
              src="https://open.spotify.com/embed/album/7zswj77WxeI6wkUcCdwoMq?utm_source=generator&theme=0"
              width="80%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="music-item">
            <iframe
              src="https://open.spotify.com/embed/album/5gGBHy2wYWJiBEgWUgf1qA?utm_source=generator"
              width="80%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="music-item">
            <iframe
              src="https://open.spotify.com/embed/album/1nUNpDFO1ButAVpIaRWaYs?utm_source=generator"
              width="80%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
