import React from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DiscoverBottomTabParamList } from "../config/types";
import { MainMap } from "../components/Map";
import { usePlacesContext } from "../contexts/PlacesContext";

type Props = BottomTabScreenProps<DiscoverBottomTabParamList, "Map">;

export function MapScreen({ route, navigation }: Props) {
  const { places } = usePlacesContext();
  return <MainMap places={places} />;
}
