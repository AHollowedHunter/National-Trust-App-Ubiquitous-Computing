import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import Svg, { SvgFromUri, SvgFromXml } from "react-native-svg";
import { ntColours } from "../config/styles";
import { NativeStackProps, NTPlace } from "../config/types";
import MapCallout from "./MapCallout";

type Props = {
  place: NTPlace;
  mapRef: React.MutableRefObject<MapView | null>;
  mapWidth: number;
};

export default function MapMarker({ place, mapRef, mapWidth }: Props) {
  let navigation = useNavigation<NativeStackProps>();

  // Used for callout re-render. Not using the var, just need state to change
  const [renderHack, setRenderHack] = useState(false);
  let ref = React.createRef<Marker>();

  return (
    <Marker
      coordinate={{
        latitude: place.location.latitude,
        longitude: place.location.longitude,
      }}
      title={place.title}
      description={place.description}
      image={require("../assets/images/map-marker.png")}
      centerOffset={{ x: 0, y: -32 }}
      calloutAnchor={{ x: 0.5, y: 0.7 }}
      ref={ref}
      onPress={async () => {
        // This little hack ensures the marker callout will redraw and display
        // an image without having to select the marker again.
        // There is a 1-2 second delay depending on network speed.
        setRenderHack(true);
        ref.current?.showCallout();
        // EOH

        let cam = await mapRef.current?.getCamera();
        let boundries = await mapRef.current?.getMapBoundaries();
        const test = () => Math.log(cam?.zoom ?? 0) / (cam?.zoom ?? 1);
        const test2 = () =>
          boundries
            ? (boundries?.northEast.latitude - boundries?.southWest.latitude) /
              3.5
            : 9;
        console.log(test());
        console.log(test2());

        mapRef.current?.animateCamera({
          heading: cam?.heading ?? 0,
          center: {
            latitude: place.location.latitude + test2(),
            longitude: place.location.longitude,
          },
          pitch: 0,
          zoom: cam?.zoom ?? 10,
          altitude: cam?.altitude ?? 10,
        });
      }}
    >
      <Callout
        tooltip
        style={{ width: mapWidth, paddingHorizontal: 16 }}
        onPress={() => navigation.push("Place", { place: place })}
      >
        <MapCallout place={place} showImage={true} />
        <Svg>
          <SvgFromXml
            xml={`<svg height="16" width="${mapWidth - 32}">
                    <polygon
                      points="0,0 ${mapWidth - 32},0 ${(mapWidth - 32) / 2},16" 
                      style="fill:${ntColours.eminence};"
                    />
                  </svg>`}
          />
        </Svg>
      </Callout>
      {
        // Get the callout to redraw and load the image by "using" state
        renderHack ? null : null
      }
    </Marker>
  );
}
