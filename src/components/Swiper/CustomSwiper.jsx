import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import breakpoints from "../../styles/breakpoints";
import { CustomCard } from "../../components";
import useGetData from "../../hooks/useGetData";
import { offersApi } from "../../api/api";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "./CustomSwiper.scss";

const CustomSwiper = () => {
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

  return (
    <section className='swiper mt-5'>
      <Container>
        <Row>
          <Col>
            <h2 className='mb-3 fw-semibold fst-italic'>Nasze wycieczki:</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            {offers && offers.length > 0 ? (
              <Swiper
                spaceBetween={10}
                slidesPerView={1.2}
                loop={true}
                touchReleaseOnEdges={true}
                speed={1500}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                threshold={1}
                cssMode={false}
                breakpoints={{
                  [breakpoints.sm]: { slidesPerView: 2.2 },
                  [breakpoints.md]: { slidesPerView: 2.2 },
                  [breakpoints.lg]: { slidesPerView: 3.2 },
                  [breakpoints.xl]: { slidesPerView: 4.2 },
                }}
                grabCursor
              >
                {offers.map((offer) => (
                  <SwiperSlide key={offer._id.$oid} className='border-0 slider-item rounded-4'>
                    <div className='swiper-zoom-container border-0'>
                      <CustomCard offer={offer} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>Loading offers...</p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomSwiper;
