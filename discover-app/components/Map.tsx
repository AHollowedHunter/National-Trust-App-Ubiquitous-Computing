import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObjectCoords,
} from "expo-location";
import { NTPlace } from "../config/types";
import { Image } from "react-native";

type Props = {
  places?: NTPlace[];
};

export function MainMap(props: Props) {
  const [myState, setMyState] = useState("My State");

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
    >
      {props.places
        ? props.places.map((place, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: place.location.latitude,
                longitude: place.location.longitude,
              }}
              title={place.title}
              description={place.description}
              image={require("../assets/images/map-marker.png")}
              centerOffset={{ x: 0, y: -32 }}
            />
          ))
        : null}
    </MapView>
  );
}
