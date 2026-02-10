import StatusBadge from "./StatusBadge";

export default function ReportCard() {
    return (
        <div className="border rounded-lg p-4 shadow">
            <h2 className="font-semibold text-lg">Dompet</h2>
            <p className="text-sm text-gray-600">Kehilangan</p>
            <p className="text-sm mt-2">Lapangan kampus</p>
            <StatusBadge status="approved" />
            <a href="/reports/1" className="block mt-4 text-blue-600">
                Lihat Detail
            </a>
        </div>
    );
}
