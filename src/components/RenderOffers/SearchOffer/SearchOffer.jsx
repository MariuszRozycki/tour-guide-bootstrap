import { Container, Row, Col, Spinner } from "react-bootstrap";
import CustomCard from "../../Card/CustomCard";
import useGetData from "../../../hooks/useGetData";
import { offersApi } from "../../../api/api";
import useSearch from "../../../hooks/useSearch";

const SearchOffer = () => {
  const { searchQuery } = useSearch();
  const { data: offers, isLoading, isError, error } = useGetData(offersApi);

  const filteredOffers = offers?.filter((offer) => offer.title.toLowerCase().includes(searchQuery.toLowerCase()));

  if (isLoading)
    return (
      <Container>
        <Spinner animation='border' />
      </Container>
    );
  if (isError) return <p>Błąd: {error.message}</p>;

  if (!searchQuery.trim()) {
    return (
      <Container>
        <p>Wpisz coś w wyszukiwarkę aby zobaczyć oferty.</p>
      </Container>
    );
  }

  if (filteredOffers?.length === 0) {
    return (
      <Container>
        <p>Brak wyników dla: {searchQuery}</p>
      </Container>
    );
  }

  return (
    <Container className='my-5'>
      <h1>Szukane oferty:</h1>
      <Row className='g-3'>
        {filteredOffers.map((offer) => (
          <Col key={offer._id.$oid} sm={6} md={4} lg={3}>
            <CustomCard offer={offer} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchOffer;
