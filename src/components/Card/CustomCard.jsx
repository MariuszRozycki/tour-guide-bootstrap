import { useRef } from "react";
import { Card } from "react-bootstrap";
import { trimText } from "../../utils/trimText";
import useElementWidth from "../../hooks/useElementWidth";
import { useNavigateToOffer } from "../../hooks/useNavigateToOffer";
import "./CustomCard.scss";

const CustomCard = ({ offer }) => {
  const elementRef = useRef(null);
  const containerWidth = useElementWidth(elementRef);
  const { handleSingleOffer } = useNavigateToOffer();

  return (
    <Card className='w-100 border-0 shadow-lg rounded-4 ' onClick={() => handleSingleOffer(offer._id)}>
      <Card.Img
        className='card-by-offers-type object-fit-cover rounded-4 rounded-bottom-0'
        variant='top'
        style={{ height: "180px" }}
        src={offer.imageMain}
      />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <div className='text-wrapper'>
          <Card.Title className='h6'>{containerWidth < 315 ? trimText(offer.title, 30) : offer.title}</Card.Title>
          <div>
            <div className='slider-item-details mt-2'>
              <div className='details-description'>
                <p className='h6 my-2'>{offer.days}</p>
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
