import Navbar from "../components/Navbar";
import ReportCard from "../components/ReportCard";
import FilterBar from "../components/FilterBar";

export default function Home() {
    const reports = [
        { id: 1, item: "Dompet", type: "kehilangan", status: "approved" },
        { id: 2, item: "Kunci", type: "temuan", status: "pending" },
    ];

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto p-6">
                <FilterBar />
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    {reports.map(r => (
                        <ReportCard key={r.id} data={r} />
                    ))}
                </div>
            </div>
        </>
    );
}
