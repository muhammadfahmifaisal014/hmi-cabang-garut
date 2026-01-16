import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hubungi Kami HMI Cabang Garut",
  description: "Kontak dan informasi sekretariat HMI Cabang Garut",
};

export default function HubungiKamiPage() {
  return (
    <div className="w-full bg-[#0fa156] text-white font-sans pb-20">

      {/* PAGE HEADER */}
      <section className="bg-transparent pt-32 pb-8 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="inline-block border border-white rounded-lg px-4 py-1 mb-4 backdrop-blur-sm bg-white/10">
          <span className="text-white font-bold uppercase tracking-widest text-sm">
            KONTAK KAMI
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase leading-none drop-shadow-md text-left">
          HIMPUNAN MAHASISWA ISLAM <br />
          CABANG GARUT
          <span className="inline-block bg-orange-500 text-white px-4 ml-0 md:ml-4 rounded-lg transform -skew-x-6 mt-2 md:mt-0 text-3xl md:text-5xl border-2 border-white">
            Periode 2025-2026
          </span>
        </h1>
      </section>

      {/* TOP CONTAINER: ADDRESS & INVITATION */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="bg-[#004e26] rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 items-center lg:items-center">

          {/* LEFT CONTENT: Contact Details */}
          <div className="flex-1 space-y-8 w-full">
            {/* Alamat */}
            <div className="flex items-start gap-6">
              <div className="bg-orange-400 p-4 rounded-full flex-shrink-0 shadow-lg">
                {/* Location Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl md:text-2xl mb-1">Sekretariat</h3>
                <p className="opacity-90 leading-relaxed text-sm md:text-base">
                  Jl. Cimanuk No.112, Jayawaras, Kec. Tarogong Kidul,<br />
                  Kabupaten Garut, Jawa Barat 44151
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6">
              <div className="bg-orange-400 p-4 rounded-full flex-shrink-0 shadow-lg">
                {/* Email Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl md:text-2xl mb-1">Email Support</h3>
                <p className="opacity-90 text-sm md:text-base">komdigihmigarut2023@gmail.com</p>
              </div>
            </div>

            {/* Phone/WA */}
            <div className="flex items-start gap-6">
              <div className="bg-orange-400 p-4 rounded-full flex-shrink-0 shadow-lg">
                {/* Phone Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl md:text-2xl mb-1">Let's Talk</h3>
                <p className="opacity-90 text-sm md:text-base">0888-8888-8888</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: Invitation Box */}
          <div className="bg-[#003d1e] rounded-[2rem] p-8 md:p-10 text-center w-full lg:w-96 shadow-lg border-2 border-white/10 flex flex-col items-center">
            <div className="bg-white rounded-full p-4 mb-6 shadow-md w-24 h-24 flex items-center justify-center">
              {/* Clipboard/Invite Icon SVG - Styled closely to the image */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#2c3e50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-2xl md:text-3xl mb-6">Kontak Undangan<br />HMI Cabang Garut</h3>
            <Link href="https://wa.me/6288888888888" target="_blank" className="bg-[#FFA600] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 inline-block uppercase text-sm tracking-widest">
              UNDANG SEKARANG
            </Link>
          </div>
        </div>
      </div>

      {/* SOCIAL MEDIA SECTION */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 drop-shadow-md">Follow Our Social Media</h2>
        <div className="flex flex-wrap justify-center gap-6">

          {/* IG */}
          <Link href="#" className="transform hover:scale-110 transition-transform">
            <div className="w-[60px] h-[60px] bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-100 overflow-hidden">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#f09433", stopOpacity: 1 }} />
                    <stop offset="25%" style={{ stopColor: "#e6683c", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "#dc2743", stopOpacity: 1 }} />
                    <stop offset="75%" style={{ stopColor: "#cc2366", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#bc1888", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect width="24" height="24" fill="url(#igGradient)" />
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#FFF" />
              </svg>
            </div>
          </Link>

          {/* Email (Gmail Style) */}
          <Link href="#" className="transform hover:scale-110 transition-transform">
            <div className="w-[60px] h-[60px] bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-100 p-3">
              {/* Gmail M Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                <path fill="#EA4335" d="M24 37L7 24v14c0 2.21 1.79 4 4 4h9V37z" />
                <path fill="#34A853" d="M28 37v5h9c2.21 0 4-1.79 4-4V24L24 37z" />
                <path fill="#4285F4" d="M41 12v22L24 24 41 11c0-1.66-1.34-3-3-3h-4l-10 7.5z" />
                <path fill="#FBBC04" d="M10 8h4l10 7.5L7 24V11c0-1.66 1.34-3 3-3z" />
              </svg>
            </div>
          </Link>

          {/* Youtube */}
          <Link href="#" className="transform hover:scale-110 transition-transform">
            <div className="w-[60px] h-[60px] bg-[#FF0000] rounded-xl flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="30" height="30">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </Link>

          {/* WhatsApp */}
          <Link href="#" className="transform hover:scale-110 transition-transform">
            <div className="w-[60px] h-[60px] bg-[#25D366] rounded-xl flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="35" height="35">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.585 1.961.936 2.796.936 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.769-5.768-5.769V6.172zm-9 5.766C3.033 8.069 7.07 4 12.031 4c4.965 0 9 4.037 9 9s-4.035 9-9 9c-1.353 0-3.085-.353-4.498-1.071L3 22l1.989-4.811c-.965-1.579-1.958-3.376-1.958-5.253z" />
              </svg>
            </div>
          </Link>

          {/* TikTok */}
          <Link href="#" className="transform hover:scale-110 transition-transform">
            <div className="w-[60px] h-[60px] bg-black rounded-xl flex items-center justify-center shadow-lg border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32" height="32">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </div>
          </Link>

        </div>
      </div>

      {/* MAP SECTION */}
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <div className="inline-block border rounded-full px-6 py-1 mb-8">
          <span className="font-bold uppercase tracking-widest">LOKASI SEKRETARIAT</span>
        </div>

        <div className="w-full h-[300px] md:h-[450px] bg-gray-300 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#FFA600] relative">
          {/* Using an Iframe for Google Maps Embed */}
          <iframe
            src="https://maps.google.com/maps?q=Jl.+Cimanuk+No.112,+Jayawaras,+Kec.+Tarogong+Kidul,+Kabupaten+Garut,+Jawa+Barat+44151&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map HMI Cabang Garut"
          ></iframe>
        </div>
      </div>


      {/* FOOTER MESSAGE */}
      <div className="text-center mt-20 opacity-80">
        <h2 className="text-4xl font-black italic mb-2">#HMIVISIONER</h2>
        <p className="tracking-[0.3em] font-light">KONSISTEN DALAM KEBENARAN</p>
      </div>

    </div>
  );
}
