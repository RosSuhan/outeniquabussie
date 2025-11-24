import style from './pageheroSection.module.css'

export default function PageHero(){ 
    return(
        <>
            <section
                className={style.topSection}
            >
                <h1
                    className={style.heroMainHeading}
                >
                    About us
                </h1>
                <h2
                    className={style.heroSecondHeading}
                >Driven by Purpose, Powered by People</h2>
            </section>
            <section
                className={style.contentSection}
            >
                <p
                    className={style.contentSectionInfo}
                >
                    Outeniqua Charter Services was founded with a clear goal — to create consistent, affordable travel options between George and Cape Town, while also supporting experienced local drivers year-round. Many of our drivers come from the tourism industry, and when the tourist season slows down, we keep them rolling — ensuring they still earn and do what they love.
                </p>

                <p
                    className={style.contentSectionInfo}
                >
                    We're more than a business — we're a team that feels like family. Even though we may not share the same last name, every member of our team shares the same passion: delivering a safe, enjoyable travel experience for every passenger.
                </p>
            </section>
        </>
    )
}