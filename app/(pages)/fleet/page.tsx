
import BookNowEnquire from "@/components/CTA/BookNowEnquire";
import FleetContent from "@/components/Fleet/FleetContent";
import AllPageHero from "@/components/HeroSection/AllPageHero";



export default function Fleet(){
    return(
        <>

            <AllPageHero
                pageTitle={"Our Fleet"}
                subHeading={"Comfort, Safety, and Peace of Mind"}
                textCaption={""}
            />

            <FleetContent/>

            <BookNowEnquire/>
        </>
    )
}