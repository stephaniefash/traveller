import React from "react";
import "./SingleSidebarHotelPreview.css";
import ImageUrls from "../../constants/ImageUrls";

export const SingleSideBarHotelPreview = ({ data }) => {
  const { image, text, location, tags } = data;

  return (
    <div className="sidebar-hotel-info-container">
      <img className="sidebar-hotel-image" src={image} alt="hotel-preview" />
      <div className="sidebar-hotel-data-container">
        <p className="sidebar-hotel-header-text">{text}</p>
        <p className="sidebar-hotel-location-text">
          {location !== undefined ? location : "Bali, Canggu"}{" "}
        </p>
        <p className="sidebar-hotel-rating-text">&#9733; {tags[0]}</p>
      </div>
      <div className="sidebar-hotel-more-icon">
        <img className="more-info-icon" src={ImageUrls.navigation.moreInfo} />
      </div>
    </div>
  );
};
