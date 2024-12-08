import { useState } from "react";
import { Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import useHandleSearch from "../../hooks/useHandleSearch";
import { useLocation } from "react-router-dom";
import "./CustomNav.scss";

function CustomNav() {
  const [show, setShow] = useState(false);
  const { localSearchQuery, setLocalSearchQuery } = useHandleSearch();
  const location = useLocation();

  const isOnSingleOfferPage = location.pathname.startsWith("/single-offer/");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavLinkClick = () => {
    setLocalSearchQuery("");
    handleClose();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className='bg-body-tertiary mb-3 position-sticky top-0 z-2'>
          <Container>
            <Navbar.Brand as={Link} to='/'>
              Tour Guide
            </Navbar.Brand>
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
                  <Nav.Link as={NavLink} to='/' end onClick={handleNavLinkClick}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to='/about' onClick={handleNavLinkClick}>
                    O mnie
                  </Nav.Link>
                  <Nav.Link as={NavLink} to='/contact' onClick={handleNavLinkClick}>
                    Kontakt
                  </Nav.Link>
                  <Nav.Link as={NavLink} to='/offers-types' onClick={handleNavLinkClick}>
                    Oferty
                  </Nav.Link>
                </Nav>

                {!isOnSingleOfferPage && (
                  <Form className='d-flex' onSubmit={handleSearch}>
                    <Form.Control
                      type='search'
                      placeholder='Search'
                      className='me-2'
                      aria-label='Search'
                      value={localSearchQuery}
                      onChange={(e) => setLocalSearchQuery(e.target.value)}
                    />
                    <Button variant='outline-success' type='submit'>
                      Search
                    </Button>
                  </Form>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default CustomNav;
