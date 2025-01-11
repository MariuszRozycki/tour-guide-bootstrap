import OffersListByType from "../OffersListByType/OffersListByType";

const OneDayOffers = () => (
  <OffersListByType title='Wycieczki jednodniowe' filterCondition={(offer) => offer.lengthOfTrip === "one-day"} />
);

export default OneDayOffers;
