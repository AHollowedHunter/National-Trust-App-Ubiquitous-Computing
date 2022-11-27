import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { useToast } from "react-native-toast-notifications";
import * as Haptics from "expo-haptics";

import { appStyles, ntColours } from "../config/styles";
import { NTWebIcon } from "./NationalTrustIcons";

type Props = {
  title: string;
  placeId: number;
};

export default function PlaceHeader({ title, placeId }: Props) {
  const width = (Dimensions.get("window").width / 100) * 70;
  const toast = useToast();
  return (
    <View
      style={{ backgroundColor: ntColours.redViolet, flexDirection: "row" }}
    >
      <Text
        style={[
          appStyles.heading,
          { color: "white", width: width, textAlignVertical: "center" },
        ]}
        adjustsFontSizeToFit={true}
        numberOfLines={2}
      >
        {title}
      </Text>
      <TouchableOpacity
        onPress={() => {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          toast.show("Added to Favourites");
        }}
        style={{
          paddingHorizontal: 8,
          paddingVertical: 16,
        }}
        accessibilityLabel={"Favourite place"}
        accessibilityState={{ checked: false }}
      >
        <NTWebIcon
          name="heart_outline"
          accessible={false}
          style={{
            fontSize: 24,
            color: "white",
            textAlignVertical: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
