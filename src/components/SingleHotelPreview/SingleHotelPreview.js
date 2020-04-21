import React from "react";
import "./SingleHotelPreview.css";

export const SingleHotelPreview = ({imageUrl, text, tags}) => {

    return (
        <div className="hotel-info-container">
            <img className="hotel-image" src={imageUrl} alt="hotel-preview"/>
            <div className="hotel-data-container">
                <h1 className="hotel-preview-header">{text}</h1>
                <div className="button-div">
                    <button> {tags[0]}</button>
                    <button> {tags[0]}</button>
                </div>
            </div>
        </div>
    )
}