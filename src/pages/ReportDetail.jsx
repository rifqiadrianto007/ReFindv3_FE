import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import StatusBadge from "../components/StatusBadge";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ReportDetail() {
    const { id } = useParams();
    const { user } = useAuth();
    const isLogin = !!user;
    const navigate = useNavigate();

    const report = {
        id,
        item: "Dompet",
        type: "kehilangan",
        description: "Dompet coklat berisi KTP dan SIM",
        location: "Lapangan kampus",
        date: "2026-02-08",
        status: "approved",
        image: "/dummy.jpg",
    };

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-2">{report.item}</h1>
                <StatusBadge status={report.status} />

                <div className="mt-4 space-y-2 text-sm">
                    <p><b>Jenis</b> {report.type}</p>
                    <p><b>Lokasi</b> {report.location}</p>
                    <p><b>Tanggal</b> {report.date}</p>
                    <p><b>Deskripsi</b> {report.description}</p>
                </div>

                <div className="mt-6">
                    <p className="font-semibold mb-2">Foto Barang</p>

                    {!isLogin && (
                        <div className="border border-dashed p-4 text-sm text-gray-500">
                            Login untuk melihat foto barang
                        </div>
                    )}

                    {isLogin && (
                        <img
                            src={report.image}
                            alt="barang"
                            className="w-64 rounded border"
                        />
                    )}
                </div>

                <div className="mt-8">
                    {!isLogin && (
                        <p className="text-sm text-gray-600">
                            Login untuk menghubungi admin
                        </p>
                    )}

                    {isLogin && (
                        <button
                            onClick={() => navigate(`/messages/${report.id}`)}
                            className="bg-slate-900 text-white px-4 py-2 rounded"
                        >
                            Hubungi Admin
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
