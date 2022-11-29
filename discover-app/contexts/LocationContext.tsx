import {
  getCurrentPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { createContext, useContext, useEffect, useState } from "react";

export type Places = {
  initialLocation?: LocationObject;
  currentLocation?: LocationObject;
};

const LocationContext = createContext<Places>({
  initialLocation: undefined,
  currentLocation: undefined,
});

const LocationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [initialLocation, setInitialLocation] = useState<LocationObject>();
  const [currentLocation, setCurrentLocation] = useState<LocationObject>();

  useEffect(() => {
    async function getLocation() {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let pos = await getCurrentPositionAsync();
      setInitialLocation(pos);
      setCurrentLocation(pos);
    }
    getLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ initialLocation, currentLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export function useLocationContext() {
  return useContext(LocationContext);
}

export { LocationProvider, LocationContext };
