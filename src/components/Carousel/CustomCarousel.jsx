import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Card } from "react-bootstrap";

import "./Carousel.scss";

const CustomCarousel = ({ groupedSlides, itemsPerSlide }) => {
  return (
    <Container className='mt-4'>
      <h2>Nasze wycieczki</h2>
      <Carousel indicators={false} interval={null}>
        {groupedSlides.map((group, index) => (
          <Carousel.Item key={index}>
            <Row>
              {group.map((slide, slideIndex) => (
                <Col key={slideIndex} xs={12} md={12 / itemsPerSlide}>
                  <div className='slide-container p-0'>
                    <Card.Img
                      src={slide.imageMain}
                      alt={slide.title}
                      className='d-block w-100 rounded'
                      style={{ height: "200px", objectFit: "cover" }}
                    />

                    <h3 className='h5 mt-2'>{slide.title}</h3>
                    <p className='h5 mt-2'>
                      {slide.price45people} PLN /min 45 <i className='bi bi-person-standing'></i>
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CustomCarousel;
