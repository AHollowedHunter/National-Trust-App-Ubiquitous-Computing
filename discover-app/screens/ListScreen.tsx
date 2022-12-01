import React from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DiscoverBottomTabParamList } from "../config/types";
import { PlaceList } from "../components/PlaceList";
import { usePlacesContext } from "../contexts/PlacesContext";
import { View } from "react-native";
import { ntColours } from "../config/styles";

type Props = BottomTabScreenProps<DiscoverBottomTabParamList, "List">;

export function ListScreen({ route, navigation }: Props) {
  const { filteredPlaces } = usePlacesContext();
  return (
    <View style={{ flex: 1, backgroundColor: ntColours.alto }}>
      <PlaceList places={filteredPlaces} />
    </View>
  );
}
