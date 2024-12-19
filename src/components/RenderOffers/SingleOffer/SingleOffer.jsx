import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { offersApi } from "../../../api/api";
import { capitalizeFirstLetter, handleImageError } from "../../../utils/index";
import useGetData from "../../../hooks/useGetData";
import { FavoriteButton, GoBackButton } from "../../../components";
import "./SingleOffer.scss";

const RenderSingleOffer = () => {
  const { id } = useParams();
  const { data: allOffers, isLoading, isError, error } = useGetData(offersApi);

  if (isLoading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  if (isError)
    return (
      <Container>
        <p>Error: {error.message}</p>
      </Container>
    );

  const offer = allOffers.find((o) => o._id.$oid === id);

  if (!offer || !offer.description || !Array.isArray(offer.description)) {
    return (
      <Container>
        <p>Brak danych o ofercie lub niepoprawna struktura danych.</p>
      </Container>
    );
  }

  return (
    <Container>
      <GoBackButton />
      <h1 className='h2 mt-3 mb-md-4'>{offer.title}</h1>
      <Row className='g-lg-5'>
        <Col lg={4} className='mb-3'>
          <Image
            className='w-100 h-sm-100 rounded-4 shadow-4 object-fit-cover'
            src={offer.imageMain}
            onError={handleImageError}
            rounded
          />
        </Col>
        <Col lg={8}>
          <Card className='single-offer border-0'>
            <Card.Body className='p-0'>
              <p className='fs-4 m-0 mb-3'>Czas trwania: {capitalizeFirstLetter(offer.days)}</p>
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
                {typeof offer.price40people === "string" || typeof offer.price45people === "string" ? (
                  <>
                    {typeof offer.price45people === "string" && (
                      <p className='h4'>
                        <i className='bi bi-tag'></i> {capitalizeFirstLetter(offer.price45people)}
                      </p>
                    )}
                    {typeof offer.price40people === "string" && (
                      <p className='h4'>
                        <i className='bi bi-tag'></i> {capitalizeFirstLetter(offer.price40people)}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p className='h4'>
                      <i className='bi bi-tag'></i> {offer.price45people} PLN/
                      <i className='bi bi-person-standing'></i> *
                    </p>
                    {offer.price40people !== 0 && (
                      <p className='h4'>
                        <i className='bi bi-tag pe-2 invisible'></i>
                        {offer.price40people} PLN/
                        <i className='bi bi-person-standing'></i> **
                      </p>
                    )}
                    <p className='fw-6 mb-0'>* cena dla 45 osób</p>
                    {offer.price40people !== 0 && <p className='fw-6'>** cena dla 40 osób</p>}
                  </>
                )}
              </div>
              <FavoriteButton offer={offer} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RenderSingleOffer;
