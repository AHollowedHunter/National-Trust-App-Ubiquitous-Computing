import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  DiscoverBottomTabParamList,
  NativeStackParamList,
} from "../config/types";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ntColours, ntFonts } from "../config/styles";
import { MapScreen } from "./MapScreen";
import { ListScreen } from "./ListScreen";
import { defaultPlaces, getPlaces } from "../api/Places";

type Props = NativeStackScreenProps<NativeStackParamList, "Discover">;

const Tab = createBottomTabNavigator<DiscoverBottomTabParamList>();

const options: BottomTabNavigationOptions = {
  headerShown: true,
  headerStyle: { backgroundColor: ntColours.redViolet },
  headerTitleStyle: {
    color: "white",
    fontFamily: ntFonts.display,
    fontSize: 32,
  },
  tabBarInactiveTintColor: "black",
  tabBarActiveTintColor: "black",
  tabBarActiveBackgroundColor: ntColours.alto,
  tabBarInactiveBackgroundColor: ntColours.cararra,
};

export function DiscoverScreen() {
  return (
    <Tab.Navigator screenOptions={options} initialRouteName="List">
      <Tab.Screen name="Map" component={MapScreen}/>
      <Tab.Screen
        name="List"
        component={ListScreen}
      />
    </Tab.Navigator>
  );
}
