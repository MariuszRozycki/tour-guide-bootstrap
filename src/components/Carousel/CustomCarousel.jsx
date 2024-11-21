import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import breakpoints from "../../styles/breakpoints";
import { Container } from "react-bootstrap";

const CustomCarousel = ({ slides }) => {
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.lg) {
        setItemsPerSlide(3);
      } else if (width >= breakpoints.md) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  const groupSlides = (slides, itemsPerGroup) => {
    const groupedSlides = [];
    const slidesWithDuplicates = [...slides];

    // Uzupełnij brakujące elementy, jeśli długość slajdów nie jest wielokrotnością itemsPerGroup
    while (slidesWithDuplicates.length % itemsPerGroup !== 0) {
      slidesWithDuplicates.push(slidesWithDuplicates[groupedSlides.length % slides.length]);
    }

    // Grupowanie slajdów
    for (let i = 0; i < slidesWithDuplicates.length; i += itemsPerGroup) {
      groupedSlides.push(slidesWithDuplicates.slice(i, i + itemsPerGroup));
    }

    return groupedSlides;
  };

  const groupedSlides = groupSlides(slides, itemsPerSlide);

  return (
    <Container className='mt-4'>
      <h2>Nasze najpopularniejsze wycieczki</h2>
      <Carousel>
        {groupedSlides.map((group, index) => (
          <Carousel.Item key={index}>
            <Row>
              {group.map((slide, slideIndex) => (
                <Col key={slideIndex} xs={12} md={12 / itemsPerSlide}>
                  <div className='p-0'>
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className='d-block w-100 rounded'
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <h5 className='mt-2'>{slide.title}</h5>
                    <p>{slide.description}</p>
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
