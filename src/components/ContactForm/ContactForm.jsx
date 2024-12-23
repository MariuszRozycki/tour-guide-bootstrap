import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import useContactForm from "../../hooks/useContactForm";
import { ToastContainer } from "react-toastify";
import "./ContactForm.scss";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const formID = "6";
  const { formData, errors, isLoading, isSuccess, handleChange, handleSubmit, url } = useContactForm(formID);

  return (
    <Container>
      <Row className='mb-2'>
        <Col md={10}>
          <h2 className='h3 mb-3'>Zapytaj o ofertę!</h2>
          <Form className='bg-primary-subtle p-3 rounded-4' id={formID} action={url} method='post' onSubmit={handleSubmit}>
            <Form.Group controlId='userName' className='mb-3'>
              <Form.Label>Twoje imię:</Form.Label>
              <Form.Control
                className='rounded-3'
                type='text'
                name='userName'
                value={formData.userName}
                onChange={handleChange}
                isInvalid={!!errors.userName}
              />
              <Form.Control.Feedback type='invalid'>{errors.userName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='email' className='mb-3'>
              <Form.Label>Twój adres email:</Form.Label>
              <Form.Control
                className='rounded-3'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='phone' className='mb-3'>
              <Form.Label>Twój numer telefonu:</Form.Label>
              <Form.Control
                className='rounded-3'
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='subject' className='mb-3'>
              <Form.Label>Temat wiadomości:</Form.Label>
              <Form.Control
                className='rounded-3'
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                isInvalid={!!errors.subject}
              />
              <Form.Control.Feedback type='invalid'>{errors.subject}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='message' className='mb-3'>
              <Form.Label>Treść wiadomości:</Form.Label>
              <Form.Control
                className='rounded-3'
                as='textarea'
                name='message'
                rows={3}
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>
            </Form.Group>

            <div className='d-flex justify-content-center align-items-center mb-3'>
              {isLoading ? (
                <Spinner animation='border' variant='primary' />
              ) : (
                <Button variant='primary' type='submit' className='shadow-lg'>
                  Wyślij
                </Button>
              )}
            </div>

            {isSuccess && <div className='text-center text-success fw-bold'>Wiadomość została pomyślnie wysłana!</div>}

            <ToastContainer position='top-center' />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <hr className='border-primary' style={{ borderTop: "2px solid #007bff", marginTop: "20px", marginBottom: "20px" }} />
        </Col>
      </Row>

      <Row className='mb-2'>
        <Col xs={12} lg={8}>
          <ul className='list-unstyled'>
            <li className='fw-bold'>Tour Guide</li>
            <li className='fw-bold'>Tomasz Zdunek</li>
            <li className='fw-bold mb-2'>Kraftowe Wyjazdy</li>

            <li className='fw-bold'>
              <i className='bi bi-house-door-fill'></i> Adres:
            </li>

            <li>Ogrodowa 27,</li>
            <li>05-152 Kazuń Polski</li>
            <li>NIP: 821 173 7629</li>
            <li>nr wpisu: 2850 (U.M. Woj. Maz.)</li>
          </ul>

          <ul className='list-unstyled'>
            <li className='fw-bold'>
              <i className='bi bi-envelope-paper-fill me-2'></i>Mail:
            </li>
            <li>
              <a className='text-dark' href='mailto:tourguide@poczta.onet.pl'>
                tourguide@poczta.onet.pl
              </a>
            </li>
            <li className='me-2'>
              <a className='text-dark' href='mailto:info@tour-guide.pl'>
                info@tour-guide.pl
              </a>
            </li>
          </ul>

          <ul className='list-unstyled'>
            <li className='fw-bold'>
              <i className='bi bi-phone-fill me-2'></i>Telefon:
            </li>
            <li>
              <a className='text-dark' href='tel:+48601786363'>
                +48 601 786 363
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
