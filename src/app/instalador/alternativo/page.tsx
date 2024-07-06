'use client'
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Original() {

    const [passo, setPasso] = useState(0);
    const sklauncher = require("../../../../public/assets/sk-home.png");
    const skProfile = require("../../../../public/assets/sk-profile.png");
    const csmpupdater = require("../../../../public/assets/csmp-updater.png");
    const abrirpasta = require("../../../../public/assets/sk-pasta.png");
    const updating = require("../../../../public/assets/updater-baixando.png");
    const jogar = require("../../../../public/assets/sk-jogar.png");

    const updaterlink = process.env.UPDATER_URL;

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
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Baixe e Instale o SKLauncher</label>
                        <label className="text-xl mobile:text-base text-center">Faça login no modo offline</label>
                        <label className="text-xl my-5 mobile:text-base text-center">Clique <Link href="https://skmedix.pl" target="_blank" className="text-cyan-500 animate-pulse">aqui</Link> para baixar</label>
                        <Image className="rounded-lg h-[60vh] w-auto mobile:w-[90vw] mobile:h-auto" src={sklauncher} alt="SKLauncher" />
                    </>
                }
                {passo == 1 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Inicialização do Modpack</label>
                        <label className="text-xl my-5 mobile:text-base text-center">Clique no + na parte da esquerda, ao lado de {`"Gerenciar Instalações"`} e preencha da seguinte forma:</label>
                        <label className="text-lg mobile:text-base text-center">Não se esqueça de mudar a Memoria para algo entre 4GB e 10GB e ativar o modo de compatibilidade</label>

                        <Image className="rounded-xl h-[60vh] w-auto mobile:w-[90vw] mobile:h-auto" src={skProfile} alt="SKLauncher" />
                    </>
                }
                {passo == 2 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Baixe, Descompacte e Execute o CSMP Updater</label>
                        <label className="text-xl my-5 mobile:text-base text-center">Clique <Link href="https://dl.dropbox.com/scl/fi/xftzcdh4rw8zp8bo2rzgv/CSMP-Updater.zip?rlkey=y6icsk36yh44wax3c8gygza8q&st=9uxm6jeo&dl=0" className="text-cyan-500 animate-pulse">aqui</Link> para baixar</label>
                        <Image className="rounded-xl h-[60vh] w-auto border-black border mobile:w-[90vw] mobile:h-auto" src={csmpupdater} alt="CSMP Updater" />
                    </>
                }
                {passo == 3 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Abrindo a Pasta de Mods</label>
                        <label className="text-xl my-5 mobile:text-base text-center">De volta no SKLauncher, vá ate o Modpack e abra a pasta</label>
                        <Image className="rounded-xl h-[60vh] w-auto border-black border mobile:w-[90vw] mobile:h-auto" src={abrirpasta} alt="SKLauncher" />
                    </>
                }
                {passo == 4 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Baixando/Atualizando Modpack</label>
                        <label className="text-xl my-5 mobile:text-base text-center">No CSMP Updater, aperte no botão de atualizar Modpack e coloque o caminho da pasta de mods que voce obteu no SKLauncher</label>
                        <Image className="rounded-xl h-[60vh] w-auto border-black border mobile:w-[90vw] mobile:h-auto" src={updating} alt="CSMP Updater" />
                    </>
                }
                {passo == 5 &&
                    <>
                        <label className="text-3xl font-bold mt-5 mobile:text-xl text-center">Inicie o Jogo clicando em JOGAR</label>
                        <label className="text-xl my-5 mobile:text-base text-center">quando precisar atualizar o modpack, retorne ao passo 4</label>
                        <Image className="rounded-xl h-[60vh] w-auto border-black border mobile:w-[90vw] mobile:h-auto" src={jogar} alt="SKLauncher" />
                    </>
                }
            </div>

        </>
    )
}