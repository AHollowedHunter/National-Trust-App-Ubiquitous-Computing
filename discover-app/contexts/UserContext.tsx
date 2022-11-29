import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const USER_FAVOURITES = "USER_FAVOURITES";

export type User = {
  favourites: number[];
  toggleFavourite: (id: number) => void;
};

const UserContext = createContext<User>({
  favourites: [],
  toggleFavourite: () => null,
});

const UserProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [favourites, setFavourites] = useState<number[]>([]);

  const toggleFavourite = (id: number) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((fav) => fav != id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  useEffect(() => {
    async function loadFavourites() {
      try {
        let fav = await AsyncStorage.getItem(USER_FAVOURITES);
        setFavourites(JSON.parse(fav ?? "[]"));
        console.log("Loaded User Favourites");
      } catch (error) {
        console.error("Failed to load User Favourites: " + error);
      }
    }
    loadFavourites();
  }, []);

  useEffect(() => {
    async function saveFavourites() {
      try {
        await AsyncStorage.setItem(USER_FAVOURITES, JSON.stringify(favourites));
        console.log("Saved User Favourites");
      } catch (error) {
        console.error("Failed to save User Favourites: " + error);
      }
    }
    saveFavourites();
  }, [favourites]);

  return (
    <UserContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}

// export default PlacesContext;
export { UserProvider, UserContext };
