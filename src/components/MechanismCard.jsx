export default function MechanismCard({ title, items }) {
    return (
        <div className="bg-[#4b5a6b] text-white rounded-xl p-6 flex-1">
            <h3 className="font-semibold mb-4">{title}</h3>
            <ol className="text-sm space-y-2 list-decimal list-inside opacity-90">
                {items.map((i, idx) => (
                    <li key={idx}>{i}</li>
                ))}
            </ol>
        </div>
    );
}
