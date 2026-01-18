import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export const metadata = {
  title: "Struktur Pengurus",
  description: "Struktur Pengurus HMI Cabang Garut Periode 2025-2026",
};

const MemberCard = ({ name, position, img, instagram }) => {
  const username = instagram || "hmicabanggarut"; // Default username
  const igUrl = `https://www.instagram.com/${username}`;

  return (
    <div className="w-56 bg-[#FFA600] rounded-[2rem] p-3 flex flex-col items-center shadow-lg transition-transform transform hover:-translate-y-2 border-2 border-white/40 group">
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
      <Link
        href={igUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer"
      >
        <Instagram size={14} className="text-white" />
        {/* <span className="text-white text-[9px] font-medium tracking-wide">@{username}</span> */}
      </Link>
    </div>
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
