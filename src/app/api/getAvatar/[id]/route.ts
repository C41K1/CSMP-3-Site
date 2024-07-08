import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    if (process.env.ORIGINAIS != undefined && process.env.ORIGINAIS.includes(params.id)) {
        return NextResponse.json(`https://mc-heads.net/avatar/${params.id}.png`, { status: 200 })
    }
    else return NextResponse.json(`https://mc-heads.net/avatar/MHF_steve.png`, { status: 200 })
}