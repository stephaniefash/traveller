import React, { Component, useEffect, useState } from "react";
import "./ResultSection.css";
import { PreviewSingleHotel } from "../PreviewSingleHotel/PreviewSingleHotel";
import MockApiData from "../../mockApi/MockApiData";
import { SingleSideBarHotelPreview } from "../SingleSidebarHotelPreview/SingleSidebarHotelPreview";

export const ResultSection = () => {
  const [data, setData] = useState([]);
  const mockApiData = new MockApiData();

  useEffect(() => {
    setData(mockApiData.getHotelData());
  }, []);

  const renderDataWith = (Component) => {
    return data.map((hotel) => {
      return <Component data={hotel} key={hotel.image} />;
    });
  };
  return (
    <div className="result-section-container">
      <div className="column-1-result section">
        section one
        <h2 className="hotels-header">More than just hotels</h2>
        {renderDataWith(SingleSideBarHotelPreview)}
      </div>
      <div className="column-2-result section">
        {renderDataWith(PreviewSingleHotel)}
      </div>
    </div>
  );
};
