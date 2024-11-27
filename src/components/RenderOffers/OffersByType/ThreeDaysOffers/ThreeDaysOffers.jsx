import OffersListByType from "../OffersListByType/OffersListByType";

const ThreeDaysOffers = () => (
  <OffersListByType title='Wycieczki pięciodniowe' filterCondition={(offer) => offer.lengthOfTrip === "three-days"} />
);

export default ThreeDaysOffers;
