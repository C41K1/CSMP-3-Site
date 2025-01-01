import Image from "next/image";

export default function Banner() {

    const banner = require("../../public/assets/banner-csmp-4.png");
    const csmp4 = require("../../public/assets/csmp4-logo.png");

    return (
        <>
            <Image className="h-[85vh] object-cover opacity-50" src={banner} alt="banner" unoptimized={true} />
            <div className="absolute top-[30vh] w-screen flex flex-col items-center">
                <label className="mb-[5vh] opacity-50">Bem-vindo(a) ao</label>
                <Image className="animate-pulse opacity-15" src={csmp4} alt="csmp4" priority />
            </div>

        </>
    )
}