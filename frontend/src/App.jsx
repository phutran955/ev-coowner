// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// guest pages
import GuestPage from "./pages/guest";
import RegisterPage from "./pages/guest/auth/register";
import LoginPage from "./pages/guest/auth/login";

// owner pages
import DashboardOwner from "./pages/co-owner";
//import MyVehicles from "./pages/co-owner/MyVehicles";
//import Settings from "./pages/co-owner/Settings";

// layout
import DashboardLayout from "./components/layouts/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  // ✅ Tất cả route /owner đều dùng chung DashboardLayout
  {
    path: "/owner",
    element: <DashboardLayout />, // layout duy nhất
    children: [
      { 
        path: "dashboard", 
        element: <DashboardOwner /> },
      /*{ 
        path: "my-vehicles", 
        element: <MyVehicles /> },
      { 
        path: "settings", 
        element: <Settings /> },*/
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
