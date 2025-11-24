import Image from 'next/image'
import style from './fleet.module.css'
import { vehicle } from '@/lib/vehicles'


export default function FleetContent(){
    return(
        <section
            className={style.fleetSection}
        >
            <p
                className={style.fleetSectionIntro}
            >
                Our vehicles are selected to provide a smooth and enjoyable ride, with enough room for passengers and luggage alike. We currently operate:
            </p>
            <div
                className={style.fleetImageRow}
            >
                {vehicle.map(({brand, img, seats, great, features}, index)=> {
                    return(
                        <div
                            className={style.fleetImageBlock}
                            key={index}
                        >
                            <Image
                                src={img} 
                                alt="" 
                                className={style.fleetImg}
                                width={1600}
                                height={1200}
                            />

                            <h3
                                className={style.fleetCarName}
                            >
                                {brand}
                            </h3>

                            <ul
                                className={style.fleetCarFact}
                            >
                                <li>
                                    <strong>Seats: </strong> 
                                    {seats} passengers
                                </li>
                                <li>
                                    <strong>Great for: </strong> 
                                    {great}
                                </li>
                                <li>
                                    <strong>Features: </strong> 
                                    {features}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div
                className={style.fleetCarTripBlock}
            >
                <h2
                    className={style.fleetCarTripHeading}
                >
                    All Trips Include:
                </h2>
                <ul
                    className={style.fleetCarTripList}
                >
                    <li>Professional, licensed drivers with years of experience</li>
                    <li>A safety check before every trip</li>
                    <li>Option to include a luggage trailer</li>
                    <li>Flexible group bookings with vehicles choice when requested</li>
                </ul>
            </div>
        </section>
    )
}