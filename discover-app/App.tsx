import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { ntColours, styles } from "./config/styles";
import { DiscoverScreen } from "./screens/DiscoverScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    NationalTrustDisplayWeb_Regular: require("./assets/fonts/NationalTrustDisplayWeb_Regular.ttf"),
    NationalTrustWeb_Regular: require("./assets/fonts/NationalTrustWeb_Regular.ttf"),
    NationalTrustWeb_Italic: require("./assets/fonts/NationalTrustWeb_Italic.ttf"),
  });
  console.log(fontsLoaded);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={ntColours.cardinalPink} />
      <NavigationContainer>
        <DiscoverScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
}
