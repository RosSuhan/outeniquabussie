'use client'
import Link from 'next/link'
import style from './footer.module.css'
import { BaselineMail } from '../Icons/MailIcon'
import { Phone } from '../Icons/Phone'
import { menuOptions } from '../../lib/menuOptions'

import Logo from '@/public/assets/outeniqua-charter-services.webp'
import Image from 'next/image'

export default function Footer(){
    return (
        <footer
            className={style.footer}
        >
            <Link
                href={"/"}
                className={style.footerLogoLink}
            >
                <Image 
                    src={Logo} 
                    alt="Outeniqua Charter Services Logo"
                    width={400}
                    height={120} 
                    className={style.footerLogo}
                />
            </Link>

            <div
                className={style.footerNavBlock}
            >
                {menuOptions.map(({path, name}, index) => (
                    <Link
                        key={index}
                        href={path}
                        className={style.footerNavLinks}
                    >
                        {name}
                    </Link>
                ))}
            </div>

            <div
                className={style.footerContactBlock}
            >
                <a href="tel:+27607268993"
                    className={style.footerContactLink}
                >
                    <Phone/>
                    060 726 8993
                </a>

                <a href="mailto:bookings@outeniquacharterservices.co.za"
                    className={style.footerContactLink}
                >
                    <BaselineMail/>
                    bookings@outeniquacharterservices.co.za
                </a>
            </div>
            <div
                className={style.bottomRow}
            >
                Outeniqua Charter Services - All Rights Reserved &copy; {new Date().getFullYear()}
                <Link
                    href={'/terms-and-conditions'}
                    className={style.tpLinks}
                >
                    Terms and Conditions
                </Link>

                <Link
                    href={'/privacy-policy'}
                    className={style.tpLinks}
                >
                    Privacy Policy
                </Link>
            </div>
        </footer>
    )
}