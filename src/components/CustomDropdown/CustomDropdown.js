import React from "react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./CustomDropdown.css";
import { parseDataIntoDropDownObject } from "../../mockApi/Parser";

const CustomDropdown = (placeHolder, apiData) => {
  const optionsList = parseDataIntoDropDownObject(apiData);

  return (
    <Dropdown
      placeholder={placeHolder}
      openOnFocus
      selection
      options={optionsList}
    />
  );
};

export default CustomDropdown;
