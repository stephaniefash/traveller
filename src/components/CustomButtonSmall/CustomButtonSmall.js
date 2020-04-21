import React from "react";
import "./CustomButtonSmall.css";

const CustomButtonSmall = ({ text, isRating }) => {
  let backgroundColor;
  let textColor;

  const setRatingStyling = () =>
    ([backgroundColor, textColor] = ["#FEEBED", "red"]);
  const setPremiumStyling = () =>
    ([backgroundColor, textColor] = ["#FCE889", "black"]);
  const setPlusStyling = () =>
    ([backgroundColor, textColor] = ["#C9EEF9", "black"]);

  const toggleRating = () => {
    return isRating ? (
      <p style={{ color: textColor, paddingRight: "4px" }}>&#9733;</p>
    ) : null;
  };

  const setStyles = () => {
    switch (text) {
      case "PREMIUM":
        setPremiumStyling();
        break;
      case "PLUS":
        setPlusStyling();
        break;
      default:
        setRatingStyling();
    }
  };

  setStyles();

  return (
    <button
      className="custom-button"
      style={{
        background: backgroundColor,
        color: textColor,
        fontWeight: "bold",
      }}
    >
      {toggleRating()}
      {text}
    </button>
  );
};

export default CustomButtonSmall;
