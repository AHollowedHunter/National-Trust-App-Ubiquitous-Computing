import React from "react";
import { View, Text, Dimensions } from "react-native";
import { useToast } from "react-native-toast-notifications";

import { appStyles, ntColours } from "../config/styles";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {
  title: string;
  placeId: number;
};

export default function CustomHeader({ title }: Props) {
  const width = (Dimensions.get("window").width / 100) * 70;
  const toast = useToast();
  return (
    <View
      style={{ backgroundColor: ntColours.redViolet, flexDirection: "row" }}
    >
      {/* <View style={{width: 48, height: 48, backgroundColor: "white"}}></View> */}
      <Text
        style={[appStyles.heading, { color: "white", width: width }]}
        adjustsFontSizeToFit={true}
        numberOfLines={2}
      >
        {title}
      </Text>
      <NTWebIcon
        name="heart_outline"
        style={{
          fontSize: 24,
          color: "white",
          paddingHorizontal: 8,
          textAlignVertical: "center",
        }}
        onPress={() => toast.show("Added to Favourites")}
      />
    </View>
  );
}
