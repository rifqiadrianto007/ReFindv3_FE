export function SectionTitle({ title }) {
    return (
        <div className="flex items-center gap-4 my-12 text-white">
            <div className="flex-1 h-px bg-white/30" />
            <span className="text-sm font-semibold">{title}</span>
            <div className="flex-1 h-px bg-white/30" />
        </div>
    );
}
