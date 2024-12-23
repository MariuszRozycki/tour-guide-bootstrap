import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./context/SearchContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
// import "../node_modules/swiper/swiper-bundle.min.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <SearchProvider>
          <BrowserRouter basename='/'></BrowserRouter>
          <App />
        </SearchProvider>
      </FavoritesProvider>
    </QueryClientProvider>
  </StrictMode>
);
