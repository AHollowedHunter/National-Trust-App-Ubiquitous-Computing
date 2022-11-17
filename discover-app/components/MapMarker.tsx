import React, { useEffect, useState } from "react";
import { Callout, Marker } from "react-native-maps";
import { NTPlace } from "../config/types";
import MapCallout from "./MapCallout";
import { defaultPlaces } from "../api/Places";

type Props = {
  place: NTPlace;
  index: number;
  calloutWidth: number;
};

export default function MapMarker({ place, index, calloutWidth }: Props) {
  return (
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
      calloutAnchor={{ x: 0.5, y: 0 }}
    >
      <Callout
        key={index}
        tooltip
        style={{ width: calloutWidth, paddingHorizontal: 16 }}
      >
        <MapCallout place={place} showImage={false} />
      </Callout>
    </Marker>
  );
}
