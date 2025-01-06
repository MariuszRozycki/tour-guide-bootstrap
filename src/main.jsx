import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./context/SearchContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const queryClient = new QueryClient();
const reCaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <SearchProvider>
          <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
            <App />
          </GoogleReCaptchaProvider>
        </SearchProvider>
      </FavoritesProvider>
    </QueryClientProvider>
  </StrictMode>
);
