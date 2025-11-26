import style from './values.module.css'
import valueImage from '@/public/assets/toyota-quantum.webp'
import Image from 'next/image'

export default function Values(){
    return(
        <section
            className={style.valuesSection}
        >
            <div
                className={style.valueContentBlock}
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
                        <strong>Teamword</strong> - We support each other like family
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
            <div
                className={style.valueImageBlock}
            >
                <Image 
                    src={valueImage} 
                    alt=""
                    width={1600}
                    height={1200}
                    className={style.valueImg}
                />
            </div>
            <p
                className={style.valuesParagraph}
            >
                We offer child-friendly trips, access for people with disabilities, and even guided tours for group bookings. Whether you&apos;re traveling for business, sport, or leisure — we&apos;re here to make your journey smooth, safe, and unforgettable.
            </p>
        </section>
    )
}