import { Container } from "react-bootstrap";

const ContactHeading = () => {
  return (
    <Container className='mb-3'>
      <h1 className='fw-semibold'>Kontakt</h1>
      <hr className='border-primary' style={{ borderTop: "2px solid #007bff", marginTop: "10px", marginBottom: "20px" }} />
    </Container>
  );
};

export default ContactHeading;
