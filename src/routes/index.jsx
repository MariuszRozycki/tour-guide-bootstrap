import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Home, About, Contact } from "../pages";
import { RenderAllOffers, RenderOffersByDestination, RenderSingleOffer } from "../components";

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
        path: "/offers-by-destination",
        element: <RenderOffersByDestination />,
      },
      {
        path: "/single-offer/:id",
        element: <RenderSingleOffer />,
      },
    ],
  },
]);

export default router;
