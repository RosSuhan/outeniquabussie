'use client'
import Link from 'next/link'
import style from './cta.module.css'

export default function BookNowEnquire(){
    return(
        <section
            className={style.ctaSection}
        >
            <Link
                href={'/book-ticket'}
                className={style.bookNowCTA}
            >
                Book Now
            </Link>

            <Link
                href={'/contact'}
                className={style.groupCTA}
            >
                Contact Us
            </Link>
        </section>
    )
}