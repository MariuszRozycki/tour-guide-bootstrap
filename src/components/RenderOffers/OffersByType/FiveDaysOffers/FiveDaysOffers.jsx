import OffersListByType from "../OffersListByType/OffersListByType";

const FiveDaysOffers = () => (
  <OffersListByType title='Wycieczki pięciodniowe' filterCondition={(offer) => offer.lengthOfTrip === "five-days"} />
);

export default FiveDaysOffers;
