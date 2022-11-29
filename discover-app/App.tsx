import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { ToastProvider } from "react-native-toast-notifications";

import { ntColours, appStyles, ntFonts } from "./config/styles";
import { DiscoverScreen } from "./screens/DiscoverScreen";
import { PlaceScreen } from "./screens/PlaceScreen";
import { NativeStackParamList } from "./config/types";
import PlaceHeader from "./components/PlaceHeader";
import DiscoverFilter from "./components/DiscoverFilter";
import { NTIcon } from "./components/NationalTrustIcons";
import { PlacesProvider } from "./contexts/PlacesContext";
import { LocationProvider } from "./contexts/LocationContext";
import { UserProvider } from "./contexts/UserContext";

SplashScreen.preventAutoHideAsync();

const stackOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerStyle: { backgroundColor: ntColours.redViolet },
  headerTitleStyle: {
    fontFamily: ntFonts.display,
    fontSize: 32,
  },
  headerTitleAlign: "left",
  headerTintColor: "white",
  animation: "fade",
};

export default function App() {
  const NativeStack = createNativeStackNavigator<NativeStackParamList>();

  const [fontsLoaded] = useFonts({
    NationalTrustDisplayWeb_Regular: require("./assets/fonts/NationalTrustDisplayWeb_Regular.ttf"),
    NationalTrustWeb_Regular: require("./assets/fonts/NationalTrustWeb_Regular.ttf"),
    NationalTrustWeb_Italic: require("./assets/fonts/NationalTrustWeb_Italic.ttf"),
    NationalTrustIcons: require("./assets/fonts/NationalTrustIcons.ttf"),
    NationalTrustIconsWeb: require("./assets/fonts/NationalTrustIconsWeb.ttf"),
    NationalTrustIconsCustom: require("./assets/fonts/NationalTrustIconsCustom.ttf"),
  });

  // Wait for all fonts to be loaded before rendering anything
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={appStyles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light" backgroundColor={ntColours.cardinalPink} />
      <UserProvider>
        <LocationProvider>
          <PlacesProvider>
            <ToastProvider
              duration={800}
              placement="top"
              style={{ marginTop: 96, marginRight: 8, alignSelf: "flex-end" }}
            >
              <NavigationContainer>
                <NativeStack.Navigator screenOptions={stackOptions}>
                  <NativeStack.Screen
                    name="Discover"
                    component={DiscoverScreen}
                    options={() => ({
                      headerLeft: () => (
                        <NTIcon
                          style={{
                            fontSize: 48,
                            textAlignVertical: "center",
                            color: "white",
                            marginLeft: -8,
                            paddingRight: 8,
                          }}
                          name="National-Trust-oakleaf"
                        ></NTIcon>
                      ),
                      headerRight: () => <DiscoverFilter />,
                    })}
                  />
                  <NativeStack.Screen
                    name="Place"
                    component={PlaceScreen}
                    options={({ route }) => ({
                      headerTitle: () => (
                        <PlaceHeader
                          title={route.params.place.title}
                          placeId={route.params.place.id}
                        />
                      ),
                    })}
                  />
                </NativeStack.Navigator>
              </NavigationContainer>
            </ToastProvider>
          </PlacesProvider>
        </LocationProvider>
      </UserProvider>
    </SafeAreaView>
  );
}
