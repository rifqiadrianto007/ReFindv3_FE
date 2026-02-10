import Navbar from "../components/Navbar";
import StatusBadge from "../components/StatusBadge";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const navigate = useNavigate();

    const reports = [
        { id: 1, item: "Dompet", type: "kehilangan", status: "pending" },
        { id: 2, item: "Kunci", type: "temuan", status: "approved" },
    ];

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-xl font-bold mb-4">Dashboard Admin</h1>

                <div className="mb-4">
                    <select className="border px-3 py-2 rounded">
                        <option>Semua</option>
                        <option>pending</option>
                        <option>approved</option>
                        <option>rejected</option>
                    </select>
                </div>

                <table className="w-full border text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">Barang</th>
                            <th className="p-2 border">Jenis</th>
                            <th className="p-2 border">Status</th>
                            <th className="p-2 border">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map(r => (
                            <tr key={r.id}>
                                <td className="p-2 border">{r.item}</td>
                                <td className="p-2 border">{r.type}</td>
                                <td className="p-2 border">
                                    <StatusBadge status={r.status} />
                                </td>
                                <td className="p-2 border flex gap-2">
                                    {r.status === "pending" && (
                                        <>
                                            <button className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                                                Approve
                                            </button>
                                            <button className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                                                Reject
                                            </button>
                                        </>
                                    )}
                                    <button
                                        onClick={() => navigate(`/messages/${r.id}`)}
                                        className="bg-slate-900 text-white px-2 py-1 rounded text-xs"
                                    >
                                        Pesan
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
