import { createContext, useContext, useReducer, useEffect } from "react";
import { favoritesReducer } from "./FavoritesReducer";
import { loadFromStorage, saveToStorage } from "../utils/";

const FavoritesContext = createContext();

const initializeFavorites = () => {
  const storedFavorites = loadFromStorage("favorites");
  console.log("Initializing favorites from localStorage:", storedFavorites);
  return storedFavorites || []; // Jeśli brak danych, zwraca pustą tablicę
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, [], initializeFavorites);

  // Zapisuj ulubione do localStorage przy każdej zmianie
  useEffect(() => {
    saveToStorage("favorites", favorites);
    console.log("Saving to localStorage:", favorites);
  }, [favorites]);

  const addFavorite = (offer) => {
    dispatch({ type: "ADD_FAVORITE", payload: offer });
  };

  const removeFavorite = (offerId) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: offerId });
  };

  return <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => useContext(FavoritesContext);
