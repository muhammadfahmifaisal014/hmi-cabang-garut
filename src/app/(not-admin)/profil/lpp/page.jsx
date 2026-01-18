import React from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Instagram } from "lucide-react";

export const revalidate = 0; // Disable static caching for this page

export const metadata = {
  title: "Lembaga Pengembangan Profesi",
  description: "Lembaga Pengembangan Profesi HMI Cabang Garut Periode 2025-2026",
};

const MemberCard = ({ name, position, img, instagram }) => {
  const username = instagram || "hmicabanggarut";
  const igUrl = `https://www.instagram.com/${username}`;

  return (
    <div className="w-48 bg-[#FFA600] rounded-[2rem] p-3 flex flex-col items-center shadow-lg transition-transform transform hover:-translate-y-2 border-2 border-white/40 group">
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
      <div className="bg-white px-3 py-1.5 rounded-full mt-[-16px] z-10 shadow-sm border border-gray-100 max-w-[95%]">
        <h3 className="text-[#004E26] text-[10px] font-black uppercase text-center truncate leading-tight">
          {name}
        </h3>
      </div>

      {/* Position Pill */}
      <div className="mt-2 border border-white bg-[#FFA600] px-4 py-1 rounded-full shadow-sm">
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

const LPPSection = ({ title, description, chairman }) => (
  <div className="w-full bg-[#004e26] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 border-l-4 border-[#FFA600] shadow-lg hover:shadow-2xl transition-shadow">
    {/* TEXT CONTENT (Left) */}
    <div className="flex-1 text-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1.5 h-8 bg-[#FFA600] rounded-full"></div>
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">{title}</h2>
      </div>
      <p className="text-sm md:text-base leading-relaxed text-gray-200 text-justify opacity-90">
        {description}
      </p>
    </div>

    {/* CHAIRMAN CARD (Right) */}
    <div className="flex-shrink-0">
      <MemberCard {...chairman} />
    </div>
  </div>
);

export default async function LPPPage() {

  // Fetch data from Supabase
  const { data: dbData, error } = await supabase
    .from("lpp")
    .select("*")
    .order("created_at", { ascending: true });

  let lppData = [];

  if (error || !dbData || dbData.length === 0) {
    if (error) console.error("Error fetching LPP data:", error);
  } else {
    lppData = dbData.map(item => ({
      title: item.title,
      description: item.description,
      chairman: {
        name: item.chairman_name,
        position: item.chairman_position,
        img: item.chairman_image,
        instagram: item.chairman_instagram
      }
    }));
  }

  return (
    <div className="w-full bg-[#0fa156] text-white font-sans pb-20">

      {/* PAGE HEADER */}
      <section className="bg-transparent pt-32 pb-8 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="inline-block border border-white rounded-lg px-4 py-1 mb-4 backdrop-blur-sm bg-white/10">
          <span className="text-white font-bold uppercase tracking-widest text-sm">
            Lembaga Pengembangan Profesi
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

      {/* CONTENT LIST */}
      <div className="max-w-6xl mx-auto px-4 mt-8 space-y-8">
        {lppData.length > 0 ? (
          lppData.map((item, index) => (
            <LPPSection key={index} {...item} />
          ))
        ) : (
          <div className="bg-white/10 rounded-xl p-8 text-center backdrop-blur-sm">
            <p className="text-xl font-medium">Belum ada data lembaga yang ditampilkan.</p>
            <p className="text-sm opacity-70 mt-2">Silakan tambahkan data melalui halaman Admin.</p>
          </div>
        )}
      </div>

      {/* FOOTER MESSAGE */}
      <div className="text-center mt-20 opacity-80">
        <h2 className="text-4xl font-black italic mb-2">#HMIVISIONER</h2>
        <p className="tracking-[0.3em] font-light">KONSISTEN DALAM KEBENARAN</p>
      </div>

    </div>
  );
}
