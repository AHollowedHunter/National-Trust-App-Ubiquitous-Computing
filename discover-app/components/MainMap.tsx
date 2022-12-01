import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { ActivityIndicator } from "react-native";

import { ntColours } from "../config/styles";
import MapModal from "./MapModal";
import MapMarker from "./MapMarker";
import { usePlacesContext } from "../contexts/PlacesContext";
import { MapProvider } from "../contexts/MapContext";
import { useLocationContext } from "../contexts/LocationContext";

export function MainMap() {
  const mapRef = React.useRef<MapView | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const { filteredPlaces } = usePlacesContext();
  const { initialLocation } = useLocationContext();

  useEffect(() => {
    mapRef.current?.animateCamera({
      heading: 0,
      center: initialLocation?.coords,
      pitch: 0,
    });
  }, [initialLocation]);

  return (
    <MapProvider>
      <>
        <MapView
          ref={mapRef}
          mapPadding={{ bottom: 64, top: 0, right: 0, left: 0 }}
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
          onMapReady={() => setMapReady(true)}
          showsBuildings={true}
          moveOnMarkerPress={false} // Handled in MapMarker onPress
        >
          {filteredPlaces.map((place) => (
            <MapMarker key={place.id} mapRef={mapRef} place={place} />
          ))}
        </MapView>

        <MapModal />

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
    </MapProvider>
  );
}
