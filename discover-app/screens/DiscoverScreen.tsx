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
import { ntColours, ntFonts } from "../config/styles";
import { MapScreen } from "./MapScreen";
import { ListScreen } from "./ListScreen";
import { NTWebIcon } from "../components/NationalTrustIcons";

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

const ntTabBarIcon =
  (iconName: keyof typeof NTWebIcon.glyphMap) =>
  (props: { focused: boolean; color: string; size: number }) => {
    return <NTWebIcon name={iconName} size={props.size} color={props.color} />;
  };

export function DiscoverScreen({ route, navigation }: Props) {
  return (
    <Tab.Navigator screenOptions={options} initialRouteName="Map">
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ tabBarIcon: ntTabBarIcon("map") }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{ tabBarIcon: ntTabBarIcon("list") }}
      />
    </Tab.Navigator>
  );
}
