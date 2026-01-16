import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Galeri HMI Cabang Garut",
  description: "Dokumentasi kegiatan dan arsip HMI Cabang Garut",
};

const GalleryCard = ({ date, title, desc, img }) => (
  <div className="relative group w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-white/20">
    {/* Background Image */}
    <Image
      src={img}
      alt={title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/60 transition-colors duration-500" />

    {/* Content */}
    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col items-start text-white">
      <span className="text-[#FFA600] font-bold text-xs uppercase mb-2 tracking-wider drop-shadow-sm">{date}</span>
      <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-2 drop-shadow-md line-clamp-2">
        {title}
      </h3>
      {desc && (
        <p className="text-xs md:text-sm text-gray-200 mb-4 line-clamp-2 leading-relaxed opacity-90">
          {desc}
        </p>
      )}


      <button className="bg-[#FFA600] hover:bg-[#e69500] text-white text-[10px] md:text-xs font-bold py-2 px-6 rounded-full uppercase tracking-wider transition-all shadow-lg flex items-center gap-2">
        Discover More
        <span className="text-[8px]">▼</span>
      </button>
    </div>
  </div>
);

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

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {data.map((item, index) => (
        <GalleryCard key={index} {...item} />
      ))}
    </div>

    {/* More Button */}
    <div className="flex justify-center mt-8">
      <button className="bg-[#FFA600] text-white px-8 py-2 rounded-full font-bold uppercase hover:bg-orange-600 transition-colors shadow-lg flex items-center gap-2 text-xs md:text-sm">
        MORE <span className="text-[10px]">▼</span>
      </button>
    </div>
  </div>
)

export default function GaleriPage() {
  // 1. DOKUMENTASI KEGIATAN
  const dokumentasiList = [
    {
      date: "18 April 2025",
      title: "RAKER Pengurus HMI Cabang Garut",
      desc: "Villa Anugerah, 18 Juni 2025 - Dokumentasi pelaksanaan Rapat Kerja Pengurus.",
      img: "/img/bgEvent.jpg"
    },
    {
      date: "18 April 2025",
      title: "RAKER Pengurus HMI Cabang Garut",
      desc: "Villa Anugerah, 18 Juni 2025 - Dokumentasi pelaksanaan Rapat Kerja Pengurus.",
      img: "/img/bgEvent.jpg"
    },
    {
      date: "18 April 2025",
      title: "RAKER Pengurus HMI Cabang Garut",
      desc: "Villa Anugerah, 18 Juni 2025 - Dokumentasi pelaksanaan Rapat Kerja Pengurus.",
      img: "/img/bgEvent.jpg"
    },
  ];

  // 2. LOGO-LOGO SEPUTAR HMI CABANG GARUT
  const logoList = [
    {
      date: "18 April 2025",
      title: "Logo HMI",
      desc: "Logo Himpunan Mahasiswa Islam.",
      img: "/img/hmivisioner/logo_visioner_green.png"
    },
    {
      date: "18 April 2025",
      title: "Logo KOHATI",
      desc: "Logo Korps HMI-Wati.",
      img: "/img/hmivisioner/logo_visioner_green.png"
    },
    {
      date: "18 April 2025",
      title: "Logo Milad HMI ke-78",
      desc: "Logo peringatan Milad HMI tahun 2025.",
      img: "/img/hmivisioner/logo_visioner_green.png"
    },
  ];

  // 3. DOKUMEN
  const dokumenList = [
    {
      date: "18 April 2025",
      title: "SEKOLAH INSTRUKTUR (SI)",
      desc: "Dokumen panduan dan modul Sekolah Instruktur.",
      img: "/img/event1.png"
    },
    {
      date: "18 April 2025",
      title: "SEKOLAH AKSI",
      desc: "Dokumen kurikulum Sekolah Aksi.",
      img: "/img/event2.png"
    },
    {
      date: "18 April 2025",
      title: "DIGITALENT HMI CABANG GARUT",
      desc: "Dokumen materi pelatihan Digital Talent.",
      img: "/img/event3.png"
    },
  ];

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
