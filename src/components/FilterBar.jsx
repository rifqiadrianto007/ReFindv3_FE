export default function FilterBar() {
    return (
        <div className="flex flex-wrap gap-4">
            <input className="border px-3 py-2 rounded" placeholder="Cari barang" />
            <select className="border px-3 py-2 rounded">
                <option>Semua</option>
                <option>Kehilangan</option>
                <option>Temuan</option>
            </select>
            <input type="date" className="border px-3 py-2 rounded" />
        </div>
    );
}
