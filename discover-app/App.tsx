import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { ntColours, styles } from "./config/styles";
import { DiscoverScreen } from "./screens/DiscoverScreen";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    NationalTrustDisplayWeb_Regular: require("./assets/fonts/NationalTrustDisplayWeb_Regular.ttf"),
    NationalTrustWeb_Regular: require("./assets/fonts/NationalTrustWeb_Regular.ttf"),
    NationalTrustWeb_Italic: require("./assets/fonts/NationalTrustWeb_Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light" backgroundColor={ntColours.cardinalPink} />
      <NavigationContainer>
        <DiscoverScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
}
