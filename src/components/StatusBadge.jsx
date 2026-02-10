export default function StatusBadge({ status }) {
    const map = {
        pending: "bg-yellow-200 text-yellow-800",
        approved: "bg-green-200 text-green-800",
        rejected: "bg-red-200 text-red-800",
    };

    return (
        <span className={`text-xs px-2 py-1 rounded ${map[status]}`}>
            {status}
        </span>
    );
}
