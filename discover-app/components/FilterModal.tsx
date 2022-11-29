import React from "react";
import { View, Text, ScrollView } from "react-native";
import * as Haptics from "expo-haptics";

import { appStyles, ntColours } from "../config/styles";
import {
  Activity,
  NTOpenStatus,
  NTRegion,
  PlaceCategory,
} from "../config/types";
import FlexButton from "./FlexButton";
import { NTActivityIcon, NTCategoryIcon, NTWebIcon } from "./NationalTrustIcons";
import FilterToggleButton from "./FilterToggleButton";
import { Filters } from "../config/filterReducer";
import { useFilterContext } from "../contexts/FilterContext";
import { usePlacesContext } from "../contexts/PlacesContext";

type Props = {
  dismissModal: Function;
};
export default function FilterModal({ dismissModal }: Props) {
  const { state: filterState, dispatch: filterDispatch } = useFilterContext();
  const { filteredPlaces } = usePlacesContext();

  return (
    <View
      style={{
        backgroundColor: ntColours.darkGrey,
        alignSelf: "center",
        width: "100%",
        maxHeight: "90%",
        elevation: 8,
        padding: 4,
        borderRadius: 2,
      }}
    >
      <ScrollView style={{backgroundColor: ntColours.paletteNav, borderRadius: 2, paddingVertical: 4}}>
        <View style={{ marginBottom: 8 }}>
          <Text style={[appStyles.sectionHeading, { color: "white" }]}>
            Open Status
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <FilterToggleButton
              key={NTOpenStatus.FULLY_OPEN}
              title={NTOpenStatus.FULLY_OPEN.valueOf()}
              onPress={() => {
                filterDispatch({
                  type: Filters.Status,
                  payload: { status: NTOpenStatus.FULLY_OPEN },
                });
              }}
              isToggled={filterState.activeFilters.status.includes(
                NTOpenStatus.FULLY_OPEN
              )}
            />
            <FilterToggleButton
              key={NTOpenStatus.PARTIALLY_OPEN}
              title={NTOpenStatus.PARTIALLY_OPEN.valueOf()}
              onPress={() => {
                filterDispatch({
                  type: Filters.Status,
                  payload: { status: NTOpenStatus.PARTIALLY_OPEN },
                });
              }}
              isToggled={filterState.activeFilters.status.includes(
                NTOpenStatus.PARTIALLY_OPEN
              )}
            />
          </View>
        </View>

        <View
          style={{
            marginBottom: 8,
          }}
        >
          <Text style={[appStyles.sectionHeading, { color: "white" }]}>
            Category
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {Object.entries(PlaceCategory).map(([key, value]) => (
              <FilterToggleButton
                key={key}
                title={value}
                icon={<NTCategoryIcon category={value} size={24} />}
                onPress={() => {
                  filterDispatch({
                    type: Filters.Category,
                    payload: { category: value },
                  });
                }}
                isToggled={filterState.activeFilters.categories.includes(value)}
                maxWidth={"45%"}
              />
            ))}
          </View>
        </View>

        <View
          style={{
            marginBottom: 8,
          }}
        >
          <Text style={[appStyles.sectionHeading, { color: "white" }]}>
            Activity
          </Text>
          <View
            style={{
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
                  filterDispatch({
                    type: Filters.Activity,
                    payload: { activity: value },
                  });
                }}
                isToggled={filterState.activeFilters.activities.includes(value)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <Text
        style={[appStyles.sectionHeading, { color: "white", marginVertical: 8 }]}
      >
        Matching places: {filteredPlaces.length}
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
            filterDispatch({ type: Filters.Clear });
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
