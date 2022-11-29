import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ntColours } from "../config/styles";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {
  title: string;
  icon?: JSX.Element;
  onPress: () => void;
  isToggled: boolean;
  maxWidth?: string | number;
};
export default function FilterToggleButton({
  title,
  icon,
  onPress,
  isToggled,
  maxWidth,
}: Props) {
  return (
    <TouchableOpacity
      style={{
        maxWidth: maxWidth,
        padding: 12,
        margin: 4,
        borderRadius: 2,
        elevation: 4,
        backgroundColor: isToggled ? "#04d875" : ntColours.cararra,
        justifyContent: "center",
      }}
      onPress={() => {
        onPress();
      }}
      activeOpacity={0.7}
      accessibilityLabel={title}
      accessibilityState={{ checked: isToggled }}
    >
      <View
        importantForAccessibility={"no-hide-descendants"}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <NTWebIcon
          name={isToggled ? "tick" : "circle"}
          style={{ fontSize: 18 }}
        />
        <Text
          key={title}
          lineBreakMode={"middle"}
          style={{
            fontSize: 18,
            paddingHorizontal: 4,
            flexShrink: 1,
            flexWrap: "wrap",
          }}
        >
          {title}
        </Text>
        {icon ?? null}
      </View>
    </TouchableOpacity>
  );
}
