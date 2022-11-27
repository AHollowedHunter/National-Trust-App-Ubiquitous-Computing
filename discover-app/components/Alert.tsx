import React from "react";
import { View, Text } from "react-native";
import { appStyles, ntColours } from "../config/styles";
import { NTIcon, NTWebIcon } from "./NationalTrustIcons";

type Props = {
  content: string;
};

export function Alert({ content }: Props) {
  return (
    <View style={appStyles.alert} accessibilityLabel={"Alert: " + content}>
      <Text style={appStyles.alertText} accessible={false}>
        {content}
      </Text>
      <NTIcon
        name="Important"
        style={{
          fontSize: 48,
          alignSelf: "flex-end",
          textAlignVertical: "center",
          height: "100%",
        }}
      />
    </View>
  );
}
