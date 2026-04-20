import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <main className="relative bg-black min-h-screen text-white pt-24">
      <CustomCursor />
      <Navbar />
      <div className="content-wrapper">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
