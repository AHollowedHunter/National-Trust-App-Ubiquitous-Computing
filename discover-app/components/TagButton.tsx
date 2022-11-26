import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ntColours } from "../config/styles";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {
  title: string;
  icon?: JSX.Element;
  onPress: () => void;
};
export default function FilterToggleButton({ title, icon, onPress }: Props) {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => setIsToggled(!isToggled);

  return (
    <TouchableOpacity
      style={{
        padding: 4,
        margin: 4,
        borderRadius: 2,
        elevation: 4,
        backgroundColor: isToggled ? ntColours.apple : ntColours.cararra,
      }}
      onPress={() => {
        toggle();
        onPress();
      }}
      activeOpacity={0.7}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <NTWebIcon
          name={isToggled ? "tick" : "circle"}
          style={{ fontSize: 16 }}
        />
        <Text key={title} lineBreakMode={"middle"} style={{ fontSize: 16, paddingHorizontal: 4 }}>
          {title}
        </Text>
        {icon ?? null}
      </View>
    </TouchableOpacity>
  );
}
