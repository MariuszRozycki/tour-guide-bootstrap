import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import breakpoints from "../../styles/breakpoints";
import { CustomCard } from "../../components";

import useGetData from "../../hooks/useGetData";
import { offersApi } from "../../api/api";

const CustomSwiper = () => {
  const { data: offers, isLoading, isError, error } = useGetData(offersApi);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data: {error.message}</p>;

  return (
    <Container className='my-5'>
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
              [breakpoints.sm]: { slidesPerView: 2.2 },
              [breakpoints.md]: { slidesPerView: 2.2 },
              [breakpoints.lg]: { slidesPerView: 3.2 },
              [breakpoints.xl]: { slidesPerView: 4.2 },
            }}
            grabCursor
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer._id} className='slider-item rounded-4'>
                <CustomCard offer={offer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomSwiper;
