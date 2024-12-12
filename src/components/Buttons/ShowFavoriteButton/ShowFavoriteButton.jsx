import { Link } from "react-router-dom";
import { useFavorites } from "../../../context/FavoritesContext";
import "./ShowFavoriteButton.scss";

const ShowFavoriteButton = () => {
  const { favorites } = useFavorites();
  const favoriteCount = favorites?.length || 0;

  return (
    <Link to='/favorites-page' className='position-relative'>
      <div className='ms-2 fs-3 d-flex justify-content-center align-items-center'>
        <i className='bi bi-heart-fill'></i>
      </div>
      {favoriteCount > 0 && (
        <span
          className='position-absolute top-0 start-100 mt-2 translate-middle badge rounded-pill bg-danger'
          style={{ fontSize: "0.75rem" }}
        >
          {favoriteCount}
        </span>
      )}
    </Link>
  );
};

export default ShowFavoriteButton;
