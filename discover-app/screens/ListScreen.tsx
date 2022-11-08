import React from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DiscoverBottomTabParamList } from "../config/types";
import { PlaceList } from "../components/PlaceList";

type Props = BottomTabScreenProps<DiscoverBottomTabParamList, "List">;

export function ListScreen({ route, navigation }: Props) {
  return <PlaceList places={route.params.places} />;
}
