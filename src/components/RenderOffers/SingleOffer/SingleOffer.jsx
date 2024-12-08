import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { offersApi } from "../../../api/api";
import { capitalizeFirstLetter, handleImageError } from "../../../utils/index";
import useGetData from "../../../hooks/useGetData";

const RenderSingleOffer = () => {
  const { id } = useParams();
  const { data: offer, isLoading, isError, error } = useGetData(offersApi, id);

  if (isLoading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  if (isError)
    return (
      <Container>
        <p>Error loading data: {error.message}</p>
      </Container>
    );

  return (
    <Container className='my-5'>
      <h1 className='h2 mb-md-4'>{offer.title}</h1>
      <Row className='g-lg-5'>
        <Col lg={4} className='mb-3'>
          <Image
            className='w-100 h-sm-100 h-md-75 rounded-4 shadow-4 object-fit-cover'
            src={offer.imageMain}
            onError={handleImageError}
            rounded
          />
        </Col>
        <Col lg={8}>
          <Card className='border-0'>
            <Card.Body className='p-0'>
              <p className='fs-4 m-0 mb-2'>Czas trwania: {capitalizeFirstLetter(offer.days)}</p>
              <h2 className='h4'>{offer.titleSub}</h2>
              <h3 className='h4'>Plan wycieczki:</h3>
              {offer.descTitle ? (
                <ul className='list-unstyled'>
                  <li className='fw-bolder fs-5 mb-2'>{offer.descTitle}</li>
                  {offer.description.map((desc, index) => (
                    <li key={index} className='fs-5'>
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <ol>
                  {offer.description.map((desc, index) => (
                    <li key={index} className='fs-4'>
                      {desc}
                    </li>
                  ))}
                </ol>
              )}

              <div className='offer-details d-flex flex-column gap-1 mt-4'>
                {offer.price40people === 0 ? (
                  <>
                    <p className='h4'>
                      <i className='bi bi-tag'></i> *{offer.price45people} PLN/
                      <i className='bi bi-person-standing'></i>
                    </p>
                    <p className='fw-6'>* cena dla min. 45 osób</p>
                  </>
                ) : (
                  <>
                    <p className='h4'>
                      <i className='bi bi-tag pe-2'></i>
                      {offer.price45people} PLN/
                      <i className='bi bi-person-standing'></i>*
                    </p>
                    <p className='h4 mb-4'>
                      <i className='bi bi-tag pe-2 invisible'></i>
                      {offer.price40people} PLN/
                      <i className='bi bi-person-standing'></i>**
                    </p>
                    <p className='fw-6 mb-0'>* cena dla 45 osób</p>
                    <p className='fw-6'>** cena dla 40 osób</p>
                  </>
                )}
              </div>
              <Button variant='primary'>Dodaj do ulubionych</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RenderSingleOffer;
