import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObjectCoords,
} from "expo-location";

type Props = {
  children?: React.ReactNode[];
};

export function MainMap(props: Props) {
  

  useEffect(() => {
    async function getLocation() {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // setErrorMsg("Permission to access location was denied");
        return;
      }

      let position = await getCurrentPositionAsync();
    }

    getLocation();
  }, []);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        // latitude: this.state.location.latitude,
        // longitude: this.state.location.longitude,

        latitude: 50.6884,
        longitude: -1.95622,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
      }}
      showsUserLocation={true}
      // followsUserLocation={true}
      mapType="standard"
    >
      {props.children}
    </MapView>
  );
}
