import Container from "react-bootstrap/Container";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <section className='hero-section'>
      <Container>
        <h1 className='display-4 text-primary mb-0 fw-semibold'>
          Tour Guide <span className='d-block fs-1'>Kraftowe wyjazdy</span>
        </h1>
        <h2 className='display-5 text-primary mt-4'>Witaj na mojej stronie!</h2>
        <div className='mt-4 row g-0 d-flex align-items-center'>
          <div className='col-md-7 mb-4 mb-xl-0 d-flex flex-column justify-content-center'>
            <img className='w-100 rounded' src='../../../public/pictures/lublin/lublin02.jpg' alt='' />
            <Button variant='danger' className='w-100 w-sm-50 mx-auto mx-sm-0 shadow-lg rounded-pill mt-3'>
              Pokaż oferty
            </Button>
          </div>

          <Card className='col-md-5 ms-0 ms-md-n4 mb-5 mb-lg-0 shadow border-0'>
            <Card.Body>
              <Card.Title>Witaj</Card.Title>
              <Card.Text>
                Tour Guide to kraftowe wyjazdy, ktore dostarcza Ci niezapomnianych wrazen. Pozwol nam sie sobie przedstawic.
              </Card.Text>
              <Button variant='primary rounded-pill shadow-lg'>Przeczytaj wiecej</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
