import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { ntColours, styles } from "./config/styles";
import { DiscoverScreen } from "./screens/DiscoverScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={ntColours.cardinalPink} />
      <NavigationContainer>
        <DiscoverScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
}
