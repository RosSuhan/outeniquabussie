import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const bookingData = await req.json();

        const res = await fetch(process.env.BOOKING_GOOGLE_SCRIPT_URL!, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData)
        });

        const text = await res.text();
        console.log("RAW SCRIPT RESPONCE:", text);

        let data;
        try {
            data = JSON.parse(text);
        } catch (err) {
            console.error("invalid json from google script:", err);
            return NextResponse.json(
                {
                    error: "invalid json returned from google script", raw: text
                },
                { status: 500 }
            );
        }

        // const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error("Booking Error:", err);
        return NextResponse.json({ error: "Booking failed" }, {status: 500 });
    }
}