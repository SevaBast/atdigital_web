import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PartnersBanner from "@/components/PartnersBanner";
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
      <Hero />
      <PartnersBanner />
      <Services />
      <Products />
      <References />
      <LinkedInFeed />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
