  // router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Characters from "./pages/CharactersPage";
import ACharacter from "./pages/ACharacter";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FavoritesPage from "./pages/FavoriteCharactersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "AboutPage/",
        element: <About />,
      },
      {
        path: "contact/",
        element: <Contact />
      },
      {
        path: "characters/",
        element: <Characters />
      },
      {
        path: "character/:id/",
        element: <ACharacter />
      },
      {
        path: "favorites/",
        element: <FavoritesPage />
      }
    ],
    errorElement: <NotFound />,
  },
]);

export default router;