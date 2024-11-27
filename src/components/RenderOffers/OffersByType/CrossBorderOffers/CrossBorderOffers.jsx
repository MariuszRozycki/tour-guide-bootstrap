import OffersListByType from "../OffersListByType/OffersListByType";

const CrossBorderOffers = () => {
  return <OffersListByType title='Wycieczki transgraniczne' filterCondition={(offer) => offer.destinationType === "cross-border"} />;
};

export default CrossBorderOffers;
