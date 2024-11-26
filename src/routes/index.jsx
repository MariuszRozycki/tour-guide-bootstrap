import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Home, About, Contact } from "../pages";
import { RenderAllOffers, RenderOffersByType, RenderOffersTypes, RenderSingleOffer, RenderAbroadOffers } from "../components";

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
        element: <RenderOffersTypes />,
      },
      {
        path: "/offers-types/abroad",
        element: <RenderAbroadOffers />,
      },
      {
        path: "/offers-by-type/:type",
        element: <RenderOffersByType />,
      },
      {
        path: "/single-offer/:id",
        element: <RenderSingleOffer />,
      },
    ],
  },
]);

export default router;
