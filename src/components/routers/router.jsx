import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import AllProducts from "../pages/AllProducts";
import Carts from "../pages/Carts";
import CreateProduct from "../pages/CreateProduct";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "../pages/PrivateRoute";
import ProductDetails from "../pages/ProductDetails";
import Signup from "../pages/Signup";
import UpdateProduct from "../pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/create-product",
        element: (
          <PrivateRoute>
            <CreateProduct></CreateProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/products/${params.id}`),
        errorElement: <NotFoundPage></NotFoundPage>,
      },
      {
        path: "/products/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/products/${params.id}`),
        errorElement: <NotFoundPage></NotFoundPage>,
      },
      {
        path: "/products/:brand",
        element: <AllProducts></AllProducts>,
        loader: async ({ params }) =>
          params.brand !== "all" &&
          (await fetch(
            `https://uniqueit-server.vercel.app/products/${params.brand}`
          )),
        errorElement: <NotFoundPage></NotFoundPage>,
      },
      {
        path: "/carts/:username",
        element: (
          <PrivateRoute>
            <Carts></Carts>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(
            `https://uniqueit-server.vercel.app/carts/${params.username}`
          ),
        errorElement: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
]);
export default router;
