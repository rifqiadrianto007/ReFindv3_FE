import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router-dom";

export default function Messages() {
    const { user } = useAuth();
    const { id } = useParams();

    const messages = [
        { sender: "user", text: `${user.name} meminta terhubung dengan barang ID #${id}` },
        { sender: "admin", text: "Silahkan datang ke kantor admin" },
    ];

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto p-6">
                <h1 className="font-bold mb-4">Pesan Admin</h1>

                <div className="border rounded p-4 space-y-3">
                    {messages.map((m, i) => (
                        <div
                            key={i}
                            className={`p-3 rounded text-sm max-w-md ${m.sender === "user"
                                    ? "bg-slate-900 text-white ml-auto"
                                    : "bg-gray-100"
                                }`}
                        >
                            {m.text}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
