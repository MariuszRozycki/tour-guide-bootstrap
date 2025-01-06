import { forwardRef, useState } from "react";
import { Container, Form, Nav, Navbar, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import ShowFavoriteButton from "../Buttons/ShowFavoriteButton/ShowFavoriteButton";
import "./CustomNav.scss";

const CustomNav = forwardRef((_, headerRef) => {
  const { searchQuery, setSearchQuery } = useSearch();
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isOnSingleOfferPage = location.pathname.startsWith("/single-offer/");
  const isOnSearchPage = location.pathname === "/search";

  const handleNavLinkClick = () => {
    setSearchQuery("");
    handleClose();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() !== "") {
      if (!isOnSearchPage) {
        navigate("/search");
      }
    } else {
      if (isOnSearchPage || isOnSingleOfferPage) {
        navigate("/");
      }
    }
  };

  return (
    <Navbar expand='md' className='bg-body-tertiary mb-3 position-sticky top-0 z-2' ref={headerRef}>
      <Container>
        <Navbar.Brand
          className='d-flex justify-content-start align-items-center'
          as={Link}
          to='/'
          onClick={() => setSearchQuery("")}
        >
          <span className='d-inline-block me-1' style={{ width: "40px" }}>
            <img className='w-100' src='/logo/logo.png' alt='' />
          </span>
          <span className='hidden-below-300 fw-semibold'>TourGuide</span>
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
              <Nav.Link as={NavLink} to='/offers-types' onClick={handleNavLinkClick}>
                Oferty
              </Nav.Link>
              <Nav.Link as={NavLink} to='/contact' onClick={handleNavLinkClick}>
                Kontakt
              </Nav.Link>
            </Nav>

            <OverlayTrigger placement='bottom' overlay={<Tooltip id='tooltip-search'>Wpisz miejsce wycieczki</Tooltip>}>
              <Form
                className='d-flex'
                onSubmit={(e) => {
                  e.preventDefault();
                  handleClose();
                }}
              >
                <Form.Control
                  type='search'
                  placeholder='Szukaj wycieczki do...'
                  className='me-2'
                  aria-label='Search'
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </Form>
            </OverlayTrigger>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
});

CustomNav.displayName = "CustomNav";

export default CustomNav;
