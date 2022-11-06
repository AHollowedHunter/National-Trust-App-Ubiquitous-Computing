import React from "react";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootBottomTabParamList } from "../config/types";

type Props = NativeStackScreenProps<RootBottomTabParamList, "List">;

export function ListScreen({ route, navigation }: Props) {
  return <Text>Test</Text>;
}
