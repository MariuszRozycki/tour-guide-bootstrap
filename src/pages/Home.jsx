import { CustomCarousel, Hero } from "../components";
import { slides } from "../utils/slides";

const Home = () => {
  return (
    <>
      <Hero />
      <CustomCarousel slides={slides} />
    </>
  );
};

export default Home;
