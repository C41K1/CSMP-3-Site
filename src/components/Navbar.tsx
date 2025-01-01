import Image from "next/image"
import Link from "next/link";

export default function Navbar() {

    const logo = require("../../public/assets/csmp-logo.png");

    return (
        <div className="w-screen fixed top-0 left-0 right-0 bg-[#00000022] flex flex-col md:flex-row items-center justify-evenly z-50">
            <Image className="h-[10vh] w-auto my-[1.5vh]" src={logo} alt="csmp logo" />
            <div className="flex flex-row items-center justify-between w-screen md:w-[50vw]">
                <Link className="flex flex-auto h-[13vh] items-center justify-center text-[#AAA] hover:text-[#FFF] hover:scale-125 duration-500" href={"/"}>Home</Link>
                <Link className="flex flex-auto h-[13vh] items-center justify-center text-[#AAA] hover:text-[#FFF] hover:scale-125 duration-500" href={"https://discord.gg/JUNynDaS4G"} target="_blank">Discord</Link>
                <Link className="flex flex-auto h-[13vh] items-center justify-center text-[#AAA] hover:text-[#FFF] hover:scale-125 duration-500" href={"/instalador"}>Como Jogar</Link>
                <Link className="flex flex-auto h-[13vh] items-center justify-center text-[#AAA] hover:text-[#FFF] hover:scale-125 duration-500" href={"http://enx-cirion-27.enx.host:10100/?worldname=world&mapname=surface&zoom=4"}>Mapa</Link>
            </div>
        </div>
    )
}