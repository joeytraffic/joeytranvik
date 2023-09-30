import arrowLeft from "../images/icons/arrow-left.svg";
import arrowRight from "../images/icons/arrow-right.svg";

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img
        src={arrowRight}
        alt="arrowRight"
        className="slick-next slick-arrow"
        type="button"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img
        src={arrowLeft}
        alt="arrowLeft"
        className="slick-prev slick-arrow"
        type="button"
      />
    </div>
  );
}

export { NextArrow, PrevArrow };
