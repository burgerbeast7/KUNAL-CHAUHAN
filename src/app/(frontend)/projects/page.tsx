import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Projects from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <main className="relative bg-black min-h-screen text-white pt-24">
      <CustomCursor />
      <Navbar />
      <div className="content-wrapper">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
