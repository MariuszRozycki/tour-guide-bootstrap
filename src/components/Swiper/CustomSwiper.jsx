import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import breakpoints from "../../styles/breakpoints";
import useElementWidth from "../../hooks/useElementWidth";
import "./Swiper.scss";
import { trimText } from "../../utils/trimText";
import useGetData from "../../hooks/useGetData";
import { offersApi } from "../../api/api";
import { useNavigateToOffer } from "../../hooks/useNavigateToOffer";

const CustomSwiper = () => {
  const { data: offers, isLoading, isError, error } = useGetData(offersApi);
  const { handleSingleOffer } = useNavigateToOffer();

  const elementRef = useRef(null);
  const containerWidth = useElementWidth(elementRef);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data: {error.message}</p>;

  return (
    <Container className='my-5' ref={elementRef}>
      <Row>
        <Col>
          <h2 className='mb-4'>Nasze wycieczki:</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Swiper
            spaceBetween={10}
            slidesPerView={1.1}
            loop={true}
            breakpoints={{
              [breakpoints.sm]: { slidesPerView: 1.2 },
              [breakpoints.md]: { slidesPerView: 2.2 },
              [breakpoints.xl]: { slidesPerView: 3.2 },
            }}
            grabCursor
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer._id} className='slider-item rounded-3' onClick={() => handleSingleOffer(offer._id)}>
                <div className='slider-item-img'>
                  <img className='rounded-3' src={offer.imageMain} alt={offer.title} />
                </div>
                <div className='slider-item-details mt-2'>
                  <h3 className='h5 md-h3 mb-1'>{containerWidth < 315 ? trimText(offer.title, 28) : offer.title}</h3>
                  <div className='details-description'>
                    <p className='h5 my-2'>
                      <i className='bi bi-calendar2-week'></i> {offer.days}
                    </p>
                    <p className='h5'>
                      <i className='bi bi-tag'></i> {offer.price45people} PLN /min 45 <i className='bi bi-person-standing'></i>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomSwiper;
