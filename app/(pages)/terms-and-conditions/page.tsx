import style from '@/css/terms.module.css'
import { termsAndConditionPoints } from '@/lib/termsConditions'


export default function TermsAndConditions(){
    return(
        <article
            className={style.tcBlock}
        >
            <h1
                className={style.tcPageTitle}
            >
                Outeniqua Charter Service - Terms and Conditions
            </h1>
            {termsAndConditionPoints.map(({heading,info}, index) => (
                <div
                    key={index}
                    className={style.tcRow}
                >
                    <h2
                        className={style.tcHeading}
                    >
                        {heading}
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html:info}} 
                        className={style.tcInfo}/>
                </div>
            ))}
        </article>
    )
}