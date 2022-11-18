import React, { useEffect, useRef, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";
import { NTPlace } from "../config/types";
import MapCallout from "./MapCallout";
import { defaultPlaces } from "../api/Places";
import MapMarker from "./MapMarker";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ntColours } from "../config/styles";

type Props = {
  places?: NTPlace[];
};

export function MainMap(props: Props) {
  const mapRef = React.useRef<MapView | null>(null);
  const [mapWidth, setMapWidth] = useState(400);

  useEffect(() => {
    async function getLocation() {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let pos = await getCurrentPositionAsync();
      mapRef.current?.animateCamera({
        heading: 0,
        center: pos.coords,
        pitch: 0,
      });
    }

    getLocation();
  }, []);

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 50.6884,
        longitude: -2.95622,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
      }}
      showsUserLocation={true}
      mapType="standard"
      onLayout={(event) => {
        setMapWidth(event.nativeEvent.layout.width);
      }}
      showsBuildings={true}
    >
      {props.places
        ? props.places.map((place, index) => (
            <MapMarker key={index} mapRef={mapRef} place={place} mapWidth={mapWidth} />
          ))
        : null}
    </MapView>
  );
}
