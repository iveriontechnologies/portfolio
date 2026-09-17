import PublicLayout from "@/layout/PublicLayout";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProjectPage from "@/pages/ProjectPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <ProjectPage /> },
    ],
  },
]);

export default router;
