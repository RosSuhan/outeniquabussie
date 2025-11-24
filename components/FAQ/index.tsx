"use client"
import { useState } from 'react'
import { ChevronDown } from '@/components/Icons/ChevronDown'
import style from './faq.module.css'
import { clsx } from 'clsx'
import { ChevronUp12 } from '@/components/Icons/ChevronUp'

export default function FaqComponent(){
    const questionAnswer = [
        {
            question: 'What areas do you operate in?',
            answer: `<p>Outeniqua Charter Services currently offers scheduled long-distance transport between George and Cape Town. For times see our <a href="/routes-and-prices">schedules</a>.</p>`
        },{
            question: 'What types of vehicles are used?',
            answer: `<p>We operate two comfortable and reliable vehicles:</p>
                    <ul>
                        <li>Toyota Quantum - For scheduled trips</li>
                        <li>Hyundai H1 - for group bookings</li>
                    </ul>
                    <p>Each vehicle is driven by a licensed professional with a PDP (Professional Driving Permit).</p>`
        },{
            question: 'Are your services accessible to people with disabilities?',
            answer: `<p>Yes. While our vehicles do not have wheelchair lifts, our drivers are trained to assist passengers with mobility needs and ensure they are seated safely and comfortably.</p>`
        },{
            question: 'How do I make a booking?',
            answer: `<p>Bookings can be made via:</p>
                    <ul>
                        <li><a href='/book-ticket'>Online Booking Form</a></li>
                        <li><a href='tel:+72'>Phone: 012 345 6789</a></li>
                        <li><a href='mailto:bookings@outeniquacharterservices.co.za'>Email: bookings@outeniquacharterservices.co.za</a></li>
                    </ul>
                    <p>We require bookings to be made at least 2 days in advance. A full upfront EFT payment is needed to confirm your seat.</p>`
        },{
            question: 'Can I book a seat last minute?',
            answer: `<p>Yes, we do our best to accommodate last-minute bookings — provided there is still space available on the vehicle.</p>`
        },{
            question: 'Do you operate on a fixed schedule?',
            answer: `<p>Yes. All trips between George and Cape Town operates on pre-set hours. <a href="/routes-and-prices">See schedule for all departure times.</a></p>`
        },
        // {
        //     question: 'What is your cancellation or refund policy?',
        //     answer: `<p>Add this answer when you have get this back from client.</p>`
        // },
        {
            question: 'Are any COVID-19 safety measures still in place?',
            answer: `<p>At present, there are no mandatory COVID-19 protocols. However, we continue to maintain high hygiene standards for your peace of mind.</p>`
        },{
            question: 'Do you offer private charters, tours, or special event transport?',
            answer: `<p>We are currently focused on scheduled charters. If you're looking for a private booking, please contact us directly to discuss availability.</p>`
        }
    ]

    const [answerOpen, setAnswerOpen] = useState<number[]>([])

    const toggleAnswer = (idx: number) => {
        setAnswerOpen(prev =>
        prev.includes(idx)
            ? prev.filter(i => i !== idx)
            : [...prev, idx]
        )
    }

    return (
        <article className={style.faqBlock}>
            {questionAnswer.map(({ question, answer }, index) => {
            const isOpen = answerOpen.includes(index)
            const contentId = `faq-answer-${index}`

            return (
                <div className={style.faqRow} key={index}>
                    {/* Accessible button for the question */}
                    <button
                        className={style.faqQuestion}
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                        onClick={() => toggleAnswer(index)}
                    >
                        {question}

                        <ChevronDown
                            className={clsx(style.faqChevIcon, isOpen && style.hiddenIcon)}
                        />

                        <ChevronUp12
                            className={clsx(style.faqChevIcon, !isOpen && style.hiddenIcon)}
                        />
                    </button>

                    {/* Animated answer container */}
                    <div
                        id={contentId}
                        role="region"
                        aria-hidden={!isOpen}
                        className={clsx(style.answerWrapper, !isOpen && style.hidden)}
                    >
                        <div
                            className={style.answerInner}
                            dangerouslySetInnerHTML={{ __html: answer || '' }}
                        />
                    </div>
                </div>
                )
            })}
        </article>
    )
    }