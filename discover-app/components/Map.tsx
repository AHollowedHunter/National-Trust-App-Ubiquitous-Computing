import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { NTPlace } from "../config/types";
import MapCallout from "./MapCallout";
import { defaultPlaces } from "../api/Places";
import MapMarker from "./MapMarker";

type Props = {
  places?: NTPlace[];
};

export function MainMap(props: Props) {
  const [myState, setMyState] = useState("My State");
  const [mapWidth, setMapWidth] = useState(400);

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
        latitude: 50.6884,
        longitude: -1.95622,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
      }}
      showsUserLocation={true}
      mapType="standard"
      onLayout={(event) => {
        setMapWidth(event.nativeEvent.layout.width);
      }}
    >
      {props.places
        ? props.places.map((place, index) =>
            MapMarker({ place, index, calloutWidth: mapWidth })
          )
        : null}
    </MapView>
  );
}
