import React, { Component } from "react";
import Logo from "../logo.svg";

export const parseDataIntoDropDownObject = (dataList) => {
  console.log("dataLiat from parser:", dataList);
  return dataList.data.map((value) => {
    return {
      key: value,
      text: value,
      value: value,
      image: { avatar: false, src: dataList.image },
    };
  });
};
