import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootBottomTabParamList } from "../types";

type mapScreenProp = NativeStackNavigationProp<RootBottomTabParamList, "Map">;

function MapScreen() {
  const navigation = useNavigation<mapScreenProp>();

  return <Text>Test</Text>
}

export default MapScreen;
