import { createContext, useContext, useState } from "react";
import { NTPlace } from "../config/types";

export type Places = {
  place?: NTPlace;
  setPlace: (place: NTPlace) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const MapContext = createContext<Places>({
  place: undefined,
  setPlace: () => null,
  visible: false,
  setVisible: () => null,
});

const MapProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [place, setPlace] = useState<NTPlace>();
  const [visible, setVisible] = useState(false);

  return (
    <MapContext.Provider
      value={{
        place: place,
        setPlace: setPlace,
        visible: visible,
        setVisible: setVisible,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export function useMapContext() {
  return useContext(MapContext);
}

export { MapProvider, MapContext };
