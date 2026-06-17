// Navbar component
import Navbar from "./Pages/Navbar";
// Hero component
import Hero from "./Pages/Hero";
// About component
import About from "./Pages/About";

import "./globals.css"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

    </>
  );
}
