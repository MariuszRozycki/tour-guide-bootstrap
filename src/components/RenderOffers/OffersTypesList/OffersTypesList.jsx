import { Container, Row, Col } from "react-bootstrap";
import { useNavigateToElement } from "../../../hooks/useNavigateToElement";
import Card from "react-bootstrap/Card";
import "./OffersTypesList.scss";

const OffersTypesList = () => {
  const { handleOffersType } = useNavigateToElement();

  const types = [
    { name: "Zagraniczne", type: "abroad", imgSrc: "/../../../public/pictures/abroad/budapest01.jpg" },
    { name: "Krajowe", type: "domestic", imgSrc: "/../../../public/pictures/trip-categories/trip-domestic.jpg" },
    { name: "Transgraniczne", type: "cross-border", imgSrc: "/../../../public/pictures/trip-categories/trip-cross-border.jpg" },
    { name: "1-dniowe", type: "one-day", imgSrc: "/../../../public/pictures/trip-categories/trip-one-day.jpg" },
    { name: "3-dniowe", type: "three-days", imgSrc: "/../../../public/pictures/trip-categories/trip-three-days.jpg" },
    { name: "4-dniowe", type: "four-days", imgSrc: "/../../../public/pictures/trip-categories/trip-five-days.jpg" },
    { name: "5-dniowe", type: "five-days", imgSrc: "/../../../public/pictures/trip-categories/trip-five-days.jpg" },
    { name: "Spływy kajakowe", type: "kayak", imgSrc: "/../../../public/pictures/trip-categories/trip-kayak.jpg" },
    { name: "Autokarowe", type: "buss", imgSrc: "/../../../public/pictures/trip-categories/trip-bus.jpg" },
    { name: "Weekndowe", type: "weekend", imgSrc: "/../../../public/pictures/trip-categories/trip-weekend.jpg" },
  ];

  return (
    <Container>
      <h1>Oferty wg typu</h1>
      <Row className='g-2'>
        {types.map((type, index) => (
          <Col className='card-by-offers-type' sm={6} md={4} lg={3} key={`${Math.random()}${index}`}>
            <Card
              className='rounded-4 shadow-lg'
              onClick={() => {
                console.log(type.type);
                handleOffersType(type.type);
              }}
            >
              <Card.Img
                className='object-fit-cover rounded-4 rounded-bottom-0'
                style={{ height: "180px" }}
                variant='top'
                src={type.imgSrc}
              />
              <Card.Body>
                <Card.Title className='h-100'>{type.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OffersTypesList;
