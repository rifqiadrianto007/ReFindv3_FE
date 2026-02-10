import bgLogin from "../assets/bg-login.webp";
import logo from "../assets/logo semua.webp";

export default function Login() {
    return (
        <div className="min-h-screen w-full relative overflow-hidden bg-[#071733]">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${bgLogin})`,
                }}
            />
            <div className="absolute inset-0 bg-[#071733]/80 z-0" />


            {/* Logo kampus kanan atas */}
            <div className="absolute top-6 right-10 flex items-center z-10">
                <img src={logo} alt="logo" className="h-40 object-contain" />
            </div>

            {/* Konten utama */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* Kiri */}
                <div className="flex flex-col justify-center px-10 lg:px-20 py-24">
                    {/* Brand */}
                    <h1 className="text-[56px] font-extrabold tracking-tight text-white/90 mb-10">
                        ReFind<span className="font-normal">.</span>
                    </h1>

                    {/* Card login */}
                    <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                        <div className="mb-4">
                            <label className="block text-sm text-gray-300 mb-2">
                                Username
                            </label>
                            <input autoFocus
                                type="text"
                                placeholder="NIM"
                                className="w-full h-11 rounded-full px-5 bg-[#8ea0b1]/40 text-white placeholder-white/70 outline-none"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full h-11 rounded-full px-5 bg-[#8ea0b1]/40 text-white placeholder-white/70 outline-none"
                            />
                        </div>

                        <button disabled className="disabled:opacity-60 w-full bg-black text-white py-2 rounded-full font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                            Login
                        </button>
                    </div>
                </div>

                {/* Kanan */}
                <div className="hidden lg:flex items-center justify-center px-24">
                    <h2 className="text-[32px] font-semibold text-white/90 text-center leading-relaxed">
                        "Temukan dan laporkan barang hilang
                        <br />
                        dengan mudah"
                    </h2>
                </div>
            </div>

            {/* Shape dekoratif */}
            <div className="absolute -bottom-28 right-24 w-105 h-55 bg-[#97a3af]/70 rounded-[140px] rotate-[-20deg]" />
            <div className="absolute -top-12 left-10 w-24 h-24 bg-white/80 rounded-full" />
            <div className="absolute top-20 left-4 w-14 h-14 bg-white/30 rounded-full" />
        </div>
    );
}
