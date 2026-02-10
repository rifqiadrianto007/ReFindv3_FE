export default function StatusBadge({ status }) {
    const map = {
        pending: "bg-yellow-100 text-yellow-700",
        approved: "bg-green-100 text-green-700",
        rejected: "bg-red-100 text-red-700",
    };

    return (
        <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${map[status]}`}>
            {status}
        </span>
    );
}
