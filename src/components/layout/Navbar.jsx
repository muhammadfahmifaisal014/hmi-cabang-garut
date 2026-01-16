import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
export default function Navbar() {
  return (
    <header
      className={`w-full py-0 fixed z-[999] top-0 h-20 px-0 md:px-10 transition duration-300 ease-in-out bg-[#00773A] flex items-center`}>
      <NavbarDesktop className="hidden md:flex" />
      <NavbarMobile className="flex md:hidden" />
    </header>
  );
}
