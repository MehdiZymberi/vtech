"use client";
import { useState } from "react";
import LogoSvg from "@/public/Logo textwhite.svg";
import WebSiteDesignLogo from "@/public/icons/web-design.png";
import LandingspageLogo from "@/public/icons/landding-page.png";
import LogoDesign from "@/public/icons/logo.png";
import WebMakeOver from "@/public/icons/web-make-over.png";
import SpaIcon from "@/public/icons/spa.png";
import MultiPageIcon from "@/public/icons/multipage.png";
import WebshopIcon from "@/public/icons/webshop.png";
import SeoIcon from "@/public/icons/seo.png";
import DomeinRegistratie from "@/public/icons/domeinregistratie.png";
import DomeinTransfer from "@/public/icons/domeintransfer.png";
import PremiumHosting from "@/public/icons/premium-hosting.png";
import BasicHosting from "@/public/icons/basic-hosting.png";
import OverOns from "@/public/icons/overons.png";
import Email from "@/public/icons/email.png";
import Whatsapp from "@/public/icons/whatsapp.png";
import Erkenning from "@/public/icons/erkenning.png";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "@/public/icons/hamburger-menu.png";
import X from "@/public/icons/delete.png";
import nvBG from "@/public/mobilenvbg.svg";
import arrowRight from "@/public/icons/arrows-right.png";

const navItems = [
  {
    title: "Web Design",
    href: "/web-design",
    description:
      "Een moderne en gebruiksvriendelijke website die de gebruikerservaring optimaliseert en zorgt voor een visueel aantrekkelijke uitstraling.",
    dropdown: [
      {
        id: 1,
        title: "Website Design",
        catchPhrase: "Breng uw website naar een hoger niveau",
        description:
          "Een moderne en gebruiksvriendelijke website, geoptimaliseerd voor SEO en de gebruikerservaring.",
        imgSrc: WebSiteDesignLogo,
        imgAlt: "Website ontwerp met SEO optimalisatie",
        href: "/web-design/website",
      },
      {
        id: 2,
        title: "Website Make-Over",
        catchPhrase: "Het gezicht van uw merk begint hier",
        description:
          "Een doordacht logo dat de essentie van uw merk weerspiegelt en een blijvende indruk achterlaat.",
        imgSrc: WebMakeOver,
        imgAlt: "Nog iets logo ontwerp",
        href: "/web-design/logo",
      },

      {
        id: 3,
        title: "Logo Ontwerp",
        catchPhrase: "Het gezicht van uw merk begint hier",
        description:
          "Een doordacht logo dat de essentie van uw merk weerspiegelt en vertrouwen opbouwt.",
        imgSrc: LogoDesign,
        imgAlt: "Professioneel logo ontwerp voor merkherkenning",
        href: "/web-design/logo",
      },

      {
        id: 4,
        title: "Landingspagina Ontwerp",
        catchPhrase: "Conversies beginnen met een effectieve landingspagina",
        description:
          "Het creëren van landingspagina's die visueel aantrekkelijk en geoptimaliseerd zijn voor conversies.",
        imgSrc: LandingspageLogo,
        imgAlt: "Landingspagina ontwerp met conversie optimalisatie",
        href: "/web-design/landingspagina",
      },
    ],
  },
  {
    title: "Web Development",
    href: "/web-development",
    description:
      "Vergroot uw online succes met een website die perfect inspeelt op SEO, responsief design en een intuïtieve gebruikerservaring.",
    dropdown: [
      {
        id: 1,
        title: "One Page Website (SPA)",
        catchPhrase: "Eenvoudig, snel en altijd binnen handbereik",
        description:
          "Een moderne, snel ladende website, geoptimaliseerd voor SEO en een vloeiende gebruikerservaring.",
        imgSrc: SpaIcon,
        imgAlt: "Website ontwerp met SEO optimalisatie",
        href: "/web-design/website",
      },
      {
        id: 2,
        title: "Multi Page Website",
        catchPhrase: "De professionele uitstraling die uw merk verdient",
        description:
          "Ideaal voor bedrijven met veel content: gemakkelijk schaalbaar en flexibel in indeling.",
        imgSrc: MultiPageIcon,
        imgAlt: "Nog iets logo ontwerp",
        href: "/web-design/logo",
      },
      {
        id: 3,
        title: "Web Shop",
        catchPhrase: "Meer verkopen met een betrouwbare online winkel",
        description:
          "Een overzichtelijke webshop die vertrouwen wekt en klanten aanzet tot actie.",
        imgSrc: WebshopIcon,
        imgAlt: "Professioneel logo ontwerp voor merkherkenning",
        href: "/web-design/logo",
      },
      {
        id: 4,
        title: "SEO Optimalisatie",
        catchPhrase: "Zichtbaar, vindbaar en klaar voor conversie",
        description:
          "Een geoptimaliseerde landingspagina die uw zichtbaarheid vergroot en conversies stimuleert.",
        imgSrc: SeoIcon,
        imgAlt: "Landingspagina ontwerp met conversie optimalisatie",
        href: "/web-design/landingspagina",
      },
    ],
  },
  {
    title: "Hosting",
    href: "/hosting",
    description:
      "Betrouwbare, schaalbare en veilige hostingoplossingen die perfect aansluiten bij de specifieke behoeften van jouw bedrijf",
    dropdown: [
      {
        id: 1,
        title: "Domeinregistratie",
        catchPhrase: "Wij vinden en registreren jouw perfecte domeinnaam",
        description:
          "Laat ons de perfecte domeinnaam voor je bedrijf vinden en registreren, zodat jij je kunt concentreren op wat echt belangrijk is.",
        imgSrc: DomeinRegistratie,
        imgAlt: "Domeinregistratie eenvoudig gemaakt",
        href: "/hosting/domein-registratie",
      },
      {
        id: 2,
        title: "Domein transfer",
        catchPhrase: "Breng jouw domein naar ons voor betere service.",
        description:
          "Verhuis je domein snel en probleemloos naar onze service. Wij zorgen voor een veilige en onderbrekingsvrije overgang.",
        imgSrc: DomeinTransfer,
        imgAlt: "Eenvoudig je domein verhuizen",
        href: "/hosting/domein-transfer",
      },
      {
        id: 3,
        title: "Webhosting",
        catchPhrase: "Snelle en betrouwbare hosting voor jouw website",
        description:
          "Met onze hosting blijft je website snel en toegankelijk, of het nu een blog of zakelijke site betreft.",
        imgSrc: BasicHosting,
        imgAlt: "Betrouwbare webhosting voor jouw site",
        href: "/web-design/logo",
      },
      {
        id: 4,
        title: "Premium hosting",
        catchPhrase: "Voor veeleisende websites en webshops.",
        description:
          "Geoptimaliseerde hosting voor sites en webshops die hoge prestaties en schaalbaarheid vereisen.",
        imgSrc: PremiumHosting,
        imgAlt: "Premium hosting voor groeiende bedrijven",
        href: "/web-design/logo",
      },
    ],
  },
  {
    title: "Over ons",
    href: "/over-ons",
    description:
      "Leer meer over ons vakmanschap en onze passie voor digitale innovatie.",
    dropdown: [
      {
        id: 1,
        title: "Over ons",
        catchPhrase:
          "Ontdek onze visie en wat ons drijft om innovatieve digitale oplossingen te bieden",
        description:
          "Wij zijn een team van experts die bedrijven ondersteunen bij het realiseren van hun potentieel door middel van digitale oplossingen, met een sterke focus op kwaliteit, klantgerichtheid en duurzame groei",
        imgSrc: OverOns,
        imgAlt: "Icon displaying  3 people , illustrating the about us section",
        href: "/over-ons",
      },
      {
        id: 2,
        title: "Onderscheidingen en erkenningen",
        catchPhrase:
          "Onze erkenningen en prijzen bevestigen onze toewijding aan kwaliteit en innovatie.",
        description:
          "We zijn trots op de onderscheidingen en certificaten die we hebben ontvangen, waaronder de [naam van prijs/certificaat]. Deze erkenningen onderstrepen onze inzet voor uitmuntendheid in alles wat we doen.",
        imgSrc: Erkenning,
        imgAlt: "Erkenning en prijzen die ons werk waarderen",
        href: "/over-ons/onderscheidingen-en-erkenningen",
      },
    ],
  },
    {
      title: "Contact",
      href: "/contact",
      description: "Neem contact met ons op voor meer informatie of om samen te werken aan digitale oplossingen.",
      dropdown: [
        {
          id: 1,
          title: "E-mail",
          catchPhrase: "We staan klaar om jouw vragen te beantwoorden en samen te werken aan op maat gemaakte digitale oplossingen.",
          description:
            "Ons team is beschikbaar om jouw vragen te beantwoorden en advies te bieden over hoe we jouw bedrijf verder kunnen helpen. Of je nu geïnteresseerd bent in een project, meer informatie zoekt, of gewoon een vraag hebt, wij zorgen voor een snelle en efficiënte reactie.",
          imgSrc: Email,
          imgAlt: "Icon displaying  an email",
          href: "/contact-form",
        },
        {
          id: 2,
          title: "WhatsApp",
          catchPhrase: "Snel en persoonlijk contact via WhatsApp – we zijn altijd bereikbaar voor jou.",
          description:
            "Voor directe en persoonlijke communicatie kun je ons eenvoudig bereiken via WhatsApp. Stuur ons een bericht en we zorgen ervoor dat je snel een antwoord krijgt op jouw vraag of verzoek.",
          imgSrc: Whatsapp,
          imgAlt: "Icon displaying the logo of whatsapp",
          href: "/whatsapp",
        }
      ]
    }
];

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
            <div className=" mb-24 h-fit space-y-6  ">
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
