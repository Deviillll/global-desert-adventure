import Blog from "@/components/Blog";
import BuggyTours from "@/components/BuggyTours";
import ExpandingCards from "@/components/ExpandingCards";
import FAQ from "@/components/FAQ";
import ImageGrid from "@/components/Gallery";
import {Header} from "@/components/Header";
import KidsActivity from "@/components/KidsActivity";
import KidsBuggy from "@/components/KidsBuggy";
import LandingAbout from "@/components/LandingAbout";
import SafetyInfo from "@/components/SafEtyInfo";
import ScrollVideo from "@/components/ScrollVideo";
import Services from "@/components/Services";
import Products from "@/components/products";


export default function Home() {
  return (
    <div className="bg-[#000000] overflow-x-hidden">
      <Header />
      <LandingAbout />
      
      <Services />
      <BuggyTours imageUrl="https://globaldesertadventure.com/wp-content/uploads/2025/05/result-scaled.jpg" title="dubai dune buggy" colorTitle="tours" position="28%" />
      <ExpandingCards />
      <BuggyTours imageUrl="https://globaldesertadventure.com/wp-content/uploads/2025/05/result-1-scaled.jpg" title="quad biking " colorTitle="dubai" position="18%" bgPosition="45%"/>
      <Products/>
      <KidsBuggy />
      <ScrollVideo />
      <KidsActivity />
      <SafetyInfo />
      <ImageGrid />
      <FAQ/>
      <Blog/>
     

    </div>
  );
}
