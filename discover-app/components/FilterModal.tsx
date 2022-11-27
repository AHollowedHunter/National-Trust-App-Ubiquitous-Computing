import React from "react";
import { View, Text } from "react-native";
import * as Haptics from "expo-haptics";

import { appStyles, ntColours } from "../config/styles";
import { Activity, NTOpenStatus } from "../config/types";
import FlexButton from "./FlexButton";
import { NTActivityIcon, NTWebIcon } from "./NationalTrustIcons";
import FilterToggleButton from "./TagButton";
import { Filters } from "../config/reducers";
import { useFilterContext } from "../contexts/FilterContext";

type Props = {
  dismissModal: Function;
};
export default function FilterModal({ dismissModal }: Props) {
  const { state: placeState, dispatch: placeDispatch } = useFilterContext();

  return (
    <View
      style={{
        backgroundColor: ntColours.paletteNav,
        alignSelf: "center",
        width: "90%",
        // height: "90%",
        elevation: 8,
        padding: 4,
        borderRadius: 2,
      }}
    >
      <View style={{ marginBottom: 8 }}>
        <Text style={[appStyles.sectionHeading, { color: "white" }]}>
          Open Status
        </Text>
        <View
          style={{
            // flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <FilterToggleButton
            key={NTOpenStatus.Open}
            title={NTOpenStatus.Open.valueOf()}
            onPress={() => {}}
            isToggled={false}
          />
          <FilterToggleButton
            key={NTOpenStatus.PartOpen}
            title={NTOpenStatus.PartOpen.valueOf()}
            onPress={() => {}}
            isToggled={true}
          />
        </View>
      </View>

      <View
        style={{
          // flex: 1,
          marginBottom: 8,
        }}
      >
        <Text style={[appStyles.sectionHeading, { color: "white" }]}>
          Filter by Activity
        </Text>
        <View
          style={{
            // flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Object.entries(Activity).map(([key, value]) => (
            <FilterToggleButton
              key={key}
              title={value}
              icon={<NTActivityIcon activity={value} size={24} />}
              onPress={() => {
                placeDispatch({
                  type: Filters.Activity,
                  payload: { activity: value },
                });
              }}
              isToggled={placeState.activeFilters.activities.includes(value)}
            />
          ))}
        </View>
      </View>

      <Text
        style={[appStyles.sectionHeading, { color: "white", marginBottom: 8 }]}
      >
        Matching places: 0
      </Text>

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
          backgroundColor={ntColours.redViolet}
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
