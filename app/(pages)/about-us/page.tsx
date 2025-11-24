import style from '@/css/about.module.css'
import AllPageHero from "@/components/HeroSection/AllPageHero";
import BookNowEnquire from "@/components/CTA/BookNowEnquire";
import valueImage from '@/public/assets/toyota-quantum.webp'
import Image from 'next/image';

export default function AboutUs(){
    return(
        <>
            <AllPageHero
                pageTitle={"About Us"}
                subHeading={"Driven by Purpose, Powered by People"}
                textCaption={''}
            />

            <section
                className={style.aboutSection}
            >
                <p
                    className={style.contentSectionInfo}
                >
                    Outeniqua Charter Services was founded with a clear goal — to create consistent, affordable travel options between George and Cape Town, while also supporting experienced local drivers year-round. Many of our drivers come from the tourism industry, and when the tourist season slows down, we keep them rolling — ensuring they still earn and do what they love.
                </p>

                <p
                    className={style.contentSectionInfo}
                >
                    We&apos;re more than a business — we&apos;re a team that feels like family. Even though we may not share the same last name, every member of our team shares the same passion: delivering a safe, enjoyable travel experience for every passenger.
                </p>
            </section>

            <section
                className={style.valuesSection}
            >
                <div 
                    className={style.valuesLeftBlock}
                >
                    <h2
                        className={style.valuesHeading}
                    >
                        Our Values
                    </h2>
                    <ul
                        className={style.valuesList}
                    >
                        <li>
                            <strong>Teamwork</strong> - We support each other like family
                        </li>
                        <li>
                            <strong>Authenticity</strong> - No gimmics, just real, dependable service
                        </li>
                        <li>
                            <strong>Excellence</strong> - From cleanliness to punctuality, we aim high
                        </li>
                        <li>
                            <strong>Fun and Friendly</strong> - Travel should be a joy, not a chore
                        </li>
                    </ul>
                </div>
                <p
                    className={style.valuesParagraph}
                >
                    We offer child-friendly trips, access for people with disabilities, and even guided tours for group bookings. Whether you&apos;re traveling for business, sport, or leisure — we&apos;re here to make your journey smooth, safe, and unforgettable.
                </p>

                <div
                    className={style.valueImageBlock}
                >
                    <Image 
                        src={valueImage} 
                        alt="" 
                        className={style.valueImg}
                        width={1600}
                        height={1200}
                    />
                </div>
            </section>

            <BookNowEnquire/>
        </>
    )
}