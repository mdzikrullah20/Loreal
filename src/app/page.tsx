import Image from "next/image";
import Header from "./Component/Header";
import HeroSection from "./Component/Hero";
import AboutSection from "./Component/About";
import ServicesSection from "./Component/Services";
import GallerySection from "./Component/Gallery";
import TestimonialsSection from "./Component/TestimonialsSection";
import Footer from "./Component/Footer";
export default function Home() {
  return (
    <div className="">
    <Header/>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <GallerySection/>
    <TestimonialsSection/>
    <Footer/>
    </div>
  );
}
