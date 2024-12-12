import { CustomHeader, CustomFooter, CustomBreadcrumb } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <CustomHeader />
      <CustomBreadcrumb />

      <Outlet />
      <CustomFooter />
    </>
  );
};

export default MainLayout;
