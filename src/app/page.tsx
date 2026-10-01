import HeroSection from "@/components/HeroSection";
import HomeSections from "@/components/HomeSections";

export default function Home() {
  return (
    <main>
      {/* 1. Exact Mockup Hero Section with Glass Navbar & Real Content */}
      <HeroSection />

      {/* 2. Complete Architecture Sections: About Us, Services, Projects, Trust, Form, Footer */}
      <HomeSections />
    </main>
  );
}
