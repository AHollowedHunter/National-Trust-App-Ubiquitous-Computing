import React from "react";
import { View } from "react-native";
import { ntColours } from "../config/styles";

const Separator = () => (
  <View
    style={{
      height: 4,
      marginHorizontal: 16,
      backgroundColor: ntColours.darkGrey,
    }}
  />
);

export default Separator;
