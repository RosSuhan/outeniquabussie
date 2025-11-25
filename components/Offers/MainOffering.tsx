'use client'
import style from './offers.module.css'
import mapImg from '@/public/assets/map.png'
import Image from 'next/image'
import Link from 'next/link'

export default function MainOffering(){
    return(
        <section
            className={style.offeringSection}
        >
            <div
                className={style.offeringBlockOne}
            >
                <h2
                    className={style.offeringHeading}
                >
                    What We Offer
                </h2>
                <ul
                    className={style.offerList}
                >
                    <li>
                        <strong>Scheduled Routes</strong> - George &harr; Cape Town
                    </li>
                    <li>
                        <strong>Travel Days</strong> - Monday; Wednesday and Friday
                    </li>
                    <li>
                        <strong>Luggage Trailer Available</strong> - No need to pack light!
                    </li>
                    <li>
                        <strong>Child-Friendly and Accessible</strong> - We welcome families
                    </li>
                </ul>
            </div>

            <div
                className={style.offersImgBlock}
            >
                <Image 
                    src={mapImg} 
                    alt=""
                    className={style.offerImage}
                    width={1322}
                    height={704}
                />
            </div>

            <div
                className={style.offerCtaRow}
            >
                <h2
                    className={style.offerCTAHeading}
                >
                    Planning a group trip?
                </h2>
                <Link
                    href={"/book-ticket"}
                    className={style.offerCTA}
                >
                    Enquire Now
                </Link>
            </div>
        </section>
    )
}