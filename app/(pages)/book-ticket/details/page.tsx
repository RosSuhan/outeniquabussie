'use client'

import StepTwoBookingForm from "@/components/Forms/StepTwoBooking"
import AllPageHero from "@/components/HeroSection/AllPageHero"

export default function PassengerBooking(){
    return(
        <>
            <AllPageHero
                pageTitle="page two for booking"
                subHeading=""
                textCaption=""
            />

            <StepTwoBookingForm/>
        </>
    )
}