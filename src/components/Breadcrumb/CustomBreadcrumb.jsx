import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";

const CustomBreadcrumb = () => {
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/about" }}>
          O mnie
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/contact" }}>
          Kontakt
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/offers-types" }}>
          Oferty
        </Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default CustomBreadcrumb;
