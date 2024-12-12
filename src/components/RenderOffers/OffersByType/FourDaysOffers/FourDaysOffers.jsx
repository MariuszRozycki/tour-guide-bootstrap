import OffersListByType from "../OffersListByType/OffersListByType";

const FourDaysOffers = () => (
  <OffersListByType title='Wycieczki pięciodniowe' filterCondition={(offer) => offer.lengthOfTrip === "four-days"} />
);

export default FourDaysOffers;
