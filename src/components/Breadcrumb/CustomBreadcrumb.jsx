import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import "./CustomBreadcrumb.scss";

const CustomBreadcrumb = () => {
  const { setSearchQuery } = useSearch();

  const handleBreadcrumbClick = () => {
    setSearchQuery("");
  };

  return (
    <Container>
      <hr className='border-primary' style={{ borderTop: "2px solid #007bff", marginTop: "10px", marginBottom: "20px" }} />
      <Breadcrumb className='hidden-below-300'>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/" }} onClick={handleBreadcrumbClick}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/about" }} onClick={handleBreadcrumbClick}>
          O mnie
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/contact" }} onClick={handleBreadcrumbClick}>
          Kontakt
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/offers-types" }} onClick={handleBreadcrumbClick}>
          Oferty
        </Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default CustomBreadcrumb;
