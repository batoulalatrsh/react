import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefenations = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Products />} />
//   </Route>,
// );
// const router = createBrowserRouter(routeDefenations);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/root" replace />,
  },
  {
    path: "/root",
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        index: true,

        element: <HomePage />,
      },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
