import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
          v7_fetcherPersist: true,
          formMethod: true,
          v7_partialHydration: true,
          v7_skipActionErrorRevalidation: true,
        }}
      />
    </>
  );
}

export default App;
