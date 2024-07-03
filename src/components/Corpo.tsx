"use client"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

interface CorpoProps {
    titulo: string,
    texto: string,
    CTA_label: string,
    CTA_link: string,
    imagem: StaticImport,
    imagem_alt: string,
    link_new_tab?: boolean,
    invertido?: boolean
}



export default function Corpo({ titulo, texto, CTA_label, CTA_link, imagem, imagem_alt, link_new_tab, invertido }: CorpoProps) {
    return (
        <ParallaxProvider>
            <div className="bg-[#FFFFFF0F] w-screen flex items-center justify-center">
                <div className="bg-gradient-to-r from-cyan-500 via-indigo-700 to-purple-500 w-[80vw] my-[10vh] rounded-lg flex flex-row items-center justify-evenly">
                    <div className={`flex flex-col flex-1 items-center justify-center ${invertido && "order-last"}`}>
                        <label className="text-4xl font-bold">{titulo}</label>
                        <p className="w-[30vw] my-[3vh] text-lg text-center">{texto}</p>
                        <Link className={`p-3 rounded-lg hover:scale-110 hover:shadow-xl duration-700 animate-pulse active:bg-transparent border border-[#00000022] shadow-sm shadow-black`} href={CTA_link} target={link_new_tab? "_blank" : "_self"}>{CTA_label}</Link>
                    </div>
                    <Parallax scale={[0.5,1]} opacity={[0.75,1]} className="h-[40vh] flex items-center justify-center flex-1">
                        <Image className="h-[25vh] w-auto animate-pulse
                        " src={imagem} alt={imagem_alt} />
                    </Parallax>
                </div>
            </div>
        </ParallaxProvider>
    )
}