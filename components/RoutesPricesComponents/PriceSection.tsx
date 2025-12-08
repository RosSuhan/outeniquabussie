'use client'
declare global {
    interface Window {
        dataLayer: unknown[];
    }
}
import style from '@/css/priceSection.module.css'
import { routes } from '@/lib/routes'
import { useState } from 'react'

export default function PriceSection(){
    const [ direction, setDirection ] = useState<'CT' | 'George'>('CT')
    const [ date, setDate ] = useState('');
    const [ pickup, setPickup ] = useState('');
    const [ dropoff, setDropoff ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ price, setPrice ] = useState<number | null>(null);
    const [ availableSeats, setAvailableSeats ] = useState<number | null>(null);
    const [ loading, setLoading ] = useState(false);


    function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedValue = e.target.value
        const selectedDate = new Date(selectedValue);
        const day = selectedDate.getDay();

        const holidayEnd = new Date("2026-01-15");
        holidayEnd.setHours(23, 59, 59, 999);

        const holidayStart = new Date("2025-12-09");
        holidayStart.setHours(23, 59, 59, 999);

        if (selectedDate >= holidayStart && selectedDate <= holidayEnd) {
            setMessage("");
            setDate(selectedValue);
            return
        }

        if (day === 0) {
            setMessage("Sundays are not available for trips.");
            setDate("");
            return;
        }

        if (day !== 1 && day !== 3 && day !== 5) {
            setMessage("Only Monday, Wednesday and Friday are allowed.");
            setDate('');
        } else {
            setMessage('');
            setDate(selectedValue);
        }
    }

    async function checkAvailabilityAndPrice() {
        if (!direction || !pickup || !dropoff || !date) {
            setMessage("Please fill in all fields.")
            return;
        }

        setLoading(true);
        setMessage('');
        setPrice(null);
        setAvailableSeats(null);

        try {
            const priceParams = new URLSearchParams({
                pickup,
                dropoff
            });
            const priceRes = await fetch(`/api/get-price?${priceParams}`)
            console.log("STATUS:", priceRes.status)
            console.log("RAW RESPONSE:", priceRes)
            const priceData = await priceRes.json();

            if(!priceRes.ok) {
                throw new Error("Failed to fetch price");
            }

            if(priceData.error) {
                setMessage("No price found for this route.");
                setLoading(false);
                return;
            }

            setPrice(priceData.price);

            const availParams = new URLSearchParams({
                date,
                direction,
            });

            const availRes = await fetch(`/api/check-availability?${availParams}`);
            const availData = await availRes.json();

            if (availData.error) {
                setMessage(availData.error);
            } else {
                setAvailableSeats(availData.availableSeats)
            }
        } catch (err) {
            console.error("price fetch error:", err)
            setMessage("Error checking availability.");
        } finally {
            setLoading(false);
        }
    }

    function proceedToBooking() {
        console.log("Proceed to Booking clicked")
        window.localStorage.setItem("bookingInfo", JSON.stringify({
            direction,
            date,
            pickup, 
            dropoff,
            price,
            availableSeats
        }))

        if(typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
                event: "booking_proceed_clidk"
            })
        }

        window.location.href = '/book-ticket/details'
    }

    return(
        <section
            className={style.priceSection}
        >
            <h2
                className={style.priceHeading}
            >
                Check if a seat is available:
            </h2>

            <div
                className={style.checkPriceBlock}
            >
                {/* Direction */}
                <div
                    className={style.priceCheckFieldset}
                >
                    <label 
                        htmlFor=""
                        className={style.priceCheckLabel}
                    >
                        Direction
                    </label>
                    <select 
                        value={direction}
                        onChange={(e) => setDirection(e.target.value as "CT" | "George")}
                        className={style.priceCheckInput}
                        required
                    >
                        <option value="CT">George → Cape Town</option>
                        <option value="George">Cape Town → George</option>
                    </select>
                </div>

                {/* Date */}
                <div
                    className={style.priceCheckFieldset}
                >
                    <label 
                        className={style.priceCheckLabel}
                    >
                        Travel Date
                    </label>
                    <input 
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={date}
                        onChange={handleDateChange}
                        className={style.priceCheckInput}
                        required
                    />
                </div>

                {/* Pickup */}
                <div
                    className={style.priceCheckFieldset}
                >
                    <label 
                        className={style.priceCheckLabel}
                    >
                        Pickup Location
                    </label>
                    <select 
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className={style.priceCheckInput}
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
                    className={style.priceCheckFieldset}
                >
                    <label 
                        className={style.priceCheckLabel}
                    >
                        Dropoff Location
                    </label>
                    <select 
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        className={style.priceCheckInput}
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
            </div>

            <button
                onClick={checkAvailabilityAndPrice}
                className={style.checkButton}
                disabled={loading}
            >
                {loading ? "Checking..." : "Check Availability"}
            </button>

            {/* ✅ Availability message */}
            {message && 
                <p
                    className={style.errorMessage}
                >{message}</p>
            }

            {price !== null && (
                    <div>
                        <strong
                            className={style.priceShow}
                        >Price: R{price}</strong>
                    </div>
                )}

            {availableSeats !== null && (
                <div>
                    <strong
                        className={style.priceShow}
                    >Available Seats: {availableSeats > 0 ? availableSeats : "Fully Booked"}</strong>
                </div>
            )}

            {price !== null && availableSeats !== null && availableSeats > 0 && (
                <button 
                    className={style.checkButton}
                    onClick={proceedToBooking}
                >
                    Proceed With Booking
                </button>
            )}
        </section>
    )
}