import { useNavigate } from "react-router-dom";

export const useNavigateToOffer = () => {
  const navigate = useNavigate();

  const handleSingleOffer = (offerId) => {
    console.log("offerId", offerId);

    navigate(`/single-offer/${offerId}`);
  };

  const handleOffersByType = () => {
    navigate(`/offers-types`);
  };

  const handleOffersType = (type) => {
    navigate(`/offers-types/${type}`);
  };

  return { handleSingleOffer, handleOffersByType, handleOffersType };
};
