import { useNavigate } from "react-router-dom";

export const useNavigateToElement = () => {
  const navigate = useNavigate();

  const handleSingleOffer = (offerId) => {
    navigate(`/single-offer/${offerId}`);
  };

  const handleOffersByType = () => {
    navigate(`/offers-types`);
  };

  const handleOffersType = (type) => {
    navigate(`/offers-types/${type}`);
  };

  const handleNavigateToSearch = () => {
    navigate("/search");
  };

  return { handleSingleOffer, handleOffersByType, handleOffersType, handleNavigateToSearch };
};
