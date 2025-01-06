import OffersListByType from "../OffersListByType/OffersListByType";

const SeniorOffers = () => (
  <OffersListByType
    title='Dla Seniora'
    message='Długość wycieczek dla Seniorów może zostać zmieniona podczas uprzedniej rozmowy z przedstawicielem grupy. Cena zostanie skalkulowana według ilości dni wycieczki.'
    filterCondition={(offer) => offer.lengthOfTrip.includes("senior")}
  />
);

export default SeniorOffers;
