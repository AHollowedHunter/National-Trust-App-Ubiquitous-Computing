import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  DiscoverBottomTabParamList,
  NativeStackParamList,
} from "../config/types";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ntColours } from "../config/styles";
import { MapScreen } from "./MapScreen";
import { ListScreen } from "./ListScreen";

type Props = NativeStackScreenProps<NativeStackParamList, "Discover">;

const Tab = createBottomTabNavigator<DiscoverBottomTabParamList>();

const options: BottomTabNavigationOptions = {
  headerShown: true,
  headerStyle: { backgroundColor: ntColours.redViolet },
  headerTitleStyle: { color: "white" },
  tabBarInactiveTintColor: "black",
  tabBarActiveTintColor: "black",
  tabBarActiveBackgroundColor: ntColours.alto,
  tabBarInactiveBackgroundColor: ntColours.desertStorm,
};

export function DiscoverScreen() {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="List" component={ListScreen} />
    </Tab.Navigator>
  );
}
