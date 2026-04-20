import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Experience from "@/components/sections/Experience";

export default function ExperiencePage() {
  return (
    <main className="relative bg-black min-h-screen text-white pt-24">
      <CustomCursor />
      <Navbar />
      <div className="content-wrapper">
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
