'use client'
import { useState, useEffect } from "react";
import style from '@/css/booking.module.css'
import { routes } from "@/lib/routes";

export default function BookingForm() {
    const [direction, setDirection] = useState<'CT' | 'George'>('CT');
    const [date, setDate] = useState('');
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [ paymentMethod, setPaymentMethod ] = useState<'EFT' | 'Payfast'>('EFT');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    const [passengerName, setPassengerName] = useState('');
    const [passengerLastName, setPassengerLastName] = useState('');
    const [idType, setIdType] = useState<'ID' | 'Passport'>('ID');
    const [passengerID, setPassengerID] = useState('');
    const [passengerEmail, setPassengerEmail] = useState('');
    const [passengerPhone, setPassengerPhone] = useState('');

    // NEW state values
    const [price, setPrice] = useState<number | null>(null);
    const [availableSeats, setAvailableSeats] = useState<number | null>(null);


    function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedDate = new Date(e.target.value);
        const day = selectedDate.getDay();

        if (day !== 1 && day !== 5) {
            setMessage("Only Monday and Friday are allowed.");
            setDate('');
        } else {
            setMessage('');
            setDate(e.target.value);
        }
    }

    // Format phone number
    function formatPhoneNumber(input: string) {
        let phone = input.replace(/\s+/g, "");
        if (phone.startsWith("0")) {
            phone = "+27" + phone.slice(1);
        }
        return phone;
    }

    /**
     * -----------------------------
     * GET PRICE & GET AVAILABILITY
     * -----------------------------
     */
    useEffect(() => {
        if (!pickup || !dropoff) return;
    
        const fetchPrice = async () => {
            try {
                const res = await fetch(`api/get-price?pickup=${pickup}&dropoff=${dropoff}`);
                const data = await res.json();
                setPrice(data.price);
            } catch (err) {
                console.error(err);
            }
        };
    
        fetchPrice();
    }, [pickup, dropoff]);

    useEffect(() => {
        if (!date || !direction) return;

        const fetchAvailability = async () => {
            try {
                const res = await fetch(`/api/check-availability?date=${date}&direction=${direction}`);
                const data = await res.json();

                if (data.availableSeats !== undefined) {
                    setAvailableSeats(data.availableSeats);
                }
            } catch (err) {
                console.error("Availability error:", err)
            }
        };
        fetchAvailability();
    }, [date, direction])


    /**
     * -------------
     * SUBMIT BOOKING
     * -------------
     */
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitMessage("");
        setLoading(true);

        if (!date || !direction || !pickup || !dropoff) {
            setMessage("Please fill in all fields.");
            setLoading(false);
            return;
        }

        if (availableSeats === 0) {
            setSubmitMessage("No seats available for this trip.");
            setLoading(false);
            return;
        }

        if (!price) {
            setSubmitMessage("⚠ Unable to fetch price.");
            setLoading(false);
            return;
        }

        if (availableSeats === 0) {
            setSubmitMessage("❌ No seats available for this trip.");
            setLoading(false);
            return;
        }

        const saPhoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
        const internationalRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        if (!saPhoneRegex.test(passengerPhone) && !internationalRegex.test(passengerPhone)) {
            setMessage("Invalid phone number format.");
            setLoading(false);
            return;
        }

        const formattedPhone = formatPhoneNumber(passengerPhone);

        const bookingData = {
            direction,
            date,
            pickup,
            dropoff,
            price,
            passengerName,
            passengerLastName,
            idType,
            passengerID,
            passengerEmail,
            passengerPhone: formattedPhone,
            paymentMethod
        };

        try {
            const res = await fetch(`/api/make-booking`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData)
            });

            const data = await res.json();

            if (data.success) {
                setSubmitMessage("Booking successful, Please check your email for confirmation.");
            } else {
                setSubmitMessage("Booking failed. Please try again.")
            }
        } catch (err) {
            console.error("Booking submit error:", err);
            setSubmitMessage("Server error. Try again later.")
        }

        setLoading(false);
    } 

    /**
     * RENDER UI
     */
    return (
        <section className={style.formSection}>
            <p className={style.formInfo}>
                Easily book your seat by filling in the form. All fields are required.
            </p>

            <form onSubmit={handleSubmit} className={style.contactForm}>

                {/* Direction */}
                <div className={style.contactFormFieldset}>
                    <label className={style.contactFormLabel}>Direction</label>
                    <select
                        value={direction}
                        onChange={(e) => setDirection(e.target.value as "CT" | "George")}
                        className={style.contactFormInput}
                    >
                        <option value="CT">George → Cape Town</option>
                        <option value="George">Cape Town → George</option>
                    </select>
                </div>

                {/* Date */}
                <div className={style.contactFormFieldset}>
                    <label className={style.contactFormLabel}>Travel Date</label>
                    <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={date}
                        onChange={handleDateChange}
                        className={style.contactFormInput}
                    />
                </div>

                <div
                    className={style.bookingPriceAvailability}
                >
                    {message && 
                        <p
                            className={style.bookingPriceAvailabilityText}
                        >
                            {message}
                        </p>
                    }

                    {availableSeats !== null && (
                        <p
                            className={style.bookingPriceAvailabilityText}
                        >
                            Seats Available: <strong>{availableSeats}</strong>
                        </p>
                    )}
                </div>
                

                {/* Pickup */}
                <div className={style.contactFormFieldset}>
                    <label className={style.contactFormLabel}>Pickup Location</label>
                    <select
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className={style.contactFormInput}
                    >
                        <option value="">Select Pickup Location</option>

                        {(direction === 'CT' ? routes : [...routes].reverse()).map((route, i) => (
                            <option key={i} value={route.town}>
                                {route.town} - {route.locationName}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Dropoff */}
                <div className={style.contactFormFieldset}>
                    <label className={style.contactFormLabel}>Dropoff Location</label>
                    <select
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        className={style.contactFormInput}
                    >
                        <option value="">Select Dropoff Location</option>

                        {(direction === 'CT' ? routes : [...routes].reverse()).map((route, i) => (
                            <option key={i} value={route.town}>
                                {route.town} - {route.locationName}
                            </option>
                        ))}
                    </select>
                </div>

                {price !== null && (
                    <p
                        className={style.bookingPriceAvailabilityText}
                    >
                        Price: <strong>R {price}</strong>
                    </p>
                )}

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
