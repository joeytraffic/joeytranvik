import cloud1 from "../images/clouds/cloud1.png";
import cloud2 from "../images/clouds/cloud2.png";
import cloud3 from "../images/clouds/cloud3.png";

const Main = () => {
  return (
    <div className="main-container">
      <div className="clouds">
        <img className="cloud cloud1" src={cloud1} alt="Cloud 1" />
        <img className="cloud cloud2" src={cloud2} alt="Cloud 2" />
        <img className="cloud cloud3" src={cloud3} alt="Cloud 3" />
      </div>
      <div className="about" id="#about">
        <span className="nameBig">Joey Tranvik</span>
        <p className="aboutSmall">
          a classically trained pianist, composer, and producer.
        </p>
      </div>
    </div>
  );
};

export default Main;
