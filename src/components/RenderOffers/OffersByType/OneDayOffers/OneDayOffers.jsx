import OffersListByType from "../OffersListByType/OffersListByType";

const OneDayOffers = () => (
  <OffersListByType title='Wycieczki pięciodniowe' filterCondition={(offer) => offer.lengthOfTrip === "one-day"} />
);

export default OneDayOffers;
