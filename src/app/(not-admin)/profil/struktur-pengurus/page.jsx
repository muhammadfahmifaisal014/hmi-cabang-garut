import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link

export const metadata = {
  title: "Struktur Pengurus",
  description: "Struktur Pengurus HMI Cabang Garut Periode 2025-2026",
};

const MemberCard = ({ name, position, img, instagram }) => {
  const username = instagram || "hmicabanggarut"; // Default username
  const igUrl = `https://www.instagram.com/${username}`;

  return (
    <Link href={igUrl} target="_blank" rel="noopener noreferrer">
      <div className="w-56 bg-[#FFA600] rounded-[2rem] p-3 flex flex-col items-center shadow-lg transition-transform transform hover:-translate-y-2 border-2 border-white/40 cursor-pointer group">
        {/* Image Container */}
        <div className="w-full aspect-[4/5] bg-white rounded-2xl overflow-hidden relative shadow-inner">
          {img ? (
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
              <span className="text-4xl">?</span>
            </div>
          )}
        </div>

        {/* Name Pill */}
        <div className="bg-white px-4 py-1.5 rounded-full mt-[-16px] z-10 shadow-sm border border-gray-100 max-w-[95%]">
          <h3 className="text-[#004E26] text-[10px] md:text-[11px] font-black uppercase text-center truncate leading-tight">
            {name}
          </h3>
        </div>

        {/* Position Pill */}
        <div className="mt-3 border border-white bg-[#FFA600] px-4 py-1 rounded-full shadow-sm">
          <p className="text-white text-[9px] font-bold uppercase tracking-wider whitespace-nowrap">
            {position}
          </p>
        </div>

        {/* Instagram Section */}
        <div className="mt-2 flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
          {/* Inline SVG for Instagram with Gradient */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="igGradientSmall" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#f09433", stopOpacity: 1 }} />
                <stop offset="25%" style={{ stopColor: "#e6683c", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#dc2743", stopOpacity: 1 }} />
                <stop offset="75%" style={{ stopColor: "#cc2366", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#bc1888", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect width="24" height="24" rx="6" fill="url(#igGradientSmall)" />
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#FFF" />
          </svg>
          <span className="text-white text-[9px] font-medium tracking-wide">@{username}</span>
        </div>
      </div>
    </Link>
  );
};

const SectionTitle = ({ title }) => (
  <div className="flex items-center justify-center w-full my-8">
    <div className="bg-transparent border-2 border-white px-8 py-2 rounded-full shadow-lg backdrop-blur-sm">
      <h2 className="text-white font-black text-sm md:text-base uppercase tracking-wider text-center">
        {title}
      </h2>
    </div>
  </div>
);

import { supabase } from "@/lib/supabaseClient";

export default async function StrukturPengurusPage() {
  const { data: allMembers } = await supabase
    .from("members")
    .select("*")
    .order("created_at", { ascending: true }); // Or order by some other logic if needed

  const safeMembers = allMembers || [];

  // Helper to filter by department
  const getMembersByDept = (dept) =>
    safeMembers.filter(m => m.department === dept).map(m => ({
      name: m.name,
      position: m.position,
      img: m.image_url, // Allow null, MemberCard handles fallback
      instagram: m.instagram
    }));

  // --- DATA GROUP 1 (DALAM KOTAK HIJAU) ---

  // 1. KSB
  const ksb = getMembersByDept("KSB");

  // 2. Bidang Pembinaan Anggota (PA)
  const bidangPA = getMembersByDept("BIDANG PA");

  // 3. Bidang Pembinaan Aparatur Organisasi (PAO)
  const bidangPAO = getMembersByDept("BIDANG PAO");

  // 4. Bidang Komunikasi Digital
  const bidangKomdig = getMembersByDept("BIDANG KOMDIG");

  // --- DATA GROUP 2 (DI LUAR) ---

  // 1. Bidang KPP
  const bidangKPP = getMembersByDept("BIDANG KPP");

  // 2. Bidang PTKP
  const bidangPTKP = getMembersByDept("BIDANG PTKP");

  // 3. Bidang PPD
  const bidangPPD = getMembersByDept("BIDANG PPD");

  // 4. Bidang Pemberdayaan Umat (PU)
  const bidangPU = getMembersByDept("BIDANG PU");

  // 5. Bidang Hukum & HAM (HUMHAM)
  const bidangHumHam = getMembersByDept("BIDANG HUMHAM");


  return (
    <div className="w-full bg-[#0fa156] text-white font-sans pb-20">

      {/* PAGE HEADER */}
      <section className="bg-transparent pt-32 pb-8 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="inline-block border border-white rounded-lg px-4 py-1 mb-4 backdrop-blur-sm bg-white/10">
          <span className="text-white font-bold uppercase tracking-widest text-sm">
            STRUKTUR PENGURUS
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase leading-none drop-shadow-md text-left">
          HIMPUNAN MAHASISWA ISLAM <br />
          CABANG GARUT
          <span className="inline-block bg-orange-500 text-white px-4 ml-0 md:ml-4 rounded-lg transform -skew-x-6 mt-2 md:mt-0 text-3xl md:text-5xl border-2 border-white">
            PERIODE 2025-2026
          </span>
        </h1>
      </section>

      {/* CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 mt-8 space-y-12">

        {/* === GROUP 1: DARK GREEN ZONE === */}
        <div className="bg-[#00773A] p-8 md:p-12 rounded-[3rem] border-4 border-white/20 shadow-2xl space-y-16">

          {/* 1. KSB */}
          <div>
            <SectionTitle title="KSB" />
            <div className="flex flex-wrap justify-center gap-10">
              {ksb.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
          </div>

          {/* 2. BIDANG PA */}
          <div>
            <SectionTitle title="BIDANG PEMBINAAN ANGGOTA (PA)" />
            <div className="flex flex-col gap-10">
              <div className="flex flex-wrap justify-center gap-10">
                {bidangPA.slice(0, 3).map((member, i) => <MemberCard key={i} {...member} />)}
              </div>
              <div className="flex flex-wrap justify-center gap-10">
                {bidangPA.slice(3).map((member, i) => <MemberCard key={i + 3} {...member} />)}
              </div>
            </div>
          </div>

          {/* 3. BIDANG PAO */}
          <div>
            <SectionTitle title="BIDANG PEMBINAAN APARATUR ORGANISASI (PAO)" />
            <div className="flex flex-col gap-10">
              <div className="flex flex-wrap justify-center gap-10">
                {bidangPAO.slice(0, 3).map((member, i) => <MemberCard key={i} {...member} />)}
              </div>
              <div className="flex flex-wrap justify-center gap-10">
                {bidangPAO.slice(3).map((member, i) => <MemberCard key={i + 3} {...member} />)}
              </div>
            </div>
          </div>

          {/* 4. KOMUNIKASI DIGITAL */}
          <div>
            <SectionTitle title="BIDANG KOMUNIKASI DIGITAL" />
            <div className="flex flex-wrap justify-center gap-10">
              {bidangKomdig.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
          </div>

        </div>
        {/* === END GROUP 1 === */}


        {/* === GROUP 2: OUTSIDE (MAIN BG) === */}
        <div className="space-y-16 py-8">

          {/* 1. KPP */}
          <div>
            <SectionTitle title="BIDANG KEWIRAUSAHAAN & PENGEMBANGAN PROFESI (KPP)" />
            <div className="flex flex-wrap justify-center gap-10">
              {bidangKPP.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
          </div>

          {/* 2. PTKP */}
          <div>
            <SectionTitle title="BIDANG PERGURUAN TINGGI KEMAHASISWAAN & KEPEMUDAAN (PTKP)" />
            <div className="flex flex-wrap justify-center gap-10">
              {bidangPTKP.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
          </div>

          {/* 3. PPD */}
          <div>
            <SectionTitle title="BIDANG PARTISIPASI PEMBANGUNAN DAERAH (PPD)" />
            <div className="flex flex-wrap justify-center gap-10">
              {bidangPPD.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
          </div>

          {/* 4. PU */}
          <div>
            <SectionTitle title="BIDANG PEMBERDAYAAN UMAT (PU)" />
            <div className="flex flex-wrap justify-center gap-10">
              {bidangPU.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
          </div>

          {/* 5. HUMHAM */}
          <div>
            <SectionTitle title="BIDANG HUKUM & HAM (HUMHAM)" />
            <div className="flex flex-wrap justify-center gap-10">
              {bidangHumHam.map((member, i) => <MemberCard key={i} {...member} />)}
            </div>
          </div>

        </div>
        {/* === END GROUP 2 === */}

      </div>

      {/* FOOTER MESSAGE */}
      <div className="text-center mt-20 opacity-80">
        <h2 className="text-4xl font-black italic mb-2">#HMIVISIONER</h2>
        <p className="tracking-[0.3em] font-light">KONSISTEN DALAM KEBENARAN</p>
      </div>

    </div>
  );
}
