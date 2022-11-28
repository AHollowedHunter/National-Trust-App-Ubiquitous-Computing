import { createContext, useContext, useState } from "react";
import { NTPlace } from "../config/types";

export type Places = {
  place?: NTPlace;
  setPlace: (place: NTPlace) => void;
  visible: boolean;
  toggleVisible: () => void;
};

const MapContext = createContext<Places>({
  place: undefined,
  setPlace: () => null,
  visible: false,
  toggleVisible: () => null,
});

const MapProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [place, setPlace] = useState<NTPlace>();
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);

  return (
    <MapContext.Provider
      value={{
        place: place,
        setPlace: setPlace,
        visible: visible,
        toggleVisible: toggleVisible,
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
