'use client'
import { BaselineMail } from '../Icons/MailIcon'
import { Phone } from '../Icons/Phone'
import style from './header.module.css'
import headerLogo from '@/public/assets/outeniqua-charter-services.webp'
import { useState } from 'react'
import { clsx } from "clsx"
import { menuOptions } from '../../lib/menuOptions'
import Link from 'next/link'
import Image from 'next/image'


export default function Header(){
    const [ mobileOpen, setMobileOpen ] = useState(false)
    return (
        <header
            className={style.header}
        >
            <div
                className={style.mainheader}
            >
                <Link href="/"
                    className={style.headerLogoBlock}
                >
                    <Image
                        src={headerLogo} 
                        alt="" 
                        className={style.headerLogo}
                        width={1800}
                        height={600}
                    />
                </Link>

                <div
                    className={style.NavBlock}
                >
                    <nav
                        className={clsx(style.nav, { [style.mobileNav]: mobileOpen })}
                    >
                        {menuOptions.map(({path, name},index)=>(
                            <Link
                                key={index}
                                href={path}
                                className={style.navLink}
                                onClick={() => setMobileOpen(false)}
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>

                    <button
                        className={style.mobileButton}
                        onClick={() => {
                            setMobileOpen(!mobileOpen)
                            console.log("menu clicked")
                        }}
                    >
                        Menu
                    </button>
                </div>
                <Link
                    href={'/book-ticket'}
                    className={style.bookNowBtn}
                >
                    Book Now
                </Link>
            </div>
            
            <div
                className={style.headerTopRow}
            >
                <span
                    className={style.headerTopLink}
                >
                    Office Hours Mon - Fri 6am - 8pm
                </span>
                <a href="tel:+27607268993"
                    className={style.headerTopLink}
                >
                    <Phone 
                        className={style.headerTopLinkIcon}
                    />
                    060 726 8993
                </a>
                <a 
                    href='mailto:outeniquacharter@gmail.com'
                    // href="mailto:bookings@outeniquacharterservices.co.za"
                    className={style.headerTopLink}
                >
                    <BaselineMail
                        className={style.headerTopLinkIcon}
                    />
                    {/* bookings@outeniquacharterservices.co.za */}
                    outeniquacharter@gmail.com
                </a>
            </div>
            
        </header>
    )
}