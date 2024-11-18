"use client";
import { useState } from "react";
import { navItems } from "@/util/menuArray";

import LogoSvg from "@/public/Logo textwhite.svg";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "@/public/icons/hamburger-menu.png";
import X from "@/public/icons/delete.png";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  function toggleMobileMenu() {
    setIsOpen(!isOpen);
  }

  function showDropdown(title) {
    if (activeLink === title) {
      setActiveLink(null);
    } else {
      setActiveLink(title);
    }
  }

  const dropdownItemArray =
    navItems.find((item) => item.title === activeLink)?.dropdown || [];

  return (
    <nav className="md:hidden  z-10 fixed top-0 w-full ">
      <div
        className={`w-full p-2  items-center bg-cyan-500 flex flex-row  ${isOpen? 'bg-gradient-to-b from-cyan-500 to-cyan-200': 'bg-cyan-500'} `}
      >
        <Link
          href="/"
          className="hover:scale-110 transition-transform duration-300 ease-in-out hover:rotate-6"
        >
          <Image
            src={LogoSvg}
            alt="V-tech bedrijfsnaam Logo "
            height={114}
            width={114}
          />
        </Link>
        <div className="ml-auto mr-4 ">
          {isOpen ? (
            <Image
              className=""
              onClick={() => {
                toggleMobileMenu();
                setActiveLink(null);
              }}
              src={X}
              alt="Hamburger Icon for the mobile menu"
              height={30}
              width={30}
            />
          ) : (
            <Image
              className=""
              onClick={toggleMobileMenu}
              src={Hamburger}
              alt="Hamburger Icon for the mobile menu"
              height={30}
              width={30}
            />
          )}
        </div>
      </div>

      {/* Dropdown Container */}
      {isOpen && (
        <div
          className="w-full max-h-screen min-h-screen   bg-cyan-500 px-5 overflow-y-scroll"
          style={{
            backgroundImage: "url(/custom-bg/nav-bg.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Of gebruik 'contain' afhankelijk van je design
          }}
        >
          {/* Main Content Container */}

          <div className="w-full min-h-screen overflow-y-auto ">
            <div className=" mb-24 h-fit space-y-6 mt-8 ">
              {navItems.map((item) => (
                <div key={item.title} className="w-full   ">
                  <p
                    onClick={() => showDropdown(item.title)}
                    className={`${
                      activeLink === item.title
                        ? "text-gray-900 font-semibold"
                        : "text-black  "
                    } flex items-center text-2xl font-nunito  font-normal tracking-wider `}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-black/60 text-sm font-nunito -tracking-wider ${
                      activeLink === item.title ? "hidden" : "block"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* dropdown menu */}
                  {activeLink && activeLink === item.title && (
                    <div className="mt-4 space-y-4  ">
                      {item.dropdown.map((e) => (
                        <Link
                          key={e.id}
                          href={e.href}
                          className="block "
                        >
                          <div className="flex flow-row space-x-4 items-center bg-cyan-300 w-full p-2 rounded-xl">
                            <Image
                              alt={e.imgAlt}
                              src={e.imgSrc}
                              height={36}
                              width={36}
                            />
                            <p className="font-nunito  tracking-wider flex text-black ">
                              {e.title}{" "}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* <div className="fixed bottom-0 left-0 right-0 bg-cyan-100/10   ">
              <div className="flex justify-between w-full  p-4">
                <Image
                  onClick={toggleMobileMenu}
                  src={Whatsapp}
                  alt="Whatsapp Icon"
                  height={30}
                  width={30}
                />

                <Image
                  onClick={toggleMobileMenu}
                  src={Email}
                  alt="Email Icon"
                  height={30}
                  width={30}
                />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
}
