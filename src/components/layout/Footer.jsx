import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Globe, Instagram, Mail, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00773A] text-white">
      {/* Container Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Kolom 1: Branding */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/img/LogoHMI1.png"
              alt="Logo HMI"
              width={35}
              height={50}
              className="object-contain"
            />
            <Image
              src="/img/LogoHMI2.png"
              alt="Logo Cabang Garut"
              width={70}
              height={50}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">
              HIMPUNAN MAHASISWA ISLAM CABANG GARUT
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-200">
              Meneguhkan Peran Kader sebagai Pelopor, Penggerak, dan Pelangsung Perjuangan Umat dan Bangsa.
            </p>
          </div>
        </div>

        {/* Kolom 2: Useful Link */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#FFA600]">Useful Link</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/profil" className="hover:text-orange-300 transition-colors">Profil</Link>
            </li>
            <li>
              <Link href="#hmi-visioner" className="hover:text-orange-300 transition-colors">HMI Visioner</Link>
            </li>
            <li>
              <Link href="/struktur-pengurus" className="hover:text-orange-300 transition-colors">Struktur Pengurus</Link>
            </li>
            <li>
              <Link href="/galeri" className="hover:text-orange-300 transition-colors">Galeri</Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Info */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#FFA600]">Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/berita" className="hover:text-orange-300 transition-colors">Berita</Link>
            </li>
            <li>
              <Link href="/event" className="hover:text-orange-300 transition-colors">Event</Link>
            </li>
            <li>
              <Link href="/training-raya" className="hover:text-orange-300 transition-colors">Training</Link>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Media Sosial */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#FFA600]">Media Sosial</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Globe size={18} className="text-white" />
              <a href="https://hmicabanggarut.or.id" target="_blank" className="hover:text-orange-300 transition-colors">hmicabanggarut.or.id</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={18} className="text-white" />
              <a href="https://instagram.com/hmi.cabanggarut" target="_blank" className="hover:text-orange-300 transition-colors">@hmi.cabanggarut</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-white" />
              <a href="mailto:hmicabanggarut2023@gmail.com" className="hover:text-orange-300 transition-colors">hmicabanggarut2023@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Youtube size={18} className="text-white" />
              <a href="#" className="hover:text-orange-300 transition-colors">HMI Cabang Garut</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={18} className="text-white" />
              <a href="#" className="hover:text-orange-300 transition-colors">Saluran WA Official</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bagian Bawah: Copyright */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center md:text-left md:flex md:justify-between items-center text-sm text-gray-300">

          <div className="mb-2 md:mb-0">
            <p>Sekretariat: Jl. Cimanuk No.112, Jayawaras, Kec. Tarogong Kidul, Kab. Garut, Jawa Barat 44151</p>
          </div>

          <div className="text-xs opacity-80">
            © Copyright HMI Cabang Garut 2025. All rights reserved. <br className="md:hidden" />
            Dikelola oleh Bidang Komunikasi Digital
          </div>
        </div>
      </div>
    </footer>
  );
}
