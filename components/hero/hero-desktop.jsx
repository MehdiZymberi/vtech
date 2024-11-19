import Image from "next/image";
import Link from "next/link";
import HeroXlScreenBg from "./hero-lg-bg";

import HeroSpa from "@/public/Hero/Hero-spa.png";
import HeroBenefitList from "./hero-benefit-list";
import HeroBenefitListDesktop from "./hero-benefit-list-desktop";
export default function HeroDesktop() {
  return (
    <section id="HeroDesktop" className="min-h-full md:block  pt-10   ">
      <HeroXlScreenBg />

      {/* Hero Wrapper Desktop/mobile */}
      <div className="flex flex-col md:flex-row  mt-10 md:mt-20 md:px-16 px-4  h-full 2xl:max-w-7xl 2xl:mx-auto  2xl:space-x-12">
        {/* Content van de hero */}

        {/* Links van de pagina */}
        <div className="  space-y-6 sm:space-y-4 ">
          <h1 className=" font-sourGummy text-4xl md:text-2xl lg:text-4xl xl:text-5xl md:leading-relaxed leading-tight  md:tracking-wider font-semibold ">
            Jouw bedrijf <br /> binnen 1 week online en operationeel.
          </h1>

          <div className="flex flex-col  space-y-4  ">
            <h2 className="text-2xl md:text-base xl:text-3xl leading-relaxed font-sourGummy tracking-wider sm:w-[70%]">
              Benieuwd hoe een website jouw eenmanszaak kan laten groeien?
            </h2>
            <HeroBenefitListDesktop />
            <Link
              href={"/"}
              className="  md:block hidden  p-3 text-xl text-bold bg-gold rounded-lg font-sourGummy font-bold w-fit text-cyan-700 hover:font-extrabold hover:scale-110 transition ease-in-out duration-200 hover:text-black hover:bg-transparent hover:border decoration-slate-300"
            >
              {" "}
              Jouw Website Go
            </Link>
          </div>
        </div>

        {/* Rechts van de pagina */}

        {/* carousel  wrapper ...voor nu even */}

        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 sm:items-center sm:justify-center md:items-start  md:flex md:flex-row   ">
          <div className=" h-auto  sm:h-[70%]  sm:w-[70%] mx-auto  md:mx-0 flex  mt-8  md:w-[80%] lg:w-[60%] 2xl:w-[100%]  ">
            <Image
              src={HeroSpa}
              alt="Illustration of a man working on his desktop"
              width={1260}
              height={1260}
              className="w-fit h-auto object-cover drop-shadow-2xl  "
            />
          </div>
          <HeroBenefitList />
        </div>
      </div>
    </section>
  );
}
