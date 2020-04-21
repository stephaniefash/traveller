import React from "react";
import "./ResultSection.css"
import {SingleHotelPreview} from "../SingleHotelPreview/SingleHotelPreview";

export const ResultSection = () => {

    return (
        <div className="result-section-container">
            <div className="column-1-result section">
                section one
                <h1 className="hotels-header">More than just hotels</h1>
                {/*//put in the info....*/}
            </div>
            <div className="column-2-result section">

                <SingleHotelPreview
                    imageUrl={"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}
                    tags={[4.97, "PREMIUM"]}
                    text={"A night by the river in Montenegro"}/>
                section 2
            </div>
        </div>
    )


}