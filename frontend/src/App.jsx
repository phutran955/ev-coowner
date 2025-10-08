import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuestPage from "./pages/guest";
import RegisterPage from "./pages/guest/auth/register";
import LoginPage from "./pages/guest/auth/login";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <GuestPage /> },
  { 
    path: "/register", 
    element: <RegisterPage /> },
  { 
    path: "/login", 
    element: <LoginPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;




// App.jsx
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestPage from "./pages/guest"; // ví dụ

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuestPage />} />
      </Routes>
    </Router>
  );
}

export default App;*/
