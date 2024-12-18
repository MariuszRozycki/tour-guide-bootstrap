// import { Container, Row, Col } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
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
//                     <CustomCard offer={offer} />
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

import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";

const CustomSwiper = () => {
  const offers = [
    { id: 1, image: "image1.jpg", name: "Oferta 1" },
    { id: 2, image: "image2.jpg", name: "Oferta 2" },
    { id: 3, image: "image3.jpg", name: "Oferta 3" },
  ];

  return (
    <Container>
      <Swiper spaceBetween={10} slidesPerView={1.2} loop={true}>
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <img src={offer.image} alt={offer.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CustomSwiper;
