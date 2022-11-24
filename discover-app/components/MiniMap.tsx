import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { NTPlace } from "../config/types";

type Props = {
  place: NTPlace;
  zoom?: number;
  style?: StyleProp<ViewStyle>;
};

export function MiniMap({ place, zoom, style }: Props) {
  return (
    <MapView
      style={style ?? { flex: 1 }}
      initialCamera={{
        center: place.location,
        pitch: 0,
        heading: 0,
        zoom: zoom ?? 10,
        altitude: zoom ?? 10,
      }}
      mapType="standard"
      showsBuildings={true}
      liteMode={true}
      showsUserLocation={true}
    >
      <Marker
        key={place.id}
        coordinate={place.location}
        image={require("../assets/images/map-marker-cardinal-pink.png")}
      />
    </MapView>
  );
}
