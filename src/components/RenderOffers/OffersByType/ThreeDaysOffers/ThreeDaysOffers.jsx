import OffersListByType from "../OffersListByType/OffersListByType";

const ThreeDaysOffers = () => (
  <OffersListByType title='Wycieczki trzydniowe' filterCondition={(offer) => offer.lengthOfTrip === "three-days"} />
);

export default ThreeDaysOffers;
