'use client'
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Original() {

    const [passo, setPasso] = useState(0);
    const curseforge = require("../../../../public/assets/curseforge-home.png");
    const customProfile = require("../../../../public/assets/customprofile.png");
    const csmpupdater = require("../../../../public/assets/csmp-updater.png");
    const abrirpasta = require("../../../../public/assets/abrir-pasta.png");
    const updating = require("../../../../public/assets/updater-baixando.png");
    const jogar = require("../../../../public/assets/jogar-curse-forge.png");

    return (
        <>
            <Navbar />
            <button onClick={() => setPasso(passo - 1)} className={`h-screen w-[10vw] fixed top-0 left-0 bottom-0 flex flex-col items-center justify-center active:scale-150 hover:scale-125 hover:duration-500 ${passo < 1 && "hidden"}`}>
                <label className="text-8xl font-thin mobile:text-4xl">{"<"}</label>
                <label className="text-xl font-thin mobile:hidden">Anterior</label>
            </button>
            <button onClick={() => setPasso(passo + 1)} className={`h-screen w-[10vw] fixed top-0 right-0 bottom-0 flex flex-col items-center justify-center active:scale-150 hover:scale-125 hover:duration-500 ${passo > 4 && "hidden"}`}>
                <label className="text-8xl font-thin mobile:text-4xl">{">"}</label>
                <label className="text-xl font-thin mobile:hidden">Proximo</label>
            </button>
            <div className="w-screen h-screen flex flex-col items-center bg-gradient-to-r from-cyan-500 via-indigo-700 to-purple-500">
                <label className="text-xl font-bold mt-[15vh] mobile:mt-[28vh]">Passo {passo + 1}/6</label>
                {passo == 0 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Baixe e instale o CurseForge Standalone</label>
                        <label className="text-xl my-5 mobile:text-base text-center">Clique <Link href="https://www.curseforge.com/download/app" target="_blank" className="text-cyan-500 animate-pulse">aqui</Link> para baixar</label>
                        <Image className="rounded-lg h-[60vh] w-auto mobile:w-[90vw] mobile:h-auto" src={curseforge} alt="curseforge" />
                    </>
                }
                {passo == 1 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Inicialização do Modpack</label>
                        <label className="text-xl my-5 mobile:text-base text-center">Na aba do Minecraft, clique em Criar Perfil Personalizado e preencha da seguinte forma:</label>
                        <Image className="rounded-xl h-[60vh] w-auto mobile:w-[90vw] mobile:h-auto" src={customProfile} alt="curseforge" />
                    </>
                }
                {passo == 2 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Baixe, Descompacte e Execute o CSMP Updater</label>
                        <label className="text-xl my-5 mobile:text-base text-center">Clique <Link href="https://dl.dropbox.com/scl/fi/xftzcdh4rw8zp8bo2rzgv/CSMP-Updater.zip?rlkey=y6icsk36yh44wax3c8gygza8q&st=9uxm6jeo&dl=0" className="text-cyan-500 animate-pulse">aqui</Link> para baixar</label>
                        <Image className="rounded-xl h-[60vh] w-auto mobile:w-[90vw] mobile:h-auto border-black border" src={csmpupdater} alt="CSMP Updater" />
                    </>
                }
                {passo == 3 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Abrindo a Pasta de Mods</label>
                        <label className="text-xl my-5 mobile:text-base text-center">De volta no CurseForge, vá ate o Modpack e abra a pasta</label>
                        <Image className="rounded-xl h-[60vh] w-auto mobile:w-[90vw] mobile:h-auto border-black border" src={abrirpasta} alt="curseforge" />
                    </>
                }
                {passo == 4 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Baixando/Atualizando Modpack</label>
                        <label className="text-xl my-5 mobile:text-base text-center">No CSMP Updater, aperte no botão de atualizar Modpack e coloque o caminho da pasta de mods que voce obteu no CurseForge</label>
                        <Image className="rounded-xl h-[60vh] w-auto mobile:w-[90vw] mobile:h-auto border-black border" src={updating} alt="CSMP Updater" />
                    </>
                }
                {passo == 5 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Inicie o Jogo clicando em JOGAR</label>
                        <label className="text-xl my-5 mobile:text-base text-center">quando precisar atualizar o modpack, retorne ao passo 4</label>
                        <Image className="rounded-xl h-[60vh] w-auto mobile:w-[90vw] mobile:h-auto border-black border" src={jogar} alt="curseforge" />
                    </>
                }
            </div>

        </>
    )
}