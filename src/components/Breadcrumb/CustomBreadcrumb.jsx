import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";
import useHandleSearch from "../../hooks/useHandleSearch";

const CustomBreadcrumb = () => {
  const { setLocalSearchQuery, resetPreviousLocation } = useHandleSearch(); // Pobierz resetPreviousLocation

  const handleNavLinkClick = () => {
    setLocalSearchQuery(""); // Zresetuj wyszukiwanie
    resetPreviousLocation(); // Zresetuj poprzednią lokalizację
  };

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/" }} onClick={handleNavLinkClick}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/about" }} onClick={handleNavLinkClick}>
          O mnie
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/contact" }} onClick={handleNavLinkClick}>
          Kontakt
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/offers-types" }} onClick={handleNavLinkClick}>
          Oferty
        </Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default CustomBreadcrumb;
