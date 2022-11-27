import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getLastKnownPositionAsync,
  getCurrentPositionAsync,
} from "expo-location";
import MapMarker from "./MapMarker";
import { ActivityIndicator } from "react-native";
import { ntColours } from "../config/styles";
import { usePlacesContext } from "../contexts/PlacesContext";

export function MainMap() {
  const mapRef = React.useRef<MapView | null>(null);
  const [mapWidth, setMapWidth] = useState(400);
  const [mapReady, setMapReady] = useState(false);

  const { filteredPlaces } = usePlacesContext();

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
    <>
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        initialCamera={{
          center: { latitude: 50.6884, longitude: -1.95622 },
          pitch: 0,
          heading: 0,
          zoom: 10,
          altitude: 10,
        }}
        showsUserLocation={true}
        mapType="standard"
        onLayout={(event) => {
          setMapWidth(event.nativeEvent.layout.width);
        }}
        onMapReady={() => setMapReady(true)}
        showsBuildings={true}
        moveOnMarkerPress={false} // Handled in MapMarker onPress
      >
        {filteredPlaces.map((place) => (
          <MapMarker
            key={place.id}
            mapRef={mapRef}
            place={place}
            mapWidth={mapWidth}
          />
        ))}
      </MapView>
      <ActivityIndicator
        size={128}
        color={ntColours.olive}
        style={{
          position: "absolute",
          display: mapReady ? "none" : "flex",
          alignSelf: "center",
          top: "40%",
          elevation: 4,
          backgroundColor: ntColours.paletteNav,
          borderRadius: 64,
        }}
      />
    </>
  );
}
