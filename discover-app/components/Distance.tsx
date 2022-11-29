import React from "react";
import { Text } from "react-native";
import { ntColours } from "../config/styles";

type Props = {
  distance?: number;
};

export default function Distance({ distance }: Props) {
  if (distance)
    return (
      <Text
        style={{
          alignSelf: "flex-start",
          fontSize: 16,
          fontWeight: "bold",
          backgroundColor: ntColours.funGreen,
          color: "white",
          paddingVertical: 4,
          paddingHorizontal: 8,
          elevation: 2,
          marginBottom: 4,
        }}
      >
        {distance} miles from you
      </Text>
    );
  return <></>;
}
