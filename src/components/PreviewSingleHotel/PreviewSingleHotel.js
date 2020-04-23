import React from "react";
import "./PreviewSingleHotel.css";
import CustomButtonSmall from "../CustomButtonSmall/CustomButtonSmall";

export const PreviewSingleHotel = ({ data }) => {
  const { image, tags, text } = data;

  return (
    <div className="hotel-info-container">
      <img className="hotel-image" src={image} alt="hotel-preview" />
      <div className="hotel-data-container">
        <h1 className="hotel-preview-header">{text}</h1>
        <div className="button-div">
          <CustomButtonSmall
            className="preview-custom-button"
            text={tags[0]}
            isRating={true}
          />
          <CustomButtonSmall
            className="preview-custom-button"
            text={tags[1]}
            isRating={false}
          />
        </div>
      </div>
    </div>
  );
};
