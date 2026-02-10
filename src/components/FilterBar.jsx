export default function FilterBar() {
    return (
        <div className="flex flex-wrap gap-4">
            <input
                type="text"
                placeholder="Cari barang"
                className="border p-2 rounded w-48"
            />
            <select className="border p-2 rounded">
                <option>Semua</option>
                <option>Kehilangan</option>
                <option>Temuan</option>
            </select>
            <input type="date" className="border p-2 rounded" />
        </div>
    );
}
