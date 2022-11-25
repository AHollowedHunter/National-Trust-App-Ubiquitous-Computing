import React, { useState } from "react";
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
import DiscoverFilter from "../components/DiscoverFilter";
import { View } from "react-native";

type Props = NativeStackScreenProps<NativeStackParamList, "Discover">;

const Tab = createBottomTabNavigator<DiscoverBottomTabParamList>();

const bottomTabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarInactiveTintColor: "black",
  tabBarActiveTintColor: "black",
  tabBarActiveBackgroundColor: ntColours.alto,
  tabBarInactiveBackgroundColor: ntColours.cararra,
  tabBarLabelStyle: {
    fontFamily: ntFonts.standard,
    fontSize: 16,
  },
};

const ntTabBarIcon =
  (iconName: keyof typeof NTWebIcon.glyphMap) =>
  (props: { focused: boolean; color: string; size: number }) => {
    return <NTWebIcon name={iconName} size={props.size} color={props.color} />;
  };

export function DiscoverScreen({ route, navigation }: Props) {
  const [screenHeight, setScreenHeight] = useState(600);
  return (
    <View
      style={{ flex: 1 }}
      onLayout={(e) => setScreenHeight(e.nativeEvent.layout.height)}
    >
      <DiscoverFilter screenHeight={screenHeight}/>
      <Tab.Navigator screenOptions={bottomTabOptions} initialRouteName="Map">
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
    </View>
  );
}
