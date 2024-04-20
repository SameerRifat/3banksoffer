import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/HeroSection";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import Testimonials from "@/components/testimonials/Testimonials";
import MapSection from "@/components/mapSection/MapSection";
import AboutUs from "@/components/aboutUs/AboutUs";
// import HeroSection from "@/components/heroSection/heroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Testimonials />
      <MapSection />
      <AboutUs />
    </>
  );
}
