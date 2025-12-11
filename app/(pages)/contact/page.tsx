'use client'
import GroupBookingForm from "@/components/Forms/GroupBookingForm";
import AllPageHero from "@/components/HeroSection/AllPageHero";
import { BaselineMail } from "@/components/Icons/MailIcon";
import { WhatsappColorIcon } from "@/components/Icons/WhatsappColorIcon";
import style from '@/css/contact.module.css'


export default function Contact(){
    return(
        <>
            <AllPageHero
                pageTitle="Contact Us"
                subHeading=""
                textCaption=""
            />

            <section
                className={style.contactSection}
            >
                <a
                    href="https://wa.me/607268993"
                    className={style.contactBlockWhatsApp}
                >
                    <WhatsappColorIcon
                        width="2em"
                        height="2em"
                    />
                    <span
                        className={style.contactButtonText}
                    >
                        Via WhatsApp
                    </span>
                </a>

                <a
                    href="mailto:outeniquacharter@gmail.com"
                    // href="mailto:bookings@outeniquacharterservices.co.za"
                    className={style.contactBlockMail}
                >
                    <BaselineMail
                        width="2em"
                        height="2em"
                    />
                    <span
                        className={style.contactButtonText}
                    >
                        Via Email
                    </span>
                </a>
            </section>

            <GroupBookingForm/>
        </>
    )
}