import Image from "next/image";
import './globals.css';
import HeroSection from './components/HeroSection.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">  
    <Navbar />
      <container className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
      </container>
      <Footer />
      
    </main>
  );
}
