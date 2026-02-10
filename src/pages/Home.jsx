import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import { HomeIntro } from "../components/HomeIntro";
import { SectionTitle } from "../components/SectionTitle";
import MechanismCard from "../components/MechanismCard";

export default function Home() {
    const user = { name: "Rifqi" };

    return (
        <div className="min-h-screen bg-[#071733]">
            <Navbar user={user} />

            <HomeHero />
            <HomeIntro />

            <div className="px-8">
                <SectionTitle title="Mekanisme Operasional" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <MechanismCard
                        title="Kehilangan Barang"
                        items={[
                            "Ingat kapan terakhir menggunakan barang",
                            "Laporkan melalui form yang tersedia",
                            "Isi data dengan jelas dan lengkap",
                            "Pantau menu Penemuan",
                        ]}
                    />

                    <MechanismCard
                        title="Penemuan Barang"
                        items={[
                            "Amankan barang yang ditemukan",
                            "Laporkan penemuan melalui form",
                            "Sertakan informasi yang jelas",
                            "Pantau menu Kehilangan",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
