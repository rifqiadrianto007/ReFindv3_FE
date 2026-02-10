export default function Button({ children, variant = "primary", ...props }) {
    const base = "px-3 py-2 rounded text-sm";
    const map = {
        primary: "bg-slate-900 text-white",
        success: "bg-green-600 text-white",
        danger: "bg-red-600 text-white",
    };

    return (
        <button className={`${base} ${map[variant]}`} {...props}>
            {children}
        </button>
    );
}
