import React from "react";
import { View, Text, Linking, ColorValue } from "react-native";
import { ntColours } from "../config/styles";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {
  url: string;
  title: string;
  color?: ColorValue;
  icon?: JSX.Element;
};

export default function LinkButton({
  url,
  title,
  color = ntColours.redViolet,
  icon,
}: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color,
        paddingVertical: 4,
        paddingHorizontal: 8,
        elevation: 2,
        borderRadius: 2,
        margin: 4,
      }}
    >
      {icon ?? <NTWebIcon name="open_external" color={"white"} size={24} />}
      <Text
        onPress={() => Linking.openURL(url)}
        style={{
          fontSize: 16,
          color: "white",
          textAlignVertical: "center",
          paddingHorizontal: 4,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
