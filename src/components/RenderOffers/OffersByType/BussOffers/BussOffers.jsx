import OffersListByType from "../OffersListByType/OffersListByType";

const BussOffers = () => {
  return <OffersListByType title='Wycieczki autobusowe' filterCondition={(offer) => offer.typeOfTrip === "buss-trip"} />;
};

export default BussOffers;
