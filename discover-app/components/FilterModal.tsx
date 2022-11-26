import React from "react";
import { View, Text } from "react-native";
import * as Haptics from "expo-haptics";

import { appStyles, ntColours } from "../config/styles";
import { Activity } from "../config/types";
import { usePlacesContext } from "../contexts/PlacesContext";
import FlexButton from "./FlexButton";
import { NTActivityIcon } from "./NationalTrustIcons";
import FilterToggleButton from "./TagButton";

type Props = {
  dismissModal: Function;
};
export default function FilterModal({ dismissModal }: Props) {
  const { setFilteredPlaces } = usePlacesContext();

  return (
    <View
      style={{
        backgroundColor: ntColours.paletteNav,
        alignSelf: "center",
        width: "90%",
        height: "90%",
        elevation: 8,
        padding: 4,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={[appStyles.sectionHeading, { color: "white" }]}>
          Filter by Activity
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Object.values(Activity).map((tag) => (
            <FilterToggleButton
              title={tag}
              icon={<NTActivityIcon activity={tag} size={24} />}
              onPress={() => {}}
            />
          ))}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <FlexButton
          title="Clear All"
          onPress={() => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          }}
          backgroundColor={ntColours.crimson}
          color={"white"}
        />
        <FlexButton
          title="Done"
          onPress={() => dismissModal()}
          backgroundColor={ntColours.greenHaze}
          color={"white"}
        />
      </View>
    </View>
  );
}
