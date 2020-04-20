import React from "react";
import "./SingleNavbarItem.css";

export const SingleNavBarItem = ({ iconUrl, navBarName }) => {
  const handleImage = () => {
    return iconUrl !== undefined ? (
      <img className="single-image-icon" src={iconUrl} alt="nav icon" />
    ) : ("");
  };

  return (
    <div className="single-item-container">
      {handleImage(iconUrl)}
      <p className={"single-item-text"}>{navBarName}</p>
    </div>
  );
};
