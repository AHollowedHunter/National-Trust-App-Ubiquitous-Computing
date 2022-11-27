import React from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DiscoverBottomTabParamList } from "../config/types";
import { PlaceList } from "../components/PlaceList";
import { usePlacesContext } from "../contexts/PlacesContext";

type Props = BottomTabScreenProps<DiscoverBottomTabParamList, "List">;

export function ListScreen({ route, navigation }: Props) {
  const { filteredPlaces } = usePlacesContext();
  return <PlaceList places={filteredPlaces} />;
}
