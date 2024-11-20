import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function CustomNav() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className='bg-body-tertiary mb-3'>
          <Container>
            <Navbar.Brand href='#'>Tour Guide</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <Nav.Link as={NavLink} to='/' end>
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to='/about'>
                    About
                  </Nav.Link>
                  <Nav.Link as={NavLink} to='/contact'>
                    Contact
                  </Nav.Link>
                  <NavDropdown title='Oferty' id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item as={NavLink} to='/action1'>
                      Transgraniczne
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/action2'>
                      Krajowe
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to='/action3'>
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
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
