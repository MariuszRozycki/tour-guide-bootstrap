import { Container } from "react-bootstrap";
import GoBackButton from "../Buttons/GoBackButton/GoBackButton";

const NotFound = () => {
  return (
    <Container>
      <p>Sorry, the page you are looking for does not exist or has been moved.</p>
      <GoBackButton />
    </Container>
  );
};

export default NotFound;
