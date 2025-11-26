import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const bookingData = await req.json();
        console.log("➡️ Incoming bookingData:", bookingData);

        const scriptUrl = process.env.BOOKINGS_GOOGLE_SCRIPT_URL;
        if (!scriptUrl) {
            console.error("❌ Missing env: BOOKING_GOOGLE_SCRIPT_URL");
            return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
        }

        const res = await fetch(scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData)
        });

        const text = await res.text(); // Read raw text!
        console.log("⬅️ Script raw response:", text);

        let data;
        try {
            data = JSON.parse(text);
        } catch {
            console.error("❌ Response is not JSON:", text);
            return NextResponse.json(
                { error: "Invalid response from Google Script" },
                { status: 500 }
            );
        }

        return NextResponse.json(data);
    } catch (err) {
        console.error("❌ Booking Error:", err);
        return NextResponse.json({ error: "Booking failed" }, { status: 500 });
    }
}
