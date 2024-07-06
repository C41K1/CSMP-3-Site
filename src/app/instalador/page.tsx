'use client'
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Image from "next/image";

export default function InstaladorPage() {
    const minecraft = require("../../../public/assets/minecraft-logo.png");
    const original = require("../../../public/assets/minecraft-original-logo.png");
    const alternativo = require("../../../public/assets/minecraft-alternativo-logo.png");

    const [selecionado, setSelecionado] = useState<"nenhum" | "original" | "alternativo">("nenhum");

    return (
        <>
            <Navbar />
            <div
                className={`
                    w-screen
                    h-screen
                    flex
                    md:flex-row
                    mobile:flex-col
                    mobile:pt-[18vh]
                    duration-500
                    ${selecionado == "nenhum" && "transition ease-in-out bg-slate-700"}
                    ${selecionado == "original" && "transition ease-in-out bg-cyan-500"}
                    ${selecionado == "alternativo" && "transition ease-in-out bg-indigo-700"}
                `}
            >
                <button className="flex-[4] flex flex-col items-center justify-center" onMouseOver={() => setSelecionado("original")} onClick={()=>document.location.href = "/instalador/original"}>
                    <Image className={`md:w-[10vw] mobile:w-[30vw] h-auto drop-shadow ${selecionado != "original" ? "grayscale" : "animate-bounce"}`} src={original} alt="original" />
                    <label>Original</label>
                </button>
                <button className="flex-1 flex flex-col items-center justify-center" onMouseOver={() => setSelecionado("nenhum")}>
                    <label>Selecione seu tipo de</label>
                    <Image className="mobile:w-[50vw]" src={minecraft} alt="minecraft" />
                </button>
                <button className="flex-[4] flex flex-col items-center justify-center" onMouseOver={() => setSelecionado("alternativo")} onClick={()=>document.location.href = "/instalador/alternativo"}>
                    <Image className={`md:w-[10vw] mobile:w-[30vw] h-auto drop-shadow ${selecionado != "alternativo" ? "grayscale" : "animate-bounce"}`} src={alternativo} alt="alternativo" />
                    <label>Alternativo</label>
                </button>
            </div>
        </>
    )
}