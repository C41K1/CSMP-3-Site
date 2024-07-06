import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({ "link": process.env.MODPACK_URL }, { status: 200 })
}