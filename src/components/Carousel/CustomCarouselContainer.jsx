import { useState, useEffect } from "react";
import breakpoints from "../../styles/breakpoints";
import { offersApi } from "../../api/api";
import useGetData from "../../hooks/useGetData";
import CustomCarousel from "./CustomCarousel";

const CustomCarouselContainer = () => {
  const { data: slides, isLoading, isError, error } = useGetData(offersApi);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.lg) {
        setItemsPerSlide(3);
      } else if (width >= breakpoints.md) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  const groupSlides = (slides, itemsPerGroup) => {
    if (!slides || slides.length === 0) return [];

    const groupedSlides = [];
    const slidesWithDuplicates = [...slides];

    while (slidesWithDuplicates.length % itemsPerGroup !== 0) {
      slidesWithDuplicates.push(slidesWithDuplicates[groupedSlides.length % slides.length]);
    }

    for (let i = 0; i < slidesWithDuplicates.length; i += itemsPerGroup) {
      groupedSlides.push(slidesWithDuplicates.slice(i, i + itemsPerGroup));
    }

    return groupedSlides;
  };

  const groupedSlides = groupSlides(slides, itemsPerSlide);

  if (isLoading) return <p>Ładowanie slajdów...</p>;
  if (isError) return <p>Błąd podczas pobierania slajdów: {error.message}</p>;

  return <CustomCarousel groupedSlides={groupedSlides} itemsPerSlide={itemsPerSlide} />;
};

export default CustomCarouselContainer;
