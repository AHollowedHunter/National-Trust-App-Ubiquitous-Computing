import React from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DiscoverBottomTabParamList } from "../config/types";
import { MainMap } from "../components/Map";

type Props = BottomTabScreenProps<DiscoverBottomTabParamList, "Map">;

export function MapScreen({ route, navigation }: Props) {
  return <MainMap places={route.params.places}/>;
}
