import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

const CustomFooter = () => {
  return (
    <footer className='text-center text-lg-start bg-body-tertiary text-muted'>
      {/* Main footer content */}
      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            {/* About company */}
            <Col md={3} lg={4} xl={3} className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>
                <span className='text-uppercase'>Tour Guide</span>
                <span className='d-block'>Tomasz Zdunek</span> <span className='d-block'>Kraftowe Wyjazdy</span>
              </h6>
              {/* <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p> */}
            </Col>

            {/* Contact */}
            <Col md={4} lg={3} xl={3} className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

              <ul className='list-unstyled'>
                <li className='d-inline me-1'>
                  <i className='bi bi-house-door-fill'></i>
                </li>
                <li className='d-inline'>Ogrodowa 27</li>
                <li>05-152 Kazuń Polski</li>
                <li>NIP: 821 173 7629</li>
                <li>nr wpisu: jeszcze nie znam</li>
              </ul>

              <ul className='list-unstyled'>
                <li className='d-inline me-1'>
                  <i className='bi bi-envelope-paper-fill'></i>
                </li>
                <li className='d-inline'>tourguide@poczta.onet.pl</li>
                <li>info@tour-guide.pl</li>
              </ul>

              <ul className='list-unstyled'>
                <li className='d-inline me-1'>
                  <i className='bi bi-phone-fill'></i>
                </li>
                <li className='d-inline'>+ 01 234 567 88</li>
              </ul>

              <p>
                <span className='d-block'></span>
              </p>
            </Col>

            {/* Products */}
            {/* <Col md={2} lg={2} xl={2} className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </Col> */}

            {/* Useful links */}
            {/* <Col md={3} lg={2} xl={2} className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </Col> */}
          </Row>
        </Container>
      </section>

      {/* Footer copyright */}
      <div className='text-center p-4' style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default CustomFooter;
