import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./AboutContent.scss";

const AboutContent = () => {
  return (
    <section className='about-content'>
      <Container>
        <Row className='mb-4 mb-md-5'>
          <Col className='about-content-img-wrapper pe-lg-0 mb-3' xs={12} md={8}>
            <Image src='../../public/pictures/about/about-torun.jpg' className='rounded-4' />
          </Col>
          <Col xs={12}>
            <Card className='about-card  mt-lg-3 rounded-4 border-0 shadow-lg bg-primary-subtle'>
              <Card.Body>
                <Card.Text className='fs-5'>
                  Nazywam się <span className='fw-bold'>Tomasz Zdunek</span> i jestem właścicielem małej firmy{" "}
                  <span className='fw-bold'>TourGuide</span>. Turystyka jest moja pasja od zawsze. Skończyłem „turystyke i rekreacje”
                  na warszawskim AWF i już jako student pilotowałem wycieczki. Rok pracowałem w Almaturze Warszawa, gdzie nauczyłem
                  się organizacji wycieczek. Po kilku latach pracy pod obcym szyldem założyłem swoje biuro, które fajnie się
                  rozwijało do pandemii…tysiące zadowolonych klientów, życie w rozjazdach, było dobrze…Przyszła zaraza i legendarna
                  pomoc panstwa ale…. Po 4 latach wracam do zawodowej pasji! Proszę zaufać mi ponownie…ćwierć wieku doświadczenia o
                  czymś świadczy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='about-content-img-wrapper pe-lg-0 mb-2 mb-md-0' xs={12} md={4} lg={5}>
            <Image src='../../public/pictures/about/tomek-about-2.jpg' className='rounded-4 rotate-md-8' />
          </Col>
          <Col xs={12} md={8} lg={7}>
            <Card className='about-card ms-lg-n5 mt-lg-3 rounded-4 border-0 shadow-lg bg-primary-subtle'>
              <Card.Body>
                <Card.Text className='fs-5'>
                  <span className='fw-bold'>BIURO PODROZY TOURGUIDE</span> istnieje od 2008 z 4 letnia przerwa w latach
                  pandemicznych. Działalność firmy ubezpiecza Compensa/ Viener z siedzibą w Warszawie ul. Aleje Jerozolimskie 162.
                  Terytorium działalności to Polska i kraje sąsiednie. Właścicielem biura jestem ja - Tomasz Zdunek.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col className='order-1 order-md-0' xs={12} md={8}>
            <Card className='about-card me-lg-n5 mt-lg-5 rounded-4 border-0 shadow-lg bg-primary-subtle'>
              <Card.Body>
                <Card.Text className='fs-5'>
                  Firma specjalizuje się w organizacji turystyki autokarowej dla grup dzieci, młodzieży, pracowników szkół i firm,
                  seniorów. Z nami zorganizujesz krótki spacer po mieście ale też dwutygodniowe kolonie/ obozy czy trampingi
                  rowerowe.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='order-0 order-md-1 about-content-img-wrapper ps-lg-0 mb-2 mb-md-0' xs={12} md={4}>
            <Image className='tomek-about-1 w-100 rounded-4' src='../../public/pictures/about/tomek-about-1.jpg' rounded />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Card className='about-card mt-lg-3 rounded-4 border-0 shadow-lg bg-primary-subtle'>
              <Card.Body>
                <ul className='about-details fs-5 list-unstyled'>
                  <li className='fs-4 fw-bold mb-2'>Dlaczego warto skorzystać z naszych usług?</li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>działamy aktywnie w turystyce od 1998 i ciągle mamy z tego
                    przyjemność
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>do każdego klienta podchodzimy indywidualnie tak by
                    precyzyjnie spełnić jego życzenia
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>preferujemy aktywność fizyczną podczas wyjazdów ale to
                    klient decyduje co będzie robił
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>reklamacje prawie nam się nie zdarzają
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>podejmiemy się organizacji każdego projektu…jeśli dalej w
                    Europę to we współpracy z innym biurem
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>wszelkie formalności załatwiamy u klienta albo za pomocą
                    kontaktu meilowego
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>współpracujemy ze sprawdzonymi gestorami, którzy oferują
                    czyste pokoje z łazienkami i smaczne jedzenie
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>zapewniamy wygodne autokary w każdym rozmiarze{" "}
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>wystawiamy faktury VAT Marża, również imienne
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>dla TourGuide pracują tylko piloci- pasjonaci z dużym
                    doświadczeniem w obsłudze turystów
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>programy zawarte na stronie i folderze to najczęściej
                    wybierane opcje.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Podejmiemy się realizacji Panstwa pomysłów w całej Europie
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>ceny zawarte na WWW i folderze są skalkulowane dla wyjazdów
                    z Warszawy…
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Jeśli mieszkasz gdzie indziej, napisz do nas a wycenimy
                    Twoją podróż najszybciej jak się da
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Card className='about-card  mt-lg-3 rounded-4 border-0 shadow-lg bg-primary-subtle'>
              <Card.Body>
                <ul className='about-details fs-5 list-unstyled'>
                  <li className='fs-4 fw-bold mb-2'>W cenie zawarte są koszty:</li>

                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>zakwaterowanie (zawsze pokoje z łazienkami)
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>wyżywienie (dwa lub trzy razy dziennie)
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>transport autokarem wraz z parkingami i opłatami drogowymi
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>opieka pilota, przewodników górskich i miejskich gdzie
                    konieczne
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>ubezpieczenie NNW (za granicą KL+ NNW)
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>pobyt kadry (1/15) i obsługi
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>czasem konkurs wiedzy o zwiedzanym regionie
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutContent;
