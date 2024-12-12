import { useRef } from "react";
import { CustomHeader, CustomFooter, CustomBreadcrumb } from "../components";
import { ScrollToTop } from "../utils";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const headerRef = useRef(null);

  return (
    <>
      <CustomHeader ref={headerRef} />
      <ScrollToTop headerRef={headerRef} />
      <CustomBreadcrumb />
      <Outlet />
      <CustomFooter />
    </>
  );
};

export default MainLayout;
