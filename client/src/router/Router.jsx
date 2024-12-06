import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";

import AboutUs from "../components/home/AboutUs";
import Blog from "../pages/blog/Blog";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <div>Page Not Found</div>,
      children: [
        {
            index:true,
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/about-us',
            element: <AboutUs/>
        },
        {
            path: '/blog/:id',
            element: <Blog/>
        }
      ]
    },
  ]);