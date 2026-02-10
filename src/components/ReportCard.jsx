import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

export default function ReportCard({ data }) {
    return (
        <div className="border rounded p-4 shadow-sm">
            <h2 className="font-semibold">{data.item}</h2>
            <p className="text-sm text-gray-500">{data.type}</p>
            <StatusBadge status={data.status} />
            <Link
                to={`/reports/${data.id}`}
                className="block mt-3 text-blue-600 text-sm"
            >
                Lihat detail
            </Link>
        </div>
    );
}
