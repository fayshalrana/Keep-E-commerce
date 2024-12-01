import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import WishList from "../pages/WishList";
import Profile from "../pages/Profile";
import BlogGrid from "../pages/BlogGrid";
import BlogList from "../pages/BlogList";
import BlogDetails from "../pages/BlogDetails";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails/>,
        // loader: ({ params }) =>fetch(`https://fakestoreapi.com/products/${params.id}`)
        loader: ({ params }) =>fetch(`https://keep-react-ecommerce.vercel.app/product-details/${params.id}`)
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/wish-list",
        element: <WishList/>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/blog",
        element: <BlogGrid />,
      },
      {
        path: "/blog-list",
        element: <BlogList />,
      },
      {
        path: "/blog/Details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path:'*',
        element: <ErrorPage />,
      }
      /*  {
        path: "/product/:itemId",
        element: <ProductDetails />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/aboutV2",
        element: <AboutUsV2 />,
      },
      
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/orders/:id",
        element: <OrderTrack />,
      },
      {
        path: "/terms",
        element: <TermsCondition />,
      }, */
    ],
  },
]);
