import React from "react";
import { Text } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DiscoverBottomTabParamList } from "../config/types";

type Props = BottomTabScreenProps<DiscoverBottomTabParamList, "List">;

export function ListScreen({ route, navigation }: Props) {
  return <Text>Test</Text>;
}
