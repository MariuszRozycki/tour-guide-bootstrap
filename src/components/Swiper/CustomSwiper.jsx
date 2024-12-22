import { useRef } from "react";
import { Container, Row, Col, Card, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import breakpoints from "../../styles/breakpoints";
import useGetData from "../../hooks/useGetData";
import { offersApi } from "../../api/api";
import { trimText, capitalizeFirstLetter, handleImageError } from "../../utils/index";
import { useFavorites } from "../../context/FavoritesContext";
import { useNavigateToElement } from "../../hooks/useNavigateToElement";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "./CustomSwiper.scss";

const CustomSwiper = () => {
  const { data: offers, isLoading, isError, error } = useGetData(offersApi);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { handleSingleOffer } = useNavigateToElement();
  const elementRef = useRef(null);

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
                lazy={{ loadOnTransitionStart: true }}
                touchReleaseOnEdges={true}
                speed={900}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                threshold={8}
                cssMode={false}
                preventInteractionOnTransition={true}
                breakpoints={{
                  [breakpoints.sm]: { slidesPerView: 2.2 },
                  [breakpoints.md]: { slidesPerView: 2.2 },
                  [breakpoints.lg]: { slidesPerView: 3.2 },
                  [breakpoints.xl]: { slidesPerView: 4.2 },
                }}
                grabCursor
              >
                {offers.map((offer) => {
                  const isFavorite = favorites.some((fav) => fav._id.$oid === offer._id.$oid);

                  return (
                    <SwiperSlide key={offer._id.$oid} className='slider-item rounded-4 bg-secondary-subtle'>
                      <Card
                        ref={elementRef}
                        className='w-100 rounded-4 position-relative'
                        onClick={() => handleSingleOffer(offer._id.$oid)}
                      >
                        <Card.Img
                          className='card-by-offers-type object-fit-cover rounded-4 rounded-bottom-0 swiper-lazy'
                          variant='top'
                          style={{ height: "180px" }}
                          src={offer.imageMain}
                          onError={handleImageError}
                          loading='lazy'
                        />
                        <Card.Body className='d-flex flex-column justify-content-between'>
                          <div className='text-wrapper'>
                            <OverlayTrigger
                              placement='top'
                              overlay={<Tooltip id={`tooltip-${offer._id.$oid}`}>{offer.title}</Tooltip>}
                            >
                              <Card.Title className='h6'>{trimText(offer.title, 27)}</Card.Title>
                            </OverlayTrigger>
                            <div className='slider-item-details mt-2'>
                              <div className='details-description'>
                                <p className='h6 my-2'>{capitalizeFirstLetter(offer.days)}</p>
                                {typeof offer.price45people === "string" ? (
                                  <>
                                    <p className='h6'>
                                      <i className='bi bi-tag'></i> {capitalizeFirstLetter(offer.price45people)}
                                    </p>
                                    <p className='fw-6 invisible'>* cena dla min. 45 osób</p>
                                  </>
                                ) : (
                                  <>
                                    <p className='h6'>
                                      <i className='bi bi-tag'></i> {offer.price45people} PLN/
                                      <i className='bi bi-person-standing'></i> *
                                    </p>
                                    <p className='fw-6'>* cena dla min. 45 osób</p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                        <div className='position-absolute top-0 end-0 p-2 d-flex flex-column gap-2'>
                          {isFavorite ? (
                            <OverlayTrigger
                              placement='top'
                              overlay={<Tooltip id={`tooltip-${offer._id.$oid}`}>Usuń z ulubionych</Tooltip>}
                            >
                              <Button
                                className='rounded-circle'
                                variant='danger'
                                size='sm'
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFavorite(offer._id.$oid);
                                }}
                              >
                                <i className='bi bi-trash2'></i>
                              </Button>
                            </OverlayTrigger>
                          ) : (
                            <OverlayTrigger
                              placement='top'
                              overlay={<Tooltip id={`tooltip-${offer._id.$oid}`}>Dodaj do ulubionych</Tooltip>}
                            >
                              <Button
                                className='rounded-circle'
                                variant='primary'
                                size='sm'
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addFavorite(offer);
                                }}
                              >
                                <i className='bi bi-heart'></i>
                              </Button>
                            </OverlayTrigger>
                          )}
                        </div>
                      </Card>
                    </SwiperSlide>
                  );
                })}
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

// import { Container, Row, Col } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import breakpoints from "../../styles/breakpoints";
// import { CustomCard } from "../../components";
// import useGetData from "../../hooks/useGetData";
// import { offersApi } from "../../api/api";
// import "../../../node_modules/swiper/swiper-bundle.min.css";
// import "./CustomSwiper.scss";

// const CustomSwiper = () => {
//   const { data: offers, isLoading, isError, error } = useGetData(offersApi);

//   if (isLoading)
//     return (
//       <Container>
//         <p>Loading...</p>
//       </Container>
//     );
//   if (isError)
//     return (
//       <Container>
//         <p>Error loading data: {error.message}</p>
//       </Container>
//     );

//   return (
//     <section className='swiper mt-5'>
//       <Container>
//         <Row>
//           <Col>
//             <h2 className='mb-3 fw-semibold fst-italic'>Nasze wycieczki:</h2>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             {offers && offers.length > 0 ? (
//               <Swiper
//                 spaceBetween={10}
//                 slidesPerView={1.2}
//                 loop={true}
//                 lazy={{ loadOnTransitionStart: true }}
//                 touchReleaseOnEdges={true}
//                 speed={900}
//                 autoplay={{
//                   delay: 3000,
//                   disableOnInteraction: false,
//                 }}
//                 modules={[Autoplay]}
//                 threshold={8}
//                 cssMode={false}
//                 preventInteractionOnTransition={true}
//                 breakpoints={{
//                   [breakpoints.sm]: { slidesPerView: 2.2 },
//                   [breakpoints.md]: { slidesPerView: 2.2 },
//                   [breakpoints.lg]: { slidesPerView: 3.2 },
//                   [breakpoints.xl]: { slidesPerView: 4.2 },
//                 }}
//                 grabCursor
//               >
//                 {offers.map((offer) => (
//                   <SwiperSlide key={offer._id.$oid} className='slider-item rounded-4 bg-secondary-subtle'>
//                     <div className='swiper-zoom-container'>
//                       <CustomCard offer={offer} />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             ) : (
//               <p>Loading offers...</p>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default CustomSwiper;
