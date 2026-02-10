import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ReportDetail from "./pages/ReportDetail";
import CreateReport from "./pages/CreateReport";
import AdminDashboard from "./pages/AdminDashboard";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/reports/:id", element: <ReportDetail /> },
    { path: "/create", element: <CreateReport /> },
    { path: "/admin", element: <AdminDashboard /> },
]);