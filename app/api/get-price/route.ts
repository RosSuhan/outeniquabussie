import { NextResponse } from "next/server";

export async function GET(request:Request) {
    const { searchParams } = new URL(request.url);

    const pickup = searchParams.get("pickup");
    const dropoff = searchParams.get("dropoff")

    console.log("API Route input:", {pickup, dropoff});

    const RATES_GOOGLE_SCRIPT_URL = process.env.RATES_GOOGLE_SCRIPT_URL!;

    try {
        const url = `${RATES_GOOGLE_SCRIPT_URL}?pickup=${pickup}&dropoff=${dropoff}`;
        console.log("FETCHING GOOGLE SCRIPT:", url);

        const response = await fetch(url);
        console.log("GOOGLE SCRIPT STATUS:", response.status)

        const data = await response.json();
        console.log("GOOGLE SCRIPT DATA:", data);

        return NextResponse.json(data);
    } catch (err) {
        console.error("API error:", err);
        return NextResponse.json({ error: "Failed to fetch price" }, { status: 500 });
    }
}