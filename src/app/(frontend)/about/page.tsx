import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import About from "@/components/sections/About";

export default function AboutPage() {
  return (
    <main className="relative bg-black min-h-screen text-white pt-24">
      <CustomCursor />
      <Navbar />
      <div className="content-wrapper">
        <About />
      </div>
      <Footer />
    </main>
  );
}
