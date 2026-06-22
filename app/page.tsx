// Navbar component
import Navbar from "./Pages/Navbar";
// Hero component
import Hero from "./Pages/Hero";
// About component
import About from "./Pages/About";
// Services component
import Services from "./Pages/Services";
// Gallery component
import Gallery from "./Pages/Gallery";
// Why Us component
import Why_Us from "./Pages/Why_Us";
// Testimonials component
import Testimonials from "./Pages/Testimonials";
// CTA
import CTA from "./Pages/CTA";
// Footer component
import Footer from "./Pages/Footer";

import "./globals.css"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Why_Us />
      <Testimonials />
      <CTA />
      <Footer />

    </>
  );
}
