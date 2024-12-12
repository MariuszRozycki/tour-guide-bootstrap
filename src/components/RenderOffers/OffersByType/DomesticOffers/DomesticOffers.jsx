import OffersListByType from "../OffersListByType/OffersListByType";

const DomesticOffers = () => (
  <OffersListByType title='Wycieczki krajowe' filterCondition={(offer) => offer.destinationType === "domestic"} />
);

export default DomesticOffers;
