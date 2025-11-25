'use client'
import style from '@/css/privacy.module.css'
import { privacyPolicy } from '@/lib/privacyPolicy'

export default function PrivacyPolicyContent(){
    return(
        <section
            className={style.privacyPolicySection}
        >
            <h1
                className={style.privacyHeading}
            >
                Privacy Policy:
            </h1>
            <span
                className={style.privacyDate}
            >
                <strong>Effective Date:</strong> July 2025
            </span>

            <div
                className={style.privacyContent}
            >
                {privacyPolicy.map(({heading, info}, index) => (
                    <div
                        key={index}
                    >
                        <h2>
                            {heading}
                        </h2>
                        <div dangerouslySetInnerHTML={{ __html: info}}/>
                    </div>
                ))}
            </div>
            <h2
                className={style.privacySecondHeading}
            >
                Contact Us
            </h2>
            <p
                className={style.privacyParagraph}
            >
                If you have any questions about this Privacy Policy or how your data is handled, please contact us at:
            </p>
            <ul
                className={style.privacyParagraph}
            >
                <li>
                    <a href="tel:+27607268993">060 726 8993</a>
                </li>
                <li>
                    <a href="mailto:bookings@outeniquacharterservices.co.za">bookings@outeniquacharterservices.co.za</a>
                </li>
            </ul>
        </section>
    )
}