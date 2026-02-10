import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-slate-900 text-white px-6 py-4">
            <div className="max-w-6xl mx-auto flex justify-between">
                <span className="font-bold">ReFind</span>
                <div className="flex gap-4">
                    {!user && <Link to="/login">Login</Link>}
                    {user && (
                        <button onClick={logout} className="text-sm">
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
