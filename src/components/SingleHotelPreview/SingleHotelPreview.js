import React from "react";
import "./SingleHotelPreview.css";
import CustomButtonSmall from "../CustomButtonSmall/CustomButtonSmall";

export const SingleHotelPreview = ({ imageUrl, text, tags }) => {
  return (
    <div className="hotel-info-container">
      <img className="hotel-image" src={imageUrl} alt="hotel-preview" />
      <div className="hotel-data-container">
        <h1 className="hotel-preview-header">{text}</h1>
        <div className="button-div">
          <CustomButtonSmall text={tags[0]} isRating={true} />
          <CustomButtonSmall text={tags[1]} isRating={false} />
        </div>
      </div>
    </div>
  );
};
