import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

import { ntColours, styles } from "./config/styles";
import { DiscoverScreen } from "./screens/DiscoverScreen";
import PlacesContext from "./contexts/PlacesContext";
import { defaultPlaces, getPlaces } from "./api/Places";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [places, setPlaces] = useState(defaultPlaces);
  useEffect(() => {
    const getData = async () => {
      setPlaces(await getPlaces());
    };
    getData();
  }, []);

  const [fontsLoaded] = useFonts({
    NationalTrustDisplayWeb_Regular: require("./assets/fonts/NationalTrustDisplayWeb_Regular.ttf"),
    NationalTrustWeb_Regular: require("./assets/fonts/NationalTrustWeb_Regular.ttf"),
    NationalTrustWeb_Italic: require("./assets/fonts/NationalTrustWeb_Italic.ttf"),
    NationalTrustIcons: require("./assets/fonts/NationalTrustIcons.ttf"),
    NationalTrustIconsWeb: require("./assets/fonts/NationalTrustIconsWeb.ttf"),
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
      <PlacesContext.Provider value={{ places }}>
        <NavigationContainer>
          <DiscoverScreen />
        </NavigationContainer>
      </PlacesContext.Provider>
    </SafeAreaView>
  );
}
