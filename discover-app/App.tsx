import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { ntColours, styles } from "./config/styles";
import { RootBottomTabParamList } from "./config/types";
import { ListScreen, MapScreen } from "./screens";

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const options: BottomTabNavigationOptions = {
  headerShown: true,
  headerStyle: { backgroundColor: ntColours.redViolet },
  headerTitleStyle: { color: "white" },
  tabBarInactiveTintColor: "black",
  tabBarActiveTintColor: "black",
  tabBarActiveBackgroundColor: ntColours.alto,
  tabBarInactiveBackgroundColor: ntColours.desertStorm,
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={ntColours.cardinalPink} />
      <NavigationContainer>
        {/* Make into stack, with the Tab Nav as root screen? */}
        <Tab.Navigator screenOptions={options}>
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="List" component={ListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
