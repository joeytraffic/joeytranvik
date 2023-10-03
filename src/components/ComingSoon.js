const ComingSoon = () => {
  const iframeStyles = {
    width: "100%",
    height: "450px",
    border: "none",
  };

  const textStyle = {
    fontSize: "10px",
    color: "#cccccc",
    lineBreak: "anywhere",
    wordBreak: "normal",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontFamily:
      "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
    fontWeight: 100,
  };

  return (
    <div id="coming-soon">
      <div className="releases-container">
        <span className="latest-releases">Coming Soon</span>
      </div>
      <div className="soundcloud-container">
        <div className="iframe-container">
          <iframe
            title="SoundCloud Player"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1699013433%3Fsecret_token%3Ds-lkUki9AGpJS&color=%239ec2d4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
          ></iframe>
          <div style={textStyle}>
            <a
              href="https://soundcloud.com/joeytranvik"
              title="Joey Tranvik"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Joey Tranvik
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/joeytranvik/sets/previews/s-lkUki9AGpJS"
              title="previews"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              previews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
