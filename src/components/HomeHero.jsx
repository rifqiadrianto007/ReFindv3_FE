import heroImg from "../assets/header.webp";

export default function HomeHero() {
    return (
        <div className="pt-20 px-6">
            <div
                className="relative h-90 rounded-3xl overflow-hidden"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#071733]/70" />
            </div>
        </div>
    );
}
