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
  // Used for callout re-render. Not using the var, just need state to change
  const [, setRenderHack] = useState(false);
  let ref = React.createRef<Marker>();

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
      ref={ref}
      onPress={() => {
        // This little hack ensures the marker callout will redraw and display
        // an image without having to select the marker again.
        // There is a 1-2 second delay depending on network speed.
        setRenderHack(true);
        ref.current?.showCallout();
      }}
    >
      <Callout
        key={index}
        tooltip
        style={{ width: calloutWidth, paddingHorizontal: 16 }}
      >
        <MapCallout place={place} showImage={true} />
      </Callout>
    </Marker>
  );
}
