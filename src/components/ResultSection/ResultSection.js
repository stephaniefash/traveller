import React from "react";
import "./ResultSection.css";
import { PreviewSingleHotel } from "../PreviewSingleHotel/PreviewSingleHotel";
import MockApiData from "../../mockApi/MockApiData";

export const ResultSection = () => {
  const getApiData = () => {
    const mockApiData = new MockApiData();
    return mockApiData.getHotelData().map((hotel) => {
      const { image, tags, text } = hotel;
      return (
        <PreviewSingleHotel
          imageUrl={image}
          tags={[tags[0], tags[1]]}
          text={text}
        />
      );
    });
  };

  return (
    <div className="result-section-container">
      <div className="column-1-result section">
        section one
        <h1 className="hotels-header">More than just hotels ............</h1>
      </div>
      <div className="column-2-result section">
          {getApiData()}
        />
      </div>
    </div>
  );
};
