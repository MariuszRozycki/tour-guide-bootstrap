import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./AboutContent.scss";

const AboutContent = () => {
  return (
    <section className='about-content'>
      <Container>
        <Row className='mb-4 mb-md-5'>
          <Col className='about-content-img-wrapper pe-lg-0 mb-3' xs={12} md={8}>
            <Image src='/pictures/about/tomek-about.jpg' alt='Tomek Zdunek cycle' className='rounded-4' />
          </Col>
          <Col xs={12}>
            <Card className='about-card  mt-lg-3 rounded-4 border-0 shadow-lg bg-primary-subtle'>
              <Card.Body>
                <Card.Text className='fs-5'>
                  Nazywam się <span className='fw-bold'>Tomasz Zdunek</span>. Od ponad 26 lat łączę moją życiową pasję podróżniczą z
                  działalnością zawodową zgodnie z zasadą Konfucjusza “Wybierz pracę, którą kochasz, a nie przepracujesz ani jednego
                  dnia więcej w Twoim życiu”.
                </Card.Text>
                <Card.Text className='fs-5'>
                  W 2008 roku zostałem operatorem turystycznym jako BIURO PODROZY TOURGUIDE z zasięgiem działania w Polsce oraz
                  krajach sąsiednich.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col className='about-content-img-wrapper pe-lg-0 mb-2 mb-md-0' xs={12} md={4} lg={5}>
            <Image
              src='/pictures/about/couple-tour.jpg'
              alt='Couple. https://pixabay.com/pl/photos/para-wolno%C5%9B%C4%87-%C5%9Bwi%C4%99to-podr%C3%B3%C5%BC-9010675/'
              className='rounded-4 rotate-md-8'
            />
          </Col>
          <Col xs={12} md={8} lg={7}>
            <Card className='about-card ms-lg-n5 mt-lg-3 rounded-4 border-0 shadow-lg bg-primary-subtle'>
              <Card.Body>
                <ul className='about-details fs-5 list-unstyled'>
                  <li className='fs-5 fw-bold mb-2'>Nasza oferta to starannie zaplanowane imprezy turystyczne:</li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Nauka przez przygodę! Wycieczki dla dzieci i młodzieży.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Pakiety tematyczne! Wycieczki tematyczne związane z
                    programem nauczania (np. historia, przyroda, kultura).
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Bezpiecznie, aktywnie, z pasją! Imprezy dla seniorów.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Z nami odkryjesz świat od nowa! Wyjazdy integracyjne
                    pracowników.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Podróżuj z pasją! Krótkie wypady oraz dłuższe obozy,
                    kolonie czy trampingi rowerowe.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Podróże Szyte na Miarę! Kompleksowa obsługa, w tym
                    zakwaterowanie, wyżywienie oraz transport.
                  </li>
                </ul>
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
            <Image className='tomek-about-1 w-100 rounded-4' src='/pictures/about/tour-offers-pic.jpg' rounded />
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col>
            <Card className='about-card mt-lg-3 rounded-4 border-0 shadow-lg bg-primary-subtle'>
              <Card.Body>
                <ul className='about-details fs-5 list-unstyled'>
                  <li className='fs-4 fw-bold mb-2'>Dlaczego warto wybrać Biuro Podróży TourGuide?</li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Indywidualne podejście: wyznajemy zasadę, że turystyka nie
                    jest szablonem, do którego trzeba wpasować każdą grupę turystów.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Powiedz nam o wymarzonej wyprawie – my zajmiemy się jej
                    organizacją.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Konsultacje przed wycieczką: chcemy poznać oczekiwania i
                    dostosowywać program do grupy. Bardzo lubimy osobisty kontakt w dogodnej dla państwa porze oraz miejscu.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Jakość nad ilość: nie interesuje nas ilość czy zasięgi
                    kosztem Państwa zadowolenia.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Pasja i doświadczenie: mamy wieloletnie doświadczenie w
                    turystyce - od 1998 roku. Nasi piloci, przewodnicy oraz kierowcy to pasjonaci, co widać w ich pełnym
                    zaangażowaniu.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Sprawdzeni partnerzy: współpracujemy tylko z rzetelnymi
                    dostawcami usług, co gwarantuje komfort i bezpieczeństwo.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Wygodę podróży zapewniamy dobierając wygodne autokary.
                    Wypoczynek po intensywnym zwiedzaniu w sprawdzonych przez nas hotelach z czystymi pokojami z łazienkami oraz
                    serwujące smaczne jedzenie.
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
                  <li className='fs-4 fw-bold mb-2'>Co zawiera cena?</li>

                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Zakwaterowanie w pokojach z łazienkami.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Wyżywienie (dwa lub trzy posiłki dziennie).
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Transport autokarem z opłatami drogowymi, kosztami
                    parkingów.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Opiekę pilota oraz usługi przewodników.
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Ubezpieczenie NNW (za granicą KL+ NNW).
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Pobyt kadry (1/15).
                  </li>
                  <li>
                    <i className='bi bi-arrow-right-circle-fill me-2'></i>Opcjonalnie konkurs wiedzy o zwiedzanym regionie.
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
