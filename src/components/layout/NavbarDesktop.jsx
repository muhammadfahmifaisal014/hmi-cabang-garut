import React from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function Navbar({ className }) {
  return (
    <nav
      className={`relative flex items-center my-2 justify-between w-full mx-auto text-sm font-bold text-white font-heading max-w-7xl ${className}`}>
      <Link
        href="/"
        className="flex items-center gap-3">
        <Image
          src="/img/logohmiputih.png"
          alt="Logo HMI Putih"
          width={45}
          height={55}
        />
        <div className="leading-tight">
          <p className="font-bold tracking-wide">HIMPUNAN MAHASISWA ISLAM</p>
          <p className="font-bold tracking-wide">CABANG GARUT</p>
        </div>
      </Link>
      <ul
        className={`flex z-[1] top-auto left-auto h-auto w-auto relative gap-8 items-center justify-end transition-all ease-in-out`}>
        {menuList.map((item, index) => (
          <li
            key={index}
            className="group relative cursor-pointer h-10 flex items-center">

            {/* If item has submenu, behave like a dropdown trigger */}
            {item.subMenu ? (
              <>
                <span className="flex items-center gap-1 hover:text-[#FFA600] transition-colors duration-300 tracking-wide">
                  {item.name}
                  <span className="text-[10px] transform group-hover:rotate-180 transition-transform duration-300">▼</span>
                </span>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="bg-[#FFA600] rounded-b-lg shadow-xl overflow-hidden py-2 flex flex-col text-white">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="px-4 py-2 hover:bg-orange-600 transition-colors text-sm font-medium border-b border-orange-400/30 last:border-0 block"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <Link
                href={item.href}
                className="cursor-pointer hover:text-[#FFA600] transition-colors duration-300 tracking-wide relative">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA600] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
