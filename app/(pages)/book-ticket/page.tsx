import BookingForm from "@/components/Forms/BookingForm";
import AllPageHero from "@/components/HeroSection/AllPageHero";


export default function Book(){
    return(
        <>
            <AllPageHero
                pageTitle="Book Your Seat"
                subHeading="Between George and Cape Town"
                textCaption="Secure your spot on our weekly scheduled trips between George and Cape Town. Affordable fares, professional drivers, and a smooth ride every time."
            />

            <BookingForm/>
        </>
    )
}