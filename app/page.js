import Image from "next/image";
import './globals.css';
import HeroSection from './components/HeroSection.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">  
      <container className="container mx-auto px-12 py-4">
        <HeroSection />
      </container>
      
    </main>
  );
}
