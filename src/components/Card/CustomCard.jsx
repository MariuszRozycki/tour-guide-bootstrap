import { useRef } from "react";
import { Card, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { trimText, capitalizeFirstLetter, handleImageError } from "../../utils/index";
import useElementWidth from "../../hooks/useElementWidth";
import { useNavigateToElement } from "../../hooks/useNavigateToElement";
import { useFavorites } from "../../context/FavoritesContext";
import "./CustomCard.scss";

const CustomCard = ({ offer }) => {
  const elementRef = useRef(null);
  const containerWidth = useElementWidth(elementRef);
  const { handleSingleOffer } = useNavigateToElement();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((fav) => fav._id.$oid === offer._id.$oid);

  return (
    <Card className='w-100 rounded-4 position-relative' onClick={() => handleSingleOffer(offer._id.$oid)}>
      <Card.Img
        className='card-by-offers-type object-fit-cover rounded-4 rounded-bottom-0 swiper-lazy'
        variant='top'
        style={{ height: "180px" }}
        src={offer.imageMain}
        onError={handleImageError}
        loading='lazy'
      />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <div className='text-wrapper'>
          {/* <OverlayTrigger placement='top' overlay={<Tooltip id={`tooltip-${offer._id.$oid}`}>{offer.title}</Tooltip>}> */}
          <Card.Title className='h6'>{containerWidth < 315 ? trimText(offer.title, 27) : offer.title}</Card.Title>
          {/* </OverlayTrigger> */}
          <div>
            <div className='slider-item-details mt-2'>
              <div className='details-description'>
                <p className='h6 my-2'>{capitalizeFirstLetter(offer.days)}</p>
                {typeof offer.price45people === "string" ? (
                  <>
                    <p className='h6'>
                      <i className='bi bi-tag'></i> {capitalizeFirstLetter(offer.price45people)}
                    </p>
                    <p className='fw-6 invisible'>* cena dla min. 45 osób</p>
                  </>
                ) : (
                  <>
                    <p className='h6'>
                      <i className='bi bi-tag'></i> {offer.price45people} PLN/
                      <i className='bi bi-person-standing'></i> *
                    </p>
                    <p className='fw-6'>* cena dla min. 45 osób</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card.Body>

      <div className='position-absolute top-0 end-0 p-2 d-flex flex-column gap-2'>
        {isFavorite ? (
          <>
            {/* <OverlayTrigger placement='top' overlay={<Tooltip id={`tooltip-${offer._id.$oid}`}>Usuń z ulubionych</Tooltip>}> */}
            <Button
              className='rounded-circle'
              variant='danger'
              size='sm'
              onClick={(e) => {
                e.stopPropagation();
                removeFavorite(offer._id.$oid);
              }}
            >
              <i className='bi bi-trash2'></i>
            </Button>
            {/* </OverlayTrigger> */}
          </>
        ) : (
          <OverlayTrigger placement='top' overlay={<Tooltip id={`tooltip-${offer._id.$oid}`}>Dodaj do ulubionych</Tooltip>}>
            <Button
              className='rounded-circle'
              variant='primary'
              size='sm'
              onClick={(e) => {
                e.stopPropagation();
                addFavorite(offer);
              }}
            >
              <i className='bi bi-heart'></i>
            </Button>
          </OverlayTrigger>
        )}
      </div>
    </Card>
  );
};

export default CustomCard;
