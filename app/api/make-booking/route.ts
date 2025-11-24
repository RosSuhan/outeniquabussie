import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const bookingData = await req.json();

        const res = await fetch(process.env.BOOKING_GOOGLE_SCRIPT_URL!, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData)
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error("Booking Error:", err);
        return NextResponse.json({ error: "Booking failed" }, {status: 500 });
    }
}