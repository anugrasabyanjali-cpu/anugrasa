import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductGrid from "@/components/ProductGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ProductGrid />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
