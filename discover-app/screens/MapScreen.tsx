import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootBottomTabParamList } from "../config/types";
import { MainMap } from "../components/Map";

type Props = NativeStackScreenProps<RootBottomTabParamList, "Map">;

export function MapScreen({ route, navigation }: Props) {
  return <MainMap />;
}
