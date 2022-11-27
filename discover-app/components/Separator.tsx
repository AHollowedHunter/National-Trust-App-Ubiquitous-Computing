import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { ntColours } from "../config/styles";

type Props = {
  style?: StyleProp<ViewStyle>;
};

const Separator = ({ style }: Props) => (
  <View
    style={[
      style,
      {
        height: 4,
        marginHorizontal: 16,
        backgroundColor: ntColours.darkGrey,
        elevation: 2,
      },
    ]}
  />
);

export default Separator;
