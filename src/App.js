import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Root from "./pages/Root.js";
import Error from './pages/Error.js'
import ProductDetails from "./pages/ProductDetails.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Root layout
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      {path:'/products/:productId', element: <ProductDetails /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
