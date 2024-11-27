import OffersListByType from "../OffersListByType/OffersListByType";

const KayakOffers = () => (
  <OffersListByType title='Wycieczki pięciodniowe' filterCondition={(offer) => offer.typeOfTrip === "kayak"} />
);

export default KayakOffers;
