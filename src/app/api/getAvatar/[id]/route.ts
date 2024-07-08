import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    if (process.env.CUSTOMIZADAS != undefined && JSON.parse(process.env.CUSTOMIZADAS).nick.includes(params.id)) {
        let avatar = JSON.parse(process.env.CUSTOMIZADAS).avatar[JSON.parse(process.env.CUSTOMIZADAS).nick.indexOf(params.id)]
        return NextResponse.redirect(`https://mc-heads.net/avatar/${avatar}`)
    }
    else if (process.env.ORIGINAIS != undefined && JSON.parse(process.env.ORIGINAIS).includes(params.id)) {
        return NextResponse.redirect(`https://mc-heads.net/avatar/${params.id}`)
    }
    else return NextResponse.redirect(`https://mc-heads.net/avatar/MHF_steve`)
}