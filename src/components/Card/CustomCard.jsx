import { useRef } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { trimText, capitalizeFirstLetter, handleImageError } from "../../utils/index";
import useElementWidth from "../../hooks/useElementWidth";
import { useNavigateToElement } from "../../hooks/useNavigateToElement";
import "./CustomCard.scss";

const CustomCard = ({ offer }) => {
  const elementRef = useRef(null);
  const containerWidth = useElementWidth(elementRef);
  const { handleSingleOffer } = useNavigateToElement();

  return (
    <Card className='w-100 border-0 shadow-lg rounded-4 ' onClick={() => handleSingleOffer(offer._id)}>
      <Card.Img
        className='card-by-offers-type object-fit-cover rounded-4 rounded-bottom-0'
        variant='top'
        style={{ height: "180px" }}
        src={offer.imageMain}
        onError={handleImageError}
      />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <div className='text-wrapper'>
          <OverlayTrigger placement='top' overlay={<Tooltip id={`tooltip-${offer._id}`}>{offer.title}</Tooltip>}>
            <Card.Title className='h6'>{containerWidth < 315 ? trimText(offer.title, 27) : offer.title}</Card.Title>
          </OverlayTrigger>
          <div>
            <div className='slider-item-details mt-2'>
              <div className='details-description'>
                <p className='h6 my-2'>{capitalizeFirstLetter(offer.days)}</p>
                <p className='h6'>
                  <i className='bi bi-tag'></i> {offer.price45people} PLN/
                  <i className='bi bi-person-standing'></i>
                </p>
                <p className='fw-6'>* cena dla min. 45 osób</p>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
