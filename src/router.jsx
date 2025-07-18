import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./routes/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ContactList from "./components/ContactList";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/contactlist",
    element: (
      <PrivateRoute>
        <ContactList />
      </PrivateRoute>
    ),
  },
]);