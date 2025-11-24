import Image from 'next/image'
import style from './heroSection.module.css'
import Link from 'next/link'

export default function HomepageHero(){
    return(
        <section
            className={style.heroSection}
        >
            <h1
                className={style.heroHeading}
            >
                Outeniqua Bussie
            </h1>

            <Image
                src="/assets/ocs-toyota-quantum.png" 
                alt="Outeniqua Charter Services Vehicle"
                width={1200}
                height={1000} 
                className={style.heroImage}
            />

            <h2
                className={style.secondHeading}
            >
                GEORGE → CAPE TOWN → GEORGE
            </h2>

            <p
                className={style.heroCaption}
            >
                One-day Trips: <br/> Monday, Wednesday, Friday
            </p>

            <p
                className={style.heroCaption}
            >
                Prices from R240 - R550
            </p>

            <div
                className={style.heroCTArow}
            >
                <Link
                    href={'/book-ticket'}
                    className={style.heroBookNowCTA}
                >
                    Book Now
                </Link>

                <Link
                    href={'/contact'}
                    className={style.heroGroupCTA}
                >
                    Contact Us
                </Link>
            </div>
        </section>
    )
}




{/* <h2
    className={style.secondHeading}
>
    Reliable, Affordable Charter Services between George and Cape Town
</h2>

<p
    className={style.heroCaption}
>
    Enjoy the journey with friendly driver, comfortable vehicles, and a service that feels like family
</p> */}