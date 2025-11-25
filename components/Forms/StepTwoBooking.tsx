'use client'
import { useState, useEffect } from "react";
import style from '@/css/booking.module.css'

type BookingInfo = {
    direction: "CT" | "George";
    date: string;
    pickup: string;
    dropoff: string;
    price: number;
    availableSeats: number;
};

export default function StepTwoBookingForm() {
    const [ bookingInfo, setBookingInfo ] = useState<BookingInfo | null>(null);


    const [ paymentMethod, setPaymentMethod ] = useState<'EFT' | 'Payfast'>('EFT');
    const [idType, setIdType] = useState<'ID' | 'Passport'>('ID');
    const [passengerID, setPassengerID] = useState('');
    const [passengerName, setPassengerName] = useState('');
    const [passengerLastName, setPassengerLastName] = useState('');
    const [passengerEmail, setPassengerEmail] = useState('');
    const [passengerPhone, setPassengerPhone] = useState('');

    const [ loading, setLoading ] = useState(false)
    const [ submitMessage , setSubmitMessage ] = useState('')

    useEffect(() => {
        const stored = localStorage.getItem("bookingInfo");
        if(!stored) {
            window.location.href = '/book-ticket';
            return;
        }

        queueMicrotask(() => {
            setBookingInfo(JSON.parse(stored))
        })
    }, []);

    function formatPhoneNumber(input: string){
        let phone = input.replace(/\s+/g, "");
        if (phone.startsWith("0")) {
            phone = "+27" + phone.slice(1);
        }
        return phone;
    }

    async function handleSubmit(e: React.FormEvent) {
        if (!bookingInfo) return;
        e.preventDefault();
        setLoading(true);
        setSubmitMessage("");

        if (passengerName.trim().length < 2 || passengerLastName.trim().length < 2) {
            setSubmitMessage("Please enter a valid name.")
            setLoading(false);
            return;
        }

        const saPhoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
        const internationalRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        if (!saPhoneRegex.test(passengerPhone) && !internationalRegex.test(passengerPhone)) {
            setSubmitMessage("Invalid phone number format.");
            setLoading(false);
            return;
        }

        const formattedphone = formatPhoneNumber(passengerPhone);

        const bookingData = {
            ...bookingInfo,
            paymentMethod,
            passengerName,
            passengerLastName,
            idType,
            passengerID,
            passengerEmail,
            passengerPhone: formattedphone
        }

        try {
            const res = await fetch(`/api/make-booking`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData)
            });

            const data = await res.json();
            console.log("Booking response:", data);

            // Adjust this once we see actual script response:
            if (data.success || data.status === "success") {
                setSubmitMessage("Booking Successful! Please check your email.");
                localStorage.removeItem("bookingInfo");
            } else {
                setSubmitMessage("Booking failed. Try again.");
            }
        } catch (err) {
            console.error(err);
            setSubmitMessage("Server Error. Booking not sent.");
        }

        setLoading(false);
    }

    return (
        <section className={style.formSection}>
            <p className={style.formInfo}>
                Let&apos;s complete your booking:
            </p>
            <form 
                onSubmit={handleSubmit} 
                className={style.contactForm}>
                
                {/* payment method */}
                <div
                    className={style.contactFormFieldset}
                    style={{display:'none'}}
                >
                    <label 
                        className={style.contactFormLabel}
                    >
                        Payment Method
                    </label>
                    <select
                        className={style.contactFormInput}
                        onChange={(e) => setPaymentMethod(e.target.value as "EFT" | "Payfast")}
                        required
                    >
                        <option value="EFT">EFT</option>
                        <option value="Payfast">Online Payment</option>
                    </select>
                </div>

                {/* ID Type */}
                <div className={style.contactFormFieldset}>
                    <label className={style.contactFormLabel}>Identification Type</label>
                    <select
                        value={idType}
                        onChange={(e) => setIdType(e.target.value as "ID" | "Passport")}
                        className={style.contactFormInput}
                    >
                        <option value="ID">South African ID</option>
                        <option value="Passport">Passport</option>
                    </select>
                </div>

                {/* ID Number */}
                <div className={style.contactFormFieldset}>
                    <label className={style.contactFormLabel}>
                        {idType === "ID" ? "ID Number" : "Passport Number"}
                    </label>
                    <input
                        type="text"
                        value={passengerID}
                        onChange={(e) => setPassengerID(e.target.value)}
                        className={style.contactFormInput}
                    />
                </div>

                {/* Name */}
                <div className={style.contactFormFieldset}>
                    <label className={style.contactFormLabel}>Name</label>
                    <input
                        type="text"
                        value={passengerName}
                        onChange={(e) => setPassengerName(e.target.value)}
                        className={style.contactFormInput}
                    />
                </div>

                {/* Surname */}
                <div className={style.contactFormFieldset}>
                    <label className={style.contactFormLabel}>Surname</label>
                    <input
                        type="text"
                        value={passengerLastName}
                        onChange={(e) => setPassengerLastName(e.target.value)}
                        className={style.contactFormInput}
                    />
                </div>

                {/* Email */}
                <div className={style.contactFormFieldset}>
                    <label className={style.contactFormLabel}>Email</label>
                    <input
                        type="email"
                        value={passengerEmail}
                        onChange={(e) => setPassengerEmail(e.target.value)}
                        className={style.contactFormInput}
                    />
                </div>

                {/* Phone */}
                <div className={style.contactFormFieldset}>
                    <label className={style.contactFormLabel}>Phone Number</label>
                    <input
                        type="tel"
                        value={passengerPhone}
                        onChange={(e) => setPassengerPhone(e.target.value)}
                        className={style.contactFormInput}
                        placeholder="e.g. 0821234567 or +27821234567"
                    />
                </div>

                <div className={style.contactFormSubmitRow}>
                    <button
                        type="submit"
                        disabled={loading}
                        className={style.contactFormSubmit}
                    >
                        {loading ? "Submitting..." : "Book Now"}
                    </button>
                </div>

                {submitMessage && <p>{submitMessage}</p>}
            </form>
        </section>
    );
}
