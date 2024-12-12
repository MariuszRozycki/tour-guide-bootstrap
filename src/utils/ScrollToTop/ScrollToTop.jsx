import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = ({ headerRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const headerHeight = headerRef?.current?.offsetHeight || 0;

    window.scrollTo({
      top: headerHeight > 0 ? -headerHeight : 0,
      behavior: "smooth",
    });
  }, [pathname, headerRef]);

  return null;
};

export default ScrollToTop;
