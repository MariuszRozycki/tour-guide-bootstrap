import { Container, Row, Col } from "react-bootstrap";

const ContactHeading = () => {
  return (
    <Container className='mb-3'>
      <Row>
        <Col md={10}>
          <h1 className='fw-semibold'>Kontakt</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactHeading;
