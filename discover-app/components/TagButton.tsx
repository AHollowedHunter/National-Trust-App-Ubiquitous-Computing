import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ntColours } from "../config/styles";

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
      key={title}
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
      <View style={{ flexDirection: "row" }}>
        <Text key={title} style={{ fontSize: 16, paddingEnd: 4 }}>
          {title}
        </Text>
        {icon ?? null}
      </View>
    </TouchableOpacity>
  );
}
