import style from './pageheroSection.module.css';

type AllPageHeroProps = {
    pageTitle: string;
    subHeading: string;
    textCaption: string;
}

export default function AllPageHero({pageTitle, subHeading, textCaption}: AllPageHeroProps){ 
    return(
        <>
            <section
                className={style.topSection}
            >
                <h1
                    className={style.heroMainHeading}
                >
                    {pageTitle}
                </h1>
                <h2
                    className={style.heroSecondHeading}
                >{subHeading}</h2>
                <p
                    className={style.heroCaption}
                >
                    {textCaption}
                </p>
            </section>
        </>
    )
}