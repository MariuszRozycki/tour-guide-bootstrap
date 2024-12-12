import { useEffect, useState } from "react";
import useSearch from "./useSearch";
import { useNavigateToElement } from "./useNavigateToElement";
import { useLocation, useNavigate } from "react-router-dom";

const useHandleSearch = () => {
  const { setSearchQuery } = useSearch();
  const { handleNavigateToSearch } = useNavigateToElement();
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const [previousLocation, setPreviousLocation] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isOnSingleOfferPage = location.pathname.startsWith("/single-offer/");

  useEffect(() => {
    if (!previousLocation && localSearchQuery.trim() !== "" && location.pathname !== "/search") {
      setPreviousLocation(location.pathname);
    }
  }, [localSearchQuery, previousLocation, location]);

  useEffect(() => {
    if (localSearchQuery.trim() !== "" && !isOnSingleOfferPage) {
      setSearchQuery(localSearchQuery);

      if (location.pathname !== "/search") {
        setIsSearchActive(true);
        handleNavigateToSearch();
      }
    } else if (isSearchActive && previousLocation && location.pathname === "/search") {
      setIsSearchActive(false);
      navigate(previousLocation);
    }
  }, [
    localSearchQuery,
    setSearchQuery,
    handleNavigateToSearch,
    previousLocation,
    location,
    navigate,
    isSearchActive,
    isOnSingleOfferPage,
  ]);

  useEffect(() => {
    if (location.pathname !== "/search" && !isOnSingleOfferPage) {
      setIsSearchActive(false);
      setPreviousLocation(null);
    }
  }, [location.pathname, isOnSingleOfferPage]);

  useEffect(() => {
    if (isOnSingleOfferPage) {
      setLocalSearchQuery("");
      setSearchQuery("");
    }
  }, [isOnSingleOfferPage, setSearchQuery]);

  return { localSearchQuery, setLocalSearchQuery };
};

export default useHandleSearch;
