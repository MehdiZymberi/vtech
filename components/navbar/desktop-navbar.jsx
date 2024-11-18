"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import LogoSvg from "@/public/Logo textwhite.svg";
import { navItems } from "@/util/menuArray";

export default function DesktopNavbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  function showDropdown(title) {
    setActiveLink(title);
  }

  function ToggleHighlights(item) {
    if (item && item.title) {
      const title = item.title;
      setCurrentItem(title);
    } else {
      setCurrentItem(null);
    }
  }

  const dropdownItemArray =
    navItems.find((item) => item.title === activeLink)?.dropdown || [];

  const descriptionDropdown = navItems.find(
    (item) => item.title === activeLink
  );

  return (
    <nav
      className="hidden md:block   z-10 fixed top-0 w-full"
      onMouseLeave={() => showDropdown(null)}
    >
      <div
        className={`flex flex-row ${
          activeLink
            ? "bg-gradient-to-b from-cyan-500 to-cyan-200"
            : "bg-cyan-500"
        } `}
      >
        <Link
          href="/"
          className="hover:scale-110 transition-transform duration-300 ease-in-out hover:rotate-6"
        >
          <Image
            src={LogoSvg}
            alt="V-tech bedrijfsnaam Logo "
            onClick={() => showDropdown(null)}
          />
        </Link>

        <div className="flex space-x-4 justify-center items-center ml-auto mr-4 lg:space-x-8 xl:space-x-20 xl:mr-12 font-nunito font-normal">
          {navItems.map((item) => (
            <p
              key={item.title}
              onClick={() => showDropdown(item.title)}
              onMouseEnter={() => showDropdown(item.title)}
              //   onMouseLeave={() => showDropdown(null)}
              className={`hover:bg-cyan-600 hover:text-white p-2 rounded-lg hover:cursor-pointer `}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>

      {/* Dropdown menu voor de actieve link */}
      {activeLink && (
        <div
          className="flex flex-row w-full z-10  bg-cyan-500"
          style={{
            backgroundImage: "url(/custom-bg/nav-bg.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Of gebruik 'contain' afhankelijk van je design
          }}
        >
          <div className="flex flex-col ml-4  w-[35%]  ">
            <h1 className="text-4xl font-nunito font-semibold tracking-wider mb-2 pt-2  ">
              {activeLink}{" "}
            </h1>
            <p className="opacity-100 font-nunito font-semibold  tracking-widest text-base pr-3 leading-relaxed ">
              {descriptionDropdown.description}
            </p>
          </div>

          {/* Grid met twee kolommen */}

          <div className="grid grid-cols-2 gap-4 w-full  ">
            {dropdownItemArray.map((item) => (
              <div key={item.id} className=" rounded-md p-2 h-fit ">
                <div className="flex items-center mb-4">
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    height={40}
                    className={`${
                      currentItem === item.title
                        ? " font-medium"
                        : undefined
                    }`}
                  />
                  <Link
                    onMouseEnter={() => ToggleHighlights(item)}
                    onMouseLeave={() => ToggleHighlights(null)}
                    href={item.href}
                    className={`font-nunito tracking-widest hover:underline ml-4 ${
                      currentItem === item.title
                        ? "text-gray-700 font-bold"
                        : undefined
                    }`}
                  >
                    {item.title}
                  </Link>
                </div>
                <p
                  className={` font-nunito font-medium md:text-sm lg:text-base w-full tracking-widest ${
                    currentItem === item.title
                      ? "text-gray-700 font-medium opacity-100"
                      : "opacity-100"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
