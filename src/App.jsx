import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "blog", element: <Blog /> },
        { path: `blog/:slug`, element: <ArticleDetails /> },
        { path: "about", element: <About /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
