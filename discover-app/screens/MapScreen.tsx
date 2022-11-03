import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootBottomTabParamList } from "../config/types";
import Map from "../components/Map";

type mapScreenProp = NativeStackNavigationProp<RootBottomTabParamList, "Map">;

function MapScreen() {
  const navigation = useNavigation<mapScreenProp>();

  return <Map />
}

export default MapScreen;
