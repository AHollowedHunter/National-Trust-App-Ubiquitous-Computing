import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ntColours } from "../config/styles";

type Props = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
};

export default function CustomButton({
  title,
  onPress,
  backgroundColor = ntColours.alto,
  color = ntColours.darkGrey,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={{
        padding: 8,
        margin: 4,
        backgroundColor: backgroundColor,
        borderRadius: 2,
        elevation: 4,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => onPress()}
      accessibilityLabel={title}
    >
      <Text style={{ color: color, fontSize: 18 }} accessible={false}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
