export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form className="border p-6 rounded w-80">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <input
                    type="text"
                    placeholder="NIM"
                    className="border p-2 w-full mb-3"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 w-full mb-4"
                />
                <button className="bg-slate-900 text-white w-full py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
}
