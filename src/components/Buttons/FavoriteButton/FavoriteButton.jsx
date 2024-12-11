import { Button } from "react-bootstrap";
import useFavoritesHook from "../../../hooks/useFavorites";

const FavoriteButton = ({ offer }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesHook();

  const handleToggleFavorite = () => {
    if (isFavorite(offer._id)) {
      removeFavorite(offer._id);
    } else {
      addFavorite(offer);
    }
  };

  return (
    <Button variant={isFavorite(offer._id) ? "danger" : "primary"} onClick={handleToggleFavorite}>
      {isFavorite(offer._id) ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
    </Button>
  );
};

export default FavoriteButton;
