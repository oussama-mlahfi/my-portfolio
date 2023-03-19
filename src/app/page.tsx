import AboutMe from "@/component/home/About-me";
import HeroSection from "@/component/home/HeroSection";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto mt-36">
      <div className="h-screen">
        <HeroSection />
      </div>
      <div>
        <AboutMe />
      </div>
    </main>
  );
}
