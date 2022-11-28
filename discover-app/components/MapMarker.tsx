import React from "react";
import { View, Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { ntColours } from "../config/styles";
import { NTPlace } from "../config/types";
import { useMapContext } from "../contexts/MapContext";

type Props = {
  place: NTPlace;
  mapRef: React.MutableRefObject<MapView | null>;
  mapWidth: number;
};

export default function MapMarker({ place, mapRef, mapWidth }: Props) {
  const { place: contextPlace, setPlace, toggleVisible } = useMapContext();

  let markerImage =
    contextPlace == place
      ? require("../assets/images/map-marker-cardinal-pink.png")
      : require("../assets/images/map-marker.png");

  return (
    <Marker
      tracksViewChanges={false}
      coordinate={place.location}
      title={place.title}
      description={place.description}
      image={markerImage}
      centerOffset={{ x: 0, y: -32 }}
      onPress={async () => {
        setPlace(place);
        toggleVisible();

        let cam = await mapRef.current?.getCamera();
        let boundries = await mapRef.current?.getMapBoundaries();
        // Don't center the map on the marker, instead place the marker towards
        // the bottom to leave enough room for the callout
        const getLatitudeOffset = () =>
          boundries
            ? (boundries?.northEast.latitude - boundries?.southWest.latitude) /
              3
            : 9;

        mapRef.current?.animateCamera(
          {
            heading: cam?.heading ?? 0,
            center: {
              latitude: place.location.latitude + getLatitudeOffset(),
              longitude: place.location.longitude,
            },
            pitch: 0,
            zoom: cam?.zoom ?? 10,
            altitude: cam?.altitude ?? 10,
          },
          { duration: 400 }
        );
      }}
    >
      <Callout tooltip style={{ display: "none" }}>
        <Text></Text>
      </Callout>
    </Marker>
  );
}
