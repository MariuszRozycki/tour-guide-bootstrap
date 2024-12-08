import OffersListByType from "../OffersListByType/OffersListByType";

const WeekendOffers = () => (
  <OffersListByType title='Wycieczki weekendowe' filterCondition={(offer) => offer.lengthOfTrip === "weekend"} />
);

export default WeekendOffers;
