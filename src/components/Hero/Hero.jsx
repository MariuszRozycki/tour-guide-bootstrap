import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useNavigateToElement } from "../../hooks/useNavigateToElement";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  const { handleOffersByType } = useNavigateToElement();

  return (
    <section className='hero-section'>
      <Container>
        <div className='row g-0 d-flex align-items-center'>
          <div className='col-md-7 mb-4 mb-xl-0 d-flex flex-column justify-content-center'>
            <img className='w-100 rounded' src='../../../public/pictures/lublin/lublin02.jpg' alt='' />
            <Button
              variant='danger'
              className='w-100 w-sm-50 mx-auto mx-sm-0 shadow-lg rounded-pill mt-3'
              onClick={() => handleOffersByType()}
            >
              Pokaż oferty
            </Button>
          </div>

          <Card className='col-md-5 ms-0 ms-md-n4 mb-5 mb-lg-0 shadow border-0'>
            <Card.Body>
              <Card.Title className='fw-bold'>Witaj</Card.Title>
              <Card.Text className='fs-5'>
                Tour Guide to kraftowe wyjazdy, ktore dostarcza Ci niezapomnianych wrazen. Pozwol nam sie sobie przedstawic.
              </Card.Text>
              <Link to='/about'>
                <Button variant='primary rounded-pill shadow-lg'>Przeczytaj wiecej</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
