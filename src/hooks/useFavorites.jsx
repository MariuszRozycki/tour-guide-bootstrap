import { useFavorites } from "../context/FavoritesContext";

const useFavoritesHook = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = (id) => favorites.some((item) => item._id === id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavoritesHook;
