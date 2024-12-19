import { Button } from "react-bootstrap";
import useFavoritesHook from "../../../hooks/useFavorites";

const FavoriteButton = ({ offer }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesHook();

  const handleToggleFavorite = () => {
    if (isFavorite(offer._id.$oid)) {
      removeFavorite(offer._id.$oid);
    } else {
      addFavorite(offer);
    }
  };

  return (
    <Button className='mt-4' variant={isFavorite(offer._id.$oid) ? "danger" : "primary"} onClick={handleToggleFavorite}>
      {isFavorite(offer._id.$oid) ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
    </Button>
  );
};

export default FavoriteButton;
