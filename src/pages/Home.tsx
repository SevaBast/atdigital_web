import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PartnersBanner from "@/components/PartnersBanner";
import CircuitBanner from "@/components/CircuitBanner";
import Services from "@/components/Services";
import Products from "@/components/Products";
import LinkedInFeed from "@/components/LinkedInFeed";
import References from "@/components/References";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <PartnersBanner />
        <CircuitBanner />
        <Services />
        <Products />
        <References />
        <LinkedInFeed />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
