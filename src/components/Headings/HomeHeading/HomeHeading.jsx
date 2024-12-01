import { Container } from "react-bootstrap";

const HomeHeading = () => {
  return (
    <Container>
      <h1 className='display-4 mb-4 fw-semibold'>
        Tour Guide <span className='d-block fs-1 fst-italic'>Kraftowe wyjazdy</span>
      </h1>
    </Container>
  );
};

export default HomeHeading;
