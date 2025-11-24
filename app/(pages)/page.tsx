import BookNowEnquire from "@/components/CTA/BookNowEnquire";
import HomepageFleet from "@/components/Fleet/HomepageFleet";
import HomepageHero from "@/components/HeroSection/HomePageHero";
import MainOffering from "@/components/Offers/MainOffering";
import PriceSection from "@/components/RoutesPricesComponents/PriceSection";
import RouteSection from "@/components/RoutesPricesComponents/Routes";
import HomepageSchedule from "@/components/Schedule/HomepageSchedule";


export default function Home() {
  return (
    <main>
      <HomepageHero/>

      <HomepageSchedule/>

      <MainOffering/>

      <RouteSection/>

      <PriceSection/>

      <HomepageFleet/>

      <BookNowEnquire/>
    </main>
  );
}
