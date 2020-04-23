import React from "react";
import "./NavigationBar.css";
import { SingleNavBarItem } from "./SingleNavbarItem";
import Images from "../../constants/ImageUrls";

export const NavigationBar = () => {
  const {
    accommodations,
    airportTaxis,
    carRentals,
    chatIcon,
  } = Images.navigation;
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h1 className="logo-text">Traveller</h1>
        <SingleNavBarItem
          iconUrl={accommodations}
          navBarName="Accomodations"
          className="single-item"
        />
        <SingleNavBarItem
          iconUrl={carRentals}
          navBarName="Car Rentals"
          className="single-item"
        />
        <SingleNavBarItem
          iconUrl={airportTaxis}
          navBarName="Airport Taxis"
          className="single-item"
        />
      </div>

      <div className="navbar-right">
        <SingleNavBarItem navBarName="Register" />
        <button className="sign-in-button"> Sign in</button>
        <div className="chat-icon-div">
          <img src={chatIcon} alt="chat-icon" className="chat-icon" />
        </div>
      </div>
    </div>
  );
};
