import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

const CustomFooter = () => {
  return (
    <footer className='text-center text-lg-start text-muted mt-5'>
      {/* Main footer content */}
      <section className='pt-1' style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <Container className='text-center text-md-start pt-1'>
          <Row className='mt-3'>
            {/* Contact */}
            <Col md={4} className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Kontakt</h6>

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
                  <i className='bi bi-envelope-paper-fill'></i> E-mail:
                </li>
                <li className='d-inline'>
                  <a href='mailto:tourguide@poczta.onet.pl'>tourguide@poczta.onet.pl</a>
                </li>
                <li>
                  <a href='mailto:info@tour-guide.pl'>info@tour-guide.pl</a>
                </li>
              </ul>

              <ul className='list-unstyled'>
                <li className='fw-bold'>
                  <i className='bi bi-phone-fill'></i> Telefon:
                </li>
                <li className='fw-bold'>
                  <a href='tel:+48601786363'>+48 601 786 363</a>
                </li>
              </ul>
            </Col>

            <Col md={8} className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4'>INFORMACJE</h6>
              <ul className='list-unstyled'>
                <li className='fw-bold'>
                  <i className='bi bi-patch-question-fill'></i> Warto pamiętać:
                </li>
                <li>- ceny na stronie i w folderze są kalkulowane ze środkowej Polski.</li>
                <li>- że nie da się zorganizować dobrej 5 dniowej wycieczki za 700 PLN…tanio już było, przed pandemią</li>
                <li>
                  - programy proponowane są najczęściej wybierane przez klientów. Jeśli macie Państwo własne pomysły prosimy o
                  sugestie
                </li>
                <li>
                  - imprezy 3 dniowe i niektóre zagraniczne to idealne kierunki na integracyjne wyjazdy weekendowe np dla seniorów,
                  nauczycieli, firm
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer copyright */}
      <div className='text-center p-4' style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='#'>
          <span className='ms-1'>Mariusz Rozycki</span>
        </a>
      </div>
    </footer>
  );
};

export default CustomFooter;
