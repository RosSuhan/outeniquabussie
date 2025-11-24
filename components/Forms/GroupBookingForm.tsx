'use client'
import { useState } from 'react'
import style from './../../css/booking.module.css'


export default function GroupBookingForm(){
    const [ passengerName, setPassengerName ] = useState('');
    const [ passengerLastName, setPassengerLastName ] = useState('');
    const [ passengerEmail, setPassengerEmail ] = useState('');
    const [ passengerPhone, setPassengerPhone ] = useState('');
    const [ passengerSubject, setPassengerSubject ] = useState('');
    const [ passengerMessage, setPassengerMessage ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ message, setMessage ] = useState('')

    function formatPhoneNumber(input: string){
        let phone = input.replace(/\s+/g, "");

        if (phone.startsWith("0")) {
            phone = "+27" + phone.slice(1);
        }

        return phone;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setPassengerMessage('');

        if(!passengerName || !passengerLastName || !passengerEmail || !passengerPhone || !passengerSubject || !passengerMessage) {
            setMessage("Please fill in all required fields before submitting");
            return
        }

        if (passengerName.trim().length < 2) {
            setMessage("Please enter a valid name.");
            return;
        }

        if (passengerLastName.trim().length < 2) {
            setMessage("Please enter a valid last name.");
            return;
        }

        const saPhoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
        const internationalRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        if (!saPhoneRegex.test(passengerPhone) && !internationalRegex.test(passengerPhone)) {
            setMessage("Please enter a valid phone number (SA or International format).");
            return;
        }

        const formattedphone = formatPhoneNumber(passengerPhone)

        const messageData = {
            passengerName,
            passengerLastName,
            passengerEmail,
            passengerPhone: formattedphone,
            passengerSubject,
            passengerMessage
        }

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbxyIZs8-UOo68Db7QOv3Vw7bIQT77nqbWrjU9yL8-iJxptbeY2SRL94qhfUWssyMpbh/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(messageData),
                }
            );

            setMessage(`Message has been sent. We will respond as soon as possible.`);

        } catch (err) {
            console.error("Message sending failed:", err);
            setMessage(`Network error. Please try again.`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section
            className={style.formSection}
        >
            <p
                className={style.formInfo}
            >
                Simply fill in the form below. We try and respond to all queries and comments withing 24 hours.
            </p>

            <form 
                onSubmit={handleSubmit}
                className={style.contactForm}
            >
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        htmlFor=""
                        className={style.contactUsFormLabel}
                    >
                        Name
                    </label>
                    <input 
                        type="text" 
                        className={style.contactFormLongInput}
                        placeholder="First Name"
                        value={passengerName}
                        onChange={(e) => setPassengerName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        className={style.contactFormLongInput}
                        placeholder="Last Name"
                        value={passengerLastName}
                        onChange={(e) => setPassengerLastName(e.target.value)}
                    />
                </div>
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        htmlFor=""
                        className={style.contactUsFormLabel}
                    >
                        Contact
                    </label>
                    <input 
                        type="email" 
                        className={style.contactFormLongInput}
                        placeholder="Email"
                        value={passengerEmail}
                        onChange={(e) => setPassengerEmail(e.target.value)}
                    />
                    <input 
                        type="tel" 
                        className={style.contactFormLongInput}
                        placeholder="Contact Number"
                        value={passengerPhone}
                        onChange={(e) => setPassengerPhone(e.target.value)}
                    />
                </div>
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        htmlFor=""
                        className={style.contactUsFormLabel}
                    >
                        Subject
                    </label>
                    <input 
                        type="text" 
                        className={style.contactFormLongInput}
                        placeholder="Subject of Message"
                        value={passengerSubject}
                        onChange={(e) => setPassengerSubject(e.target.value)}
                    />
                </div>
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        htmlFor=""
                        className={style.contactUsFormLabel}
                    >
                        Message
                    </label>
                    <textarea
                        className={style.contactFormLongInput}
                        rows={4}
                        value={passengerMessage}
                        onChange={(e) => setPassengerMessage(e.target.value)}
                    />
                </div>
                <div
                    className={style.contactFormSubmitRow}
                >
                    <button
                        type='submit'
                        disabled={loading}
                        className={style.contactFormSubmit}
                    >
                        {loading ? "Submitting..." : "Message Sent"}
                    </button>
                    {message && (
                        <p>{message}</p>
                    )}
                </div>
            </form>
        </section>
    )
}