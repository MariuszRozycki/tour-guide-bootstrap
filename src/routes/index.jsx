import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Home, About, Contact, FavoritesPage, PageNotFound } from "../pages";
import {
  RenderAllOffers,
  OffersListByType,
  OffersTypesList,
  RenderSingleOffer,
  AbroadOffers,
  BussOffers,
  CrossBorderOffers,
  DomesticOffers,
  FiveDaysOffers,
  FourDaysOffers,
  KayakOffers,
  OneDayOffers,
  ThreeDaysOffers,
  WeekendOffers,
  SeniorOffers,
  SearchOffer,
} from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/all-offers",
        element: <RenderAllOffers />,
      },
      {
        path: "/offers-types",
        element: <OffersTypesList />,
      },
      {
        path: "/offers-by-type/:type",
        element: <OffersListByType />,
      },
      {
        path: "/offers-types/abroad",
        element: <AbroadOffers />,
      },
      {
        path: "/offers-types/buss",
        element: <BussOffers />,
      },
      {
        path: "/offers-types/cross-border",
        element: <CrossBorderOffers />,
      },
      {
        path: "/offers-types/domestic",
        element: <DomesticOffers />,
      },
      {
        path: "/offers-types/five-days",
        element: <FiveDaysOffers />,
      },
      {
        path: "/offers-types/four-days",
        element: <FourDaysOffers />,
      },
      {
        path: "/offers-types/kayak",
        element: <KayakOffers />,
      },
      {
        path: "/offers-types/one-day",
        element: <OneDayOffers />,
      },
      {
        path: "/offers-types/three-days",
        element: <ThreeDaysOffers />,
      },
      {
        path: "/offers-types/weekend",
        element: <WeekendOffers />,
      },
      {
        path: "/offers-types/senior",
        element: <SeniorOffers />,
      },
      {
        path: "/search",
        element: <SearchOffer />,
      },
      {
        path: "/favorites-page",
        element: <FavoritesPage />,
      },
      {
        path: "/single-offer/:id",
        element: <RenderSingleOffer />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
