import Link from "next/link";

export default function HeroBenefitList() {
  return (
    <div className=" px-4 space-y-8   h-fit  ">
    <div className="flex flex-row justify-center w-full  space-x-4  ">
      <div className="flex flex-col items-center justify-center ">
        <span className="">
          {/* <Image src={Speed} layout="intrinsic"width={40} alt="" height={40} /> */}
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-12 h-12 sm:w-16 sm:h-16  "
              fill="#0891B2"
            >
              <path d="m187-551 106 45q18-36 38.5-71t43.5-67l-79-16-109 109Zm154 81 133 133q57-26 107-59t81-64q81-81 119-166t41-192q-107 3-192 41T464-658q-31 31-64 81t-59 107Zm229-96q-20-20-20-49.5t20-49.5q20-20 49.5-20t49.5 20q20 20 20 49.5T669-566q-20 20-49.5 20T570-566Zm-15 383 109-109-16-79q-32 23-67 43.5T510-289l45 106Zm326-694q9 136-34 248T705-418l-2 2-2 2 22 110q3 15-1.5 29T706-250L535-78l-85-198-170-170-198-85 172-171q11-11 25-15.5t29-1.5l110 22q1-1 2-1.5t2-1.5q99-99 211-142.5T881-877ZM149-325q35-35 85.5-35.5T320-326q35 35 34.5 85.5T319-155q-26 26-80.5 43T75-80q15-109 31.5-164t42.5-81Zm42 43q-14 15-25 47t-19 82q50-8 82-19t47-25q19-17 19.5-42.5T278-284q-19-18-44.5-17.5T191-282Z" />
            </svg>
          </span>
        </span>
        <span className="text-cyan-600 font-semibold font-sourGummy text-xl">
          {" "}
          Snel
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="w-12 h-12 sm:w-16 sm:h-16  "
            fill="#0891B2"
          >
            <path d="M407-325q23 23 66.5 21.5T537-336l216-339-335 219q-30 20-32 64t21 67Zm71-474q57 0 119 18.5T716-717l-52 37q-45-30-96.5-44.5T477.98-739q-140.47 0-239.23 100.22Q140-538.57 140-396.02 140-351 152.5-305q12.5 46 35.5 85h579q22-36 35-84t13-94q0-42-12.5-90.5T758-578l39-52q38 56 57 112.5T875-404q2 60-12 113t-41 98q-12 23-25.5 28t-33.5 5H192q-17 0-33.5-8.5T134-193q-26-48-40-97.5T80-396q0-83 31.5-156.5t85.5-128Q251-735 323.68-767T478-799Zm-9 331Z" />
          </svg>
        </span>
        <span className="text-cyan-600 font-semibold font-sourGummy text-xl">
          {" "}
          Krachtig
        </span>
      </div>{" "}
      <div className="flex flex-col items-center justify-center">
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="w-12 h-12 sm:w-16 sm:h-16  "
            fill="#0891B2"
          >
            <path d="M146-470q-8-32-12-64t-4-64q0-71 21-137.5T212-860q5-8 14-10t15 4q7 7 6.5 16t-5.5 17q-35 52-53.5 112T170-598q0 34 6 67t14 65l64-63q6-6 14-6t14 6q6 6 6 14t-6 14l-91 91q-9 9-21 9t-21-9l-91-91q-6-6-6-14t6-14q6-6 14-6t14 6l60 59Zm500 344q-20 8-42 7t-42-11L318-243q-10-5-14.5-14.5T302-278v-2q5-19 19-31t34-14l99-8-117-320q-5-12 .5-22.5T355-691q12-5 23 .5t16 17.5l131 357q5 14-3 26.5T499-275l-89 8 178 83q9 4 19 4t19-3l159-58q39-14 56.5-51.5T845-369l-62-169q-5-12 .5-23t17.5-16q12-5 23 .5t16 17.5l61 169q23 63-4.5 122.5T806-185l-160 59ZM523-603q12-5 22.5.5T561-585l48 132q5 11-.5 22T591-415q-11 5-22-1t-16-17l-48-132q-5-12 .5-22.5T523-603Zm132-6q12-5 22.5.5T693-591l35 94q5 12-1 23t-18 16q-12 4-22.5-1T671-476l-34-94q-5-12 .5-23t17.5-16Zm22 265Z" />
          </svg>
        </span>
        <span className="text-cyan-600 font-semibold font-sourGummy text-xl">
          {" "}
          Intuïtief test
        </span>
      </div>
    </div>
    <Link
      href={"/"}
      className="block w-full md:hidden p-3  text-xl text-bold bg-gold rounded-lg font-sourGummy font-bold  text-center text-cyan-700 hover:font-extrabold hover:scale-110 transition ease-in-out duration-200 hover:text-black  hover:bg-cyan-500 hover:border decoration-slate-800 "
    >
      {" "}
      Jouw Website Go
    </Link>
  </div>
  )
}
