import Navbar from "../components/Navbar";
import ReportCard from "../components/ReportCard";
import FilterBar from "../components/FilterBar";

export default function Home() {
    const reports = [1, 2, 3];

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto p-6">
                <FilterBar />
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    {reports.map(id => (
                        <ReportCard key={id} />
                    ))}
                </div>
            </div>
        </>
    );
}