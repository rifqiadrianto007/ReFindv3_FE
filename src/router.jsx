import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ReportDetail from "./pages/ReportDetail";
import CreateReport from "./pages/CreateReport";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Messages from "./pages/Messages";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/reports/:id", element: <ReportDetail /> },
    {
        path: "/create",
        element: (
            <ProtectedRoute>
                <CreateReport />
            </ProtectedRoute>
        ),
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <AdminDashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: "/messages/:id",
        element: (
            <ProtectedRoute>
                <Messages />
            </ProtectedRoute>
        ),
    },
]);