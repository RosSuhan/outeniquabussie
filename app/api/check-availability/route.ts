export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET(req: Request){
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");
    const direction = searchParams.get("direction")

    if(!date || !direction) {
        return NextResponse.json({ error: "Missing parameters" }, { status: 400});
    }

    const url = `${process.env.BOOKINGS_GOOGLE_SCRIPT_URL}?action=checkAvailability&date=${date}&direction=${direction}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        return NextResponse.json(data);
    } catch (err) {
        console.error("Availability Fetch Error", err);
        return NextResponse.json({error: "Failed to fetch availability" }, { status: 500 });
    }
}