import { createContext, useContext, useReducer, useEffect } from "react";
import { favoritesReducer } from "./FavoritesReducer";
import { loadFromStorage, saveToStorage } from "../utils/";

const FavoritesContext = createContext();

const initializeFavorites = () => {
  const storedFavorites = loadFromStorage("favorites");

  return storedFavorites || [];
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, [], initializeFavorites);

  useEffect(() => {
    saveToStorage("favorites", favorites);
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
