import React, { useState } from "react";
import "./SearchBar.css";
import SearchImage from "../../images/search.svg";

export const SearchBar = () => {
  const defaultState = "Bali, Canggu, Kabupaten Bandung, Lagos";
  const [searchText, updateSearchText] = useState("");

  return (
    <div className="search-bar-container">
      <div className="search-image-div">
        <img src={SearchImage} alt="search-icon" className="search-image" />
      </div>
      <input
        className="search-input"
        type="text"
        value={searchText}
        placeholder={defaultState}
        onChange={(event) => updateSearchText(event.target.value)}
      />
    </div>
  );
};
