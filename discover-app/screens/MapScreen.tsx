import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootBottomTabParamList } from "../config/types";
import Map, { MainMap } from "../components/Map";

type Props = NativeStackScreenProps<RootBottomTabParamList>;

function MapScreen({ route, navigation }: Props) {
  return <MainMap />;
}

export default MapScreen;
