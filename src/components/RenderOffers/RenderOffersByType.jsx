import { Container, Row, Col } from "react-bootstrap";
import { offersApi } from "../../api/api";
import useGetData from "../../hooks/useGetData";
import Card from "react-bootstrap/Card";
import { trimText } from "../../utils/trimText";
import Button from "react-bootstrap/Button";

const RenderOffersByType = ({ mainTitle, type, filterCondition }) => {
  const { data: offers, isLoading, isError, error } = useGetData(`${offersApi}`);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data: {error.message}</p>;

  const filteredOffers = offers.filter(filterCondition);
  console.log("Filtered offers from OffersByType", filteredOffers);

  return (
    <Container>
      <h1 className='mb-3'>{mainTitle}</h1>
      <Row className='g-3'>
        {filteredOffers.map((offer) => (
          <Col col={12} sm={6} md={4} lg={3} key={offer._id}>
            <Card>
              <Card.Img className='object-fit-cover' variant='top' style={{ height: "180px" }} src={offer.imageMain} />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <div className='text-wrapper'>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text>{trimText(offer.description.join(". "), 80)}</Card.Text>
                </div>
                <div className='btn-wrapper mt-4'>
                  <Button variant='primary'>Szczegóły</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RenderOffersByType;
