import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import HomeFAQ from "@/components/HomeFAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Projects />
      <HomeFAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
