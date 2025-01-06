import { Container, Row, Col } from "react-bootstrap";
import { offersApi } from "../../../../api/api";
import useGetData from "../../../../hooks/useGetData";
import { GoBackButton } from "../../../../components";
import { CustomCard } from "../../../../components";

const OffersListByType = ({ title, message, filterCondition }) => {
  const { data: offers, isLoading, isError, error } = useGetData(offersApi);

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

  const filteredOffers = offers.filter(filterCondition);

  return (
    <Container>
      <GoBackButton />
      <h1 className='mb-3'>{title}</h1>
      {message ? <p className='fs-4 text-danger fw-semibold'>{message}</p> : null}
      <Row className='g-3'>
        {filteredOffers.map((offer) => (
          <Col col={12} sm={6} md={4} lg={3} key={offer._id.$oid}>
            <CustomCard offer={offer} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OffersListByType;
