import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./CustomNav.scss";

function CustomNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className='bg-body-tertiary mb-3 position-sticky top-0 z-2'>
          <Container>
            <Navbar.Brand href='#'>Tour Guide</Navbar.Brand>
            <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link as={NavLink} to='/' end onClick={handleClose}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to='/about' onClick={handleClose}>
                    O mnie
                  </Nav.Link>
                  <Nav.Link as={NavLink} to='/contact' onClick={handleClose}>
                    Kontakt
                  </Nav.Link>
                  <Nav.Link as={NavLink} to='/offers-types' onClick={handleClose}>
                    Oferty
                  </Nav.Link>
                </Nav>
                <Form className='d-flex'>
                  <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
                  <Button variant='outline-success'>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default CustomNav;
