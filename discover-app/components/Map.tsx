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
  const [myPosition, setMyPosition] = useState({
    coords: { latitude: 50.6884, longitude: -1.95622 },
  });
  const [loading, setLoading] = useState(true);
  const [mapWidth, setMapWidth] = useState(400);

  useEffect(() => {
    async function getLocation() {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // setErrorMsg("Permission to access location was denied");
        setLoading(false);
        return;
      }
      if (loading) {
        setMyPosition(await getCurrentPositionAsync());
        setLoading(false);
      }
    }

    getLocation();
  }, []);

  // let location = myPosition;

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: myPosition.coords.latitude,
        longitude: myPosition.coords.longitude,
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
