import { useState, useEffect } from "react";
import "./BtnScrollToTop.scss";

const BtnScrollToTop = ({ headerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    const headerHeight = headerRef?.current?.offsetHeight || 0;

    window.scrollTo({
      top: headerHeight > 0 ? -headerHeight : 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div onClick={scrollToTop} className={`btn-scroll-to-top ${isVisible ? "visible" : ""}`}>
      <i className='bi bi-arrow-up-circle-fill'></i>
    </div>
  );
};

export default BtnScrollToTop;
