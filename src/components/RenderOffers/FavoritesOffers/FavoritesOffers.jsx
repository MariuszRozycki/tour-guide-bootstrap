import { Container, Row, Col } from "react-bootstrap";
import useFavoritesHook from "../../../hooks/useFavorites";
import CustomCard from "../../Card/CustomCard";

const FavoritesOffers = () => {
  const { favorites } = useFavoritesHook();

  return (
    <Container className='my-5'>
      <h1>Ulubione Oferty</h1>
      {favorites.length === 0 ? (
        <p>Nie masz jeszcze ulubionych ofert.</p>
      ) : (
        <Row className='g-3'>
          {favorites.map((offer) => (
            <Col key={offer._id} sm={6} md={4} lg={3}>
              <CustomCard offer={offer} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default FavoritesOffers;
