import style from './schedule.module.css'

export default function HomepageSchedule(){
    return(
        <section
            className={style.scheduleBlock}
        >
            <h2
                className={style.scheduleHeading}
            >
                Reliable, Affordable Charter Services between George and Cape Town
            </h2>
            <p
                className={style.scheduleParagraph}
            >
                Enjoy the journey with friendly driver, comfortable vehicles, and a service that feels like family
            </p>
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

// Old wording of this block
{/* <h2
    className={style.scheduleHeading}
>
    Weekly Scheduled Trips
</h2>
<p
    className={style.scheduleParagraph}
>
    Travel with ease between George and Cape Town, including stops along the route, Whether you're visiting family, exploring the coast, or heading to a sports event, we've got you covered with reliable weekly trips.
</p> */}