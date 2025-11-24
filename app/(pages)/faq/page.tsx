// import FaqComponent from "../Components/FAQ";
import FaqComponent from "@/components/FAQ";
import AllPageHero from "@/components/HeroSection/AllPageHero";


export default function FAQ(){
    return(
        <>
            <AllPageHero
                pageTitle="Frequently Asked Questions:"
                subHeading=""
                textCaption=""
            />

            <FaqComponent/>
        </>
    )
}