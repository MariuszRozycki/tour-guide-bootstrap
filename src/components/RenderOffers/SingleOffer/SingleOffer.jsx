import Container from "react-bootstrap/Container";
import { Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import { offersApi } from "../../../api/api";
import useGetData from "../../../hooks/useGetData";

const RenderSingleOffer = () => {
  const { id } = useParams();
  const { data: offer, isLoading, isError, error } = useGetData(offersApi, id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data: {error.message}</p>;

  console.log("offer from RenderSingleOffer", offer);

  return (
    <Container className='my-5'>
      <h1 className='h2 mb-md-4'>{offer.title}</h1>
      <Row>
        <Col sm={4} className='mb-3'>
          <Image
            className='w-100 h-sm-50 h-md-75 h-lg-100 rounded-6 shadow-4 rotate-md-4 object-fit-cover'
            src={offer.imageMain}
            rounded
          />
        </Col>
        <Col sm={8}>
          <Card className='border-0'>
            <Card.Body className='p-0'>
              <p className='fs-6 m-0 fw-semibold'>{offer.days}</p>
              <h2 className='h5'>{offer.titleSub}</h2>
              <h3 className='h5'>Plan wycieczki:</h3>
              <ol>
                {offer.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ol>
              <div className='offer-details d-flex flex-column gap-1 mt-4'>
                <p className='fs-5 m-0 fw-semibold'>
                  <i className='bi bi-tag d-none d-sm-inline-block'></i> {offer.price45people} PLN /os., min 45{" "}
                  <i className='bi bi-person-standing'></i>
                </p>
                <p className='fs-5 m-0 fw-semibold'>
                  <i className='bi bi-tag invisible d-none d-sm-inline-block'></i> {offer.price40people} PLN /os., min 40
                  <i className='bi bi-person-standing'></i>
                </p>
              </div>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RenderSingleOffer;
