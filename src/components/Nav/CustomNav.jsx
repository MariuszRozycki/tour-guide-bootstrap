import { forwardRef, useState } from "react";
import { Container, Form, Nav, Navbar, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import useHandleSearch from "../../hooks/useHandleSearch";
import ShowFavoriteButton from "../Buttons/ShowFavoriteButton/ShowFavoriteButton";
import "./CustomNav.scss";

const CustomNav = forwardRef((_, headerRef) => {
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
    <Navbar expand='md' className='bg-body-tertiary mb-3 position-sticky top-0 z-2' ref={headerRef}>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Tour Guide
        </Navbar.Brand>
        <ShowFavoriteButton />
        <Navbar.Toggle onClick={handleShow} aria-controls='offcanvasNavbar-expand-md' />
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          id='offcanvasNavbar-expand-md'
          aria-labelledby='offcanvasNavbarLabel-expand-md'
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>Menu</Offcanvas.Title>
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
              <OverlayTrigger placement='bottom' overlay={<Tooltip id='tooltip-search'>Wpisz miejsce wycieczki</Tooltip>}>
                <Form className='d-flex' onSubmit={handleSearch}>
                  <Form.Control
                    type='search'
                    placeholder='Szukaj wycieczki do...'
                    className='me-2'
                    aria-label='Search'
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                  />
                </Form>
              </OverlayTrigger>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
});

CustomNav.displayName = "CustomNav";

export default CustomNav;
