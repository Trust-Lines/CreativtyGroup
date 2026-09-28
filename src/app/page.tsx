import Hero from "@/components/hero";
import FamilyBusinesses from "@/components/family-businesses";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <Hero />
      <FamilyBusinesses />
    </main>
  );
}
