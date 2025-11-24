import { useState, useEffect } from "react";
import style from './../../css/booking.module.css'
import { routes } from "../../lib/routes";

export default function BookingForm(){
    const [ direction, setDirection ] = useState<'CT' | 'George'>('CT')
    const [ date, setDate ] = useState('');
    const [ availableSeats, setAvailableSeats ] = useState<number | null>(null);
    const [ pickup, setPickup ] = useState('');
    const [ dropoff, setDropoff ] = useState('');
    const [ paymentMethod, setPaymentMethod ] = useState<'EFT' | 'Payfast'>('EFT');
    const [ loading, setLoading ] = useState(false);
    const [ message, setMessage ] = useState('');
    const [ submitMessage, setSubmitMessage ] = useState('')
    const [ passengerName, setPassengerName ] = useState('');
    const [ passengerLastName, setPassengerLastName ] = useState('');
    const [ idType, setIdType ] = useState<'ID' | 'Passport'>('ID')
    const [ passengerID, setPassengerID ] = useState('')
    const [ passengerEmail, setPassengerEmail ] = useState('')
    const [ passengerPhone, setPassengerPhone ] = useState('')

    const GOOGLE_URL = "https://script.google.com/macros/s/AKfycbxltFYL07Ruj7M_9g4CE2NqH6-HBjWCbG2i42E6lOE8Ynh04K4Sz3yXoG3fLdSPnrk/exec"

// https://script.google.com/macros/s/AKfycbxltFYL07Ruj7M_9g4CE2NqH6-HBjWCbG2i42E6lOE8Ynh04K4Sz3yXoG3fLdSPnrk/exec?date=2025-11-10&direction=CT



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

    function formatPhoneNumber(input: string){
        let phone = input.replace(/\s+/g, "");
        if (phone.startsWith("0")) {
            phone = "+27" + phone.slice(1);
        }
        return phone;
    }

    async function checkAvailability(date: string, direction: string) {
        setMessage("Checking availability...");

        try {
            const res = await fetch(
                `${GOOGLE_URL}?check=1&date=${encodeURIComponent(date)}&direction=${encodeURIComponent(direction)}`
            );

            const result = await res.json();

            if (result.status === "full") {
                setAvailableSeats(0);
                setMessage("❌ Sorry, this trip is fully booked.");
            } else {
                setAvailableSeats(result.seatsAvailable);
                setMessage(`✅ Seats available: ${result.seatsAvailable}`);
            }

        } catch {
            setMessage("⚠ Could not connect to server.");
        }
    }

    // ✅ RUN AVAILABILITY CHECK when date + direction change
    useEffect(() => {
        if (date && direction) {
            checkAvailability(date, direction);
        }
    }, [date, direction]);


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setSubmitMessage("");

        if (!date || !direction || !pickup || !dropoff || !paymentMethod) {
            setMessage("Please fill in all required fields.");
            setLoading(false);
            return;
        }

        // ✅ Don't allow booking if no seats
        if (availableSeats === 0) {
            setMessage("❌ Sorry, this trip is fully booked.");
            setLoading(false);
            return;
        }

        if (passengerName.trim().length < 2 || passengerLastName.trim().length < 2) {
            setMessage("Please enter a valid name.");
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

        const formattedphone = formatPhoneNumber(passengerPhone);

        const bookingData = {
            direction, date, pickup, dropoff, paymentMethod,
            passengerName, passengerLastName, idType, passengerID,
            passengerEmail, passengerPhone: formattedphone,
        };

        try {
            const response = await fetch(GOOGLE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData),
            });

            const result = await response.json();

            if(result.status === 'success') {
                setMessage("✅ Booking successful! Confirmation email sent.");
            } else{
                setMessage('Something went wrong. Try again.')
            } 
        } catch (err) {
            console.error("Booking failed:", err);
            setMessage("⚠ Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return(
        <section
            className={style.formSection}
        >
            <p
                className={style.formInfo}
            >
                Easily book your seat by filling in the form. All fields are required.
            </p>
            <form
                onSubmit={handleSubmit}
                className={style.contactForm}
            >
                
                {/* Direction */}
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        htmlFor=""
                        className={style.contactFormLabel}
                    >
                        Direction
                    </label>
                    <select 
                        value={direction}
                        onChange={(e) => setDirection(e.target.value as "CT" | "George")}
                        className={style.contactFormInput}
                        required
                    >
                        <option value="CT">George → Cape Town</option>
                        <option value="George">Cape Town → George</option>
                    </select>
                </div>

                {/* Date */}
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        className={style.contactFormLabel}
                    >
                        Travel Date
                    </label>
                    <input 
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={date}
                        onChange={handleDateChange}
                        className={style.contactFormInput}
                        required
                    />
                </div>

                {/* ✅ Availability message */}
                {message && <p>{message}</p>}

                {/* Pickup */}
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        className={style.contactFormLabel}
                    >
                        Pickup Location
                    </label>
                    <select 
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className={style.contactFormInput}
                        required
                    >
                        <option value="">Select Pickup Location</option>
                        {(direction === 'CT' ? routes : [...routes].reverse()).map((route, i) =>{
                            const directionData = route.directionTo.find(d => d.destination === direction);
                            if(!directionData) return null;

                            return (
                                <option 
                                    key={i}
                                    value={route.town}
                                >
                                    {route.town} - {route.locationName}
                                </option>
                            )
                        })}
                    </select>
                </div>

                {/* Dropoff */}
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        className={style.contactFormLabel}
                    >
                        Dropoff Location
                    </label>
                    <select 
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        className={style.contactFormInput}
                        required
                    >
                        <option value="">Select Dropoff Location</option>
                        {(direction === 'CT' ? routes : [...routes].reverse()).map((route, i) =>{
                            const directionData = route.directionTo.find(d => d.destination === direction);
                            if(!directionData) return null;

                            return (
                                <option 
                                    key={i}
                                    value={route.town}
                                >
                                    {route.town} - {route.locationName}
                                </option>
                            )
                        })}
                    </select>
                </div>

                {/* Payment Method */}
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

                {/* id type */}
                <div 
                    className={style.contactFormFieldset}
                >
                    <label 
                        className={style.contactFormLabel}
                    >
                        Identification Type
                    </label>
                    <select
                        value={idType}
                        onChange={(e) => setIdType(e.target.value as "ID" | "Passport")}
                        className={style.contactFormInput}
                        required
                    >
                        <option value="ID">South African ID</option>
                        <option value="Passport">Passport</option>
                    </select>
                </div>


                {/* passenger ID */}
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        className={style.contactFormLabel}
                    >
                        {idType === "ID" ? "ID Number" : "Passport Number"}
                    </label>

                    <input 
                        type="text" 
                        value={passengerID}
                        onChange={(e) => setPassengerID(e.target.value)}
                        className={style.contactFormInput}
                        required
                    />
                </div>

                {/* passenger name */}
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        className={style.contactFormLabel}
                    >
                        Name
                    </label>

                    <input 
                        type="text" 
                        value={passengerName}
                        onChange={(e) => setPassengerName(e.target.value)}
                        className={style.contactFormInput}
                        required
                        minLength={2}
                        pattern="[A-Za-z\s]+"
                    />
                </div>

                {/* passenger lastname */}
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        className={style.contactFormLabel}
                    >
                        Surname
                    </label>

                    <input 
                        type="text" 
                        value={passengerLastName}
                        onChange={(e) => setPassengerLastName(e.target.value)}
                        className={style.contactFormInput}
                        required
                        minLength={2}
                        pattern="[A-Za-z\s]+"
                    />
                </div>

                {/* passenger email */}
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        className={style.contactFormLabel}
                    >
                        Your Email
                    </label>

                    <input 
                        type="email" 
                        value={passengerEmail}
                        onChange={(e) => setPassengerEmail(e.target.value)}
                        className={style.contactFormInput}
                        required
                    />
                </div>

                {/* passenger phone */}
                <div
                    className={style.contactFormFieldset}
                >
                    <label 
                        className={style.contactFormLabel}
                    >
                        Your Phone Number
                    </label>

                    <input 
                        type="tel" 
                        value={passengerPhone}
                        onChange={(e) => setPassengerPhone(e.target.value)}
                        className={style.contactFormInput}
                        required
                        placeholder="e.g. 0821234567 or +27821234567"
                    />
                </div>

                <div
                    className={style.contactFormSubmitRow}
                >
                    <button
                        type="submit"
                        disabled={loading}
                        className={style.contactFormSubmit}
                    >
                        {loading ? "Submitting..." : "Book Now"}
                    </button>
                    </div>
                    {/* Message */}
                    {submitMessage && (
                        <p>{submitMessage}</p>
                    )}
            </form>
        </section>
    )
}