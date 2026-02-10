import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        login({
            token: "dummy-token",
            user: { name: "Rifqi", role: "user" },
        });

        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded w-80 shadow">
                <h1 className="font-bold mb-4">Login</h1>
                <input className="border w-full p-2 mb-3" placeholder="NIM" />
                <input type="password" className="border w-full p-2 mb-4" placeholder="Password" />
                <button className="bg-slate-900 text-white w-full py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
}