import React from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Galeri HMI Cabang Garut",
  description: "Dokumentasi kegiatan dan arsip HMI Cabang Garut",
};

export const revalidate = 0; // Disable static caching to ensure fresh data

const GallerySection = ({ title, data }) => (
  <div className="bg-[#004e26] p-8 md:p-12 rounded-[3rem] border-4 border-white/20 shadow-2xl relative">
    {/* Section Title Pill */}
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
      <div className="bg-[#004e26] border-2 border-white px-10 py-2 rounded-full shadow-lg">
        <h2 className="text-white font-black text-sm md:text-lg uppercase tracking-wider text-center whitespace-nowrap">
          {title}
        </h2>
      </div>
    </div>

    {/* Content Grid (Client Component) */}
    <GalleryGrid data={data} />

    {/* More Button */}
    {data && data.length > 3 && (
      <div className="flex justify-center mt-8">
        <button className="bg-[#FFA600] text-white px-8 py-2 rounded-full font-bold uppercase hover:bg-orange-600 transition-colors shadow-lg flex items-center gap-2 text-xs md:text-sm">
          MORE <span className="text-[10px]">▼</span>
        </button>
      </div>
    )}
  </div>
);

async function getGalleryData() {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching gallery:", error);
    return [];
  }
  return data;
}

export default async function GaleriPage() {
  const galleryItems = await getGalleryData();

  // Filter items by category
  const dokumentasiList = galleryItems.filter(item => item.category === 'kegiatan');
  const logoList = galleryItems.filter(item => item.category === 'logo');
  const dokumenList = galleryItems.filter(item => item.category === 'dokumen');

  return (
    <div className="w-full bg-[#0fa156] text-white font-sans pb-20">

      {/* PAGE HEADER */}
      <section className="bg-transparent pt-32 pb-6 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="inline-block border border-white rounded-lg px-4 py-1 mb-4 backdrop-blur-sm bg-white/10">
          <span className="text-white font-bold uppercase tracking-widest text-sm">
            GALERI
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-end md:justify-between gap-4">
          <h1 className="text-3xl md:text-5xl font-black uppercase leading-none drop-shadow-md text-left max-w-3xl">
            HIMPUNAN MAHASISWA ISLAM <br />
            CABANG GARUT <span className="text-[#FFA600] bg-white/10 px-2 rounded-lg">Periode 2025-2026</span>
          </h1>
        </div>
      </section>

      {/* SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 space-y-20 mt-12">

        {/* Section 1: DOKUMENTASI KEGIATAN */}
        <GallerySection title="DOKUMENTASI KEGIATAN" data={dokumentasiList} />

        {/* Section 2: LOGO-LOGO */}
        <GallerySection title="LOGO-LOGO SEPUTAR HMI CABANG GARUT" data={logoList} />

        {/* Section 3: DOKUMEN */}
        <GallerySection title="DOKUMEN" data={dokumenList} />

      </div>

      {/* FOOTER MESSAGE */}
      <div className="text-center mt-20 opacity-80">
        <h2 className="text-4xl font-black italic mb-2">#HMIVISIONER</h2>
        <p className="tracking-[0.3em] font-light">KONSISTEN DALAM KEBENARAN</p>
      </div>

    </div>
  );
}
