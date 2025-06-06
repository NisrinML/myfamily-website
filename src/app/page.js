import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievmentSection from "./components/AchievmentSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white-light">
     <Navbar/>
     <div className="container mt-24 md:mt-36 mx-auto md:px-12 px-4 py-4">
     <HeroSection/>
     <AchievmentSection/>
     <AboutSection/>
     <ProjectSection/>
     <EmailSection/>
     </div>
     <Footer/>
    </main>

  );
}
