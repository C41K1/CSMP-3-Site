import Banner from "@/components/Banner";
import Corpo from "@/components/Corpo";
import Navbar from "@/components/Navbar";

export default function Home() {

  const updater = require("../../public/assets/csmp-updater-logo.png");
  const discord = require("../../public/assets/discord.png");
  const earth = require("../../public/assets/earth.png");

  return (
    <main className="w-screen">
      <Navbar />
      <Banner />
      <Corpo
        titulo={"CSMP Updater"}
        texto={"Mantenha o seu modpack atualizado utilizando o CSMP Updater! clique no botão abaixo para ir ao tutorial de instalação!"}
        CTA_label={"Baixar Instalador"}
        CTA_link={"/instalador"}
        imagem={updater}
        imagem_alt={"instalador"}
      />
      <Corpo
        titulo={"Servidor do Discord"}
        texto={"Entre no nosso server do Discord para se encontrar e conversar com o pessoal!"}
        CTA_label={"Entre no Servidor"}
        CTA_link={"https://discord.gg/JUNynDaS4G"}
        imagem={discord}
        imagem_alt={"discord"}
        link_new_tab
        invertido
      />
      <Corpo
        titulo={"Mapa Interativo"}
        texto={"Confira o mapa interativo do servidor para acompanhar o progresso dos players em tempo real!"}
        CTA_label={"Mapa Interativo"}
        CTA_link={"http://enx-cirion-27.enx.host:10100/?worldname=world&mapname=surface&zoom=4"}
        imagem={earth}
        imagem_alt={"mapa"}
      />
    </main>
  );
}
