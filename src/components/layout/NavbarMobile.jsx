"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

// Menu Data
const menuList = [
  { name: "BERANDA", href: "/" },
  {
    name: "PROFIL",
    href: "#",
    subMenu: [
      { name: "HMI Cabang Garut", href: "/profil" },
      { name: "HMI Visioner", href: "/profil/hmi-visioner" },
      { name: "Struktur Pengurus", href: "/profil/struktur-pengurus" },
      { name: "LPP", href: "/profil/lpp" },
      { name: "Ketua Umum", href: "/profil/ketua-umum" },
    ],
  },
  {
    name: "INFO",
    href: "#",
    subMenu: [
      { name: "Berita", href: "/info/berita" },
      { name: "Event", href: "/info/event" },
      { name: "Training", href: "/info/training" },
    ],
  },
  { name: "GALERI", href: "/galeri" },
  { name: "KONTAK", href: "/hubungi-kami" },
];

export default function NavbarMobile({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <nav className={`w-full h-full flex items-center justify-between px-6 ${className}`}>

      {/* Logo Area */}
      <Link href="/" onClick={() => setIsOpen(false)} className="relative z-[1001]">
        <div className="flex items-center gap-3">
          <Image
            src="/img/logohmiputih.png"
            alt="Logo HMI"
            width={40}
            height={50}
            className="object-contain"
          />
          <span className="font-bold text-white text-sm leading-tight tracking-wide">
            HMI CABANG <br /> GARUT
          </span>
        </div>
      </Link>

      {/* Hamburger Toggle */}
      <button
        onClick={toggleMenu}
        className="text-white relative z-[1001] p-2 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#00773A] z-[1000] flex flex-col pt-24 px-6 transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* Menu Items */}
        <ul className="flex flex-col gap-2 w-full h-full overflow-y-auto pb-20 relative z-10 no-scrollbar">
          {menuList.map((item, index) => (
            <li key={index} className="w-full border-b border-white/10 last:border-0">

              {/* Parent Item */}
              <div
                className="py-4 flex justify-between items-center text-white font-bold text-lg tracking-wider cursor-pointer group"
                onClick={() => (item.subMenu ? toggleSubMenu(index) : setIsOpen(false))}
              >
                {item.subMenu ? (
                  <span className="flex-1 flex justify-between items-center" onClick={(e) => { e.stopPropagation(); toggleSubMenu(index); }}>
                    {item.name}
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${activeSubMenu === index ? "rotate-180" : ""}`}
                    />
                  </span>
                ) : (
                  <Link href={item.href} onClick={() => setIsOpen(false)} className="block w-full">
                    {item.name}
                  </Link>
                )}
              </div>

              {/* Sub Menu */}
              {item.subMenu && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-black/10 rounded-lg ${activeSubMenu === index ? "max-h-[500px] mb-4" : "max-h-0"
                    }`}
                >
                  <ul className="p-2 space-y-1">
                    {item.subMenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-sm font-medium transition-colors"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}

          {/* Login Button Mobile */}

        </ul>

      </div>
    </nav>
  );
}
