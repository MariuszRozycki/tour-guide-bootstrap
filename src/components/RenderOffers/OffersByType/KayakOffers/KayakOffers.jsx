import OffersListByType from "../OffersListByType/OffersListByType";

const KayakOffers = () => <OffersListByType title='Spływy kajakowe' filterCondition={(offer) => offer.typeOfTrip === "kayak"} />;

export default KayakOffers;
