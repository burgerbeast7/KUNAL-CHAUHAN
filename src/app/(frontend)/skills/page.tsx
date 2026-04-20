import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Skills from "@/components/sections/Skills";

export default function SkillsPage() {
  return (
    <main className="relative bg-black min-h-screen text-white pt-24">
      <CustomCursor />
      <Navbar />
      <div className="content-wrapper">
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
