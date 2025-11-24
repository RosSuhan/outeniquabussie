import Image from 'next/image'
import style from './homefleet.module.css'
import quantum from '@/public/assets/toyota-quantum.webp'

export default function HomepageFleet(){
    return(
        <section
            className={style.homeFleetSection}
        >
            <h2
                className={style.homeFleetHeading}
            >
                Our Fleet
            </h2>

            <p
                className={style.homeFleetText}
            >
                Travel in comfort and style with our well-maintained, safety-checked vehicles.
            </p>
            <div
                className={style.homeFleetImgRow}
            >
                <div
                    className={style.homeFleetImgBlock}
                >
                    <Image 
                        src={quantum} 
                        alt="" 
                        width={1600}
                        height={1200}
                        className={style.homeFleetImg}
                    />
                </div>
            </div>
        </section>
    )
}