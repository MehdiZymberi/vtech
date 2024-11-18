import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";


export default function MainNavbar() {
  return (
    <header className="mx-w-7xl bg-transparent ">
    <DesktopNavbar/>
    <MobileNavbar/>
    </header>
  );
}
