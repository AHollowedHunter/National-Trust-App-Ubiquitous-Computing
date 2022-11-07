import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  DiscoverBottomTabParamList,
  NativeStackParamList,
  NTPlace,
} from "../config/types";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ntColours } from "../config/styles";
import { MapScreen } from "./MapScreen";
import { ListScreen } from "./ListScreen";
import { getPlaces } from "../api/Places";

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
  const [places, setPlaces] = useState([] as NTPlace[]);
  useEffect(() => {
    setPlaces(getPlaces());
  }, []);
  
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="Map" component={MapScreen} initialParams={{places}} />
      <Tab.Screen name="List" component={ListScreen} initialParams={{places}} />
    </Tab.Navigator>
  );
}
