import CustomDropdown from "../CustomDropdown/CustomDropdown";
import React from "react";
import "./DropdownList.css";
import MockApiData from "../../mockApi/MockApiData";

export const DropdownList = () => {
    const mockApi = new MockApiData();

    const dateDropdown = CustomDropdown("Select date", mockApi.getDates());
    const roomsDropdown = CustomDropdown("Rooms", mockApi.getNoOfRooms());
    const adultsDropdown = CustomDropdown("Adults", mockApi.getNoOfAdults());
    const childrenDropdown = CustomDropdown(
        "Children",
        mockApi.getNoOfChildren()
    );

    let dropdownList = [dateDropdown, roomsDropdown, adultsDropdown, childrenDropdown]

    const showAllDropdowns = () => {
        return dropdownList.map(dropdown => {
            return <div className="single-dropdown">{dropdown}</div>
        })
    }

    return (
        <div className="dropdown-container">
            {showAllDropdowns()}
        </div>
    );
};
