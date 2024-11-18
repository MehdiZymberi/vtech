import Image from "next/image";
import Link from "next/link";
import HeroXlScreenBg from "./hero-lg-bg";
import Rocket from "@/public/Hero/rocket.svg";
import Speed from "@/public/Hero/speed.svg";
import Ux from "@/public/Hero/ux.svg";

import HeroSpa from "@/public/Hero/hero-spa.png";

export default function HeroDesktop() {
  return (
    <section id="HeroDesktop" className="h-full  md:block  pt-10 ">
      <HeroXlScreenBg />

      {/* Hero Wrapper Desktop/mobile */}
      <div className="flex flex-col md:flex-row  mt-10 md:mt-20 md:px-16 px-4  h-full ">
        {/* Content van de hero */}

        {/* Links van de pagina */}
        <div className="   ">
          <h1 className=" text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-relaxed leading-tight font-sourGummy md:tracking-wider font-semibold ">
            Jouw bedrijf <br /> binnen 1 week online en operationeel.
          </h1>

          <div className="flex flex-col  space-y-4  ">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-sourGummy tracking-wider">
              De perfecte single-page application voor eenmanszaken
            </h2>
            <Link
              href={"/"}
              className=" md:block hidden  p-3 text-xl text-bold bg-gold rounded-lg font-sourGummy font-bold w-fit text-cyan-700 hover:font-extrabold hover:scale-110 transition ease-in-out duration-200 hover:text-white hover:bg-transparent hover:border decoration-slate-300"
            >
              {" "}
              Jouw Website Go
            </Link>
          </div>
        </div>

        {/* Rechts van de pagina */}

        {/* carousel  wrapper ...voor nu even */}

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div className="w-[80%] sm:w-[65%] h-auto mx-auto flex justify-center items-center">
            <Image
              src={HeroSpa}
              alt="Illustration of a man working on his desktop"
              width={1260}
              height={1260}
              className="w-full h-auto object-cover drop-shadow-2xl"
            />
          </div>
        </div>
        <div className=" px-4 ">
          <div className="flex flex-row justify-center w-full  space-x-4  ">
            <div className="flex flex-col items-center justify-center ">
              <span className="">
                <Image src={Speed} width={40} alt="" height={40} />
              </span>
              <span className="text-gold font-sourGummy text-xl"> Snel</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="">
                <Image src={Rocket} width={40} alt="" height={40} />
              </span>
              <span className="text-gold font-sourGummy text-xl">
                {" "}
                Krachtig
              </span>
            </div>{" "}
            <div className="flex flex-col items-center justify-center">
              <span className="">
                <Image src={Ux} width={40} alt="" height={40} />
              </span>
              <span className="text-gold font-sourGummy text-xl">
                {" "}
                Intuïtief
              </span>
            </div>
          </div>
          <Link
            href={"/"}
            className="block w-full md:hidden p-3 text-xl text-bold bg-gold rounded-lg font-sourGummy font-bold  text-center text-cyan-700 hover:font-extrabold hover:scale-110 transition ease-in-out duration-200 hover:text-white hover:bg-transparent hover:border decoration-slate-300"
          >
            {" "}
            Jouw Website Go
          </Link>
        </div>
      </div>
    </section>
  );
}
