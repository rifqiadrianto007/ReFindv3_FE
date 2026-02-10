export default function Navbar() {
    return (
        <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between">
            <h1 className="font-bold text-xl">ReFind</h1>
            <div className="flex gap-4">
                <a href="/" className="hover:underline">Beranda</a>
                <a href="/create" className="hover:underline">Buat Laporan</a>
                <a href="/login" className="hover:underline">Login</a>
            </div>
        </nav>
    );
}