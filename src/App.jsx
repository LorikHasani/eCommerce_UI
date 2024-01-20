import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Products } from "./pages";
import RootLayout from "./pages/RootLayout";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
