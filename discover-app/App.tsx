import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import MapScreen from "./screens/MapScreen";
import { ntColours, styles } from "./styles";
import { RootBottomTabParamList } from "./types";

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
        <Tab.Navigator screenOptions={options}>
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="List" component={MapScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
