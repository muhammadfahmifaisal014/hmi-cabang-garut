"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../element/Button";

const menuList = [
  { name: "BERANDA", href: "/" },
  {
    name: "PROFIL",
    href: "#",
    subMenu: [
      { name: "HMI Cabang Garut", href: "/profil" },
      { name: "HMI Visioner", href: "/profil/hmi-visioner" },
      { name: "Struktur Pengurus Cabang", href: "/profil/struktur-pengurus" },
      { name: "Lembaga Pengembangan Profesi (LPP)", href: "/profil/lpp" },
      { name: "Daftar Ketua Umum HMI Cabang Garut", href: "/profil/ketua-umum" },
    ],
  },
  {
    name: "INFO",
    href: "#",
    subMenu: [
      { name: "Berita", href: "/info/berita" },
      { name: "Event", href: "/info/event" },
      { name: "Training", href: "/info/training" },
    ]
  },
  { name: "GALERI", href: "/galeri" },
  { name: "KONTAK", href: "/hubungi-kami" },
];

export default function NavbarMobile({ className }) {
  const [isOpen, setIsOpen] = useState(true); // true means hidden (translated up)
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleOpen = () => setIsOpen(!isOpen);

  const toggleSubMenu = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };

  return (
    <nav
      className={`relative flex items-center justify-around w-full text-xl text-white font-heading ${className}`}>
      <Link href="/">
        <Image
          src="/img/logohmiputih.png"
          alt="Logo HMI Putih"
          width={45}
          height={55}
        />
      </Link>
      <ul
        className={`flex flex-col absolute -top-5 bg-gradient-to-b from-[#004521]/100 to-[#5a224e]/0 z-[-1] pt-32 w-full pb-[900px] gap-1 items-center justify-center transition-all ease-in-out duration-500 p-4 ${isOpen ? "-translate-y-full" : "translate-y-0"
          }`}>
        {menuList.map((item, index) => (
          <li
            key={index}
            className={`w-full mb-1 text-start bg-[#0F0F0F]/60 hover:bg-[#0F0F0F] rounded-md`}>

            {item.subMenu ? (
              <>
                <div
                  onClick={() => toggleSubMenu(index)}
                  className="cursor-pointer w-full flex justify-between items-center text-white p-2 text-[15px]"
                >
                  {item.name}
                  <span className={`transform transition-transform duration-300 ${activeSubMenu === index ? "rotate-180" : ""}`}>▼</span>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeSubMenu === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="bg-[#000000]/40 rounded-b-md pb-2">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          onClick={handleOpen}
                          className="block text-gray-200 hover:text-[#FFA600] p-2 pl-6 text-[14px]"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link
                onClick={handleOpen}
                href={item.href}
                className="cursor-pointer w-full block text-white p-2 text-[15px]">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-4 ">
        <li>
          <Button
            className={`block`}
            onClick={handleOpen}>
            <Image
              src={isOpen ? "/svg/icon/toggle-off.svg" : "/svg/icon/toggle-on.svg"}
              className="w-[auto] h-5 "
              width={200}
              height={200}
              alt="logo"
            />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
