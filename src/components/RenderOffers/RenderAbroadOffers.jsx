import RenderOffersByType from "./RenderOffersByType";

const RenderAbroadOffers = () => (
  <RenderOffersByType
    mainTitle='Wycieczki zagraniczne'
    type='abroad'
    filterCondition={(offer) => offer.destinationType === "abroad"}
  />
);

export default RenderAbroadOffers;
