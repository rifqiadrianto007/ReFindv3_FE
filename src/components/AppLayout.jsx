import Navbar from "./Navbar";

export default function AppLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="max-w-6xl mx-auto p-6">
                {children}
            </main>
        </>
    );
}