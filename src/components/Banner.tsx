import Image from "next/image";

export default function Banner() {

    const banner = require("../../public/assets/banner.png");
    const csmp3 = require("../../public/assets/csmp3-logo.png");

    return (
        <>
            <Image className="h-screen object-cover" src={banner} alt="banner" unoptimized={true} />
            <div className="absolute top-[30vh] w-screen flex flex-col items-center">
                <label className="mb-[5vh] opacity-50">Bem-vindo(a) ao</label>
                <Image className="animate-pulse opacity-15" src={csmp3} alt="csmp3" priority />
            </div>

        </>
    )
}