import OffersByType from "../OffersListByType/OffersListByType";

const AbroadOffers = () => (
  <OffersByType mainTitle='Wycieczki zagraniczne' filterCondition={(offer) => offer.destinationType === "abroad"} />
);

export default AbroadOffers;
