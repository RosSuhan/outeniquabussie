export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET(request:Request) {
    const { searchParams } = new URL(request.url);

    const pickup = searchParams.get("pickup");
    const dropoff = searchParams.get("dropoff")

    const RATES_GOOGLE_SCRIPT_URL = process.env.RATES_GOOGLE_SCRIPT_URL!;

    try {
        const response = await fetch(
            `${RATES_GOOGLE_SCRIPT_URL}?pickup=${pickup}&dropoff=${dropoff}`
        );

        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: "Failed to fetch price" }, { status: 500 });
    }
}