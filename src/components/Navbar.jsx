import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-20 bg-[#071733]/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

                {/* Menu kiri */}
                <div className="flex gap-6 text-white text-sm font-medium">
                    <Link to="/">Beranda</Link>
                    <Link to="/kehilangan">Kehilangan</Link>
                    <Link to="/penemuan">Penemuan</Link>
                </div>

                {/* Kanan */}
                <div className="flex items-center gap-4 relative">
                    <span
                        className="text-white text-sm cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        {user?.name || "User"}
                    </span>

                    {open && (
                        <div className="absolute right-0 top-10 bg-white text-sm rounded shadow w-32">
                            <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                                Logout
                            </button>
                        </div>
                    )}

                    {/* Logo kampus */}
                    <img
                        src="/src/assets/logo semua.webp"
                        alt="logo"
                        className="h-8 ml-4"
                    />
                </div>
            </div>
        </nav>
    );
}
