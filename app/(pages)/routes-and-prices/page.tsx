import BookNowEnquire from "@/components/CTA/BookNowEnquire";
import AllPageHero from "@/components/HeroSection/AllPageHero";
import PriceSection from "@/components/RoutesPricesComponents/PriceSection";
import RouteSection from "@/components/RoutesPricesComponents/Routes";

export default function RoutePrice(){
    return(
        <>
            <AllPageHero
                pageTitle="Our Routes and Prices"
                subHeading=""
                textCaption=""
            />

            <PriceSection/>

            <RouteSection/>

            <BookNowEnquire/>
        </>
    )
}