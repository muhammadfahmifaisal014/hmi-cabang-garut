import React from "react";
import Image from "next/image";
import { Target, TrendingUp } from "lucide-react";

export const metadata = {
  title: "HMI Visioner",
  description: "Informasi mengenai HMI Visioner, Filosofi Logo, dan Visi Misi.",
};

export default function HmiVisionerPage() {
  return (
    <div className="w-full bg-[#E8F5E9] text-[#1a4d2e] font-sans">

      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-white to-[#d0e8d5] rounded-br-[100px] -z-10"></div>
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <span className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold tracking-wide">
              HMI CABANG GARUT 2025-2026
            </span>
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-[#0fa156] leading-none mb-2">
                #HMIVISIONER
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-[#1a4d2e] italic tracking-wider">
                KONSISTEN DALAM KEBENARAN
              </h2>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-md">
              Lembaga Pengembangan Profesi adalah lembaga kekaryaan untuk pengembangan profesi di lingkungan HMI.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg">
              SELENGKAPNYA ▾
            </button>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center">
            <div className="relative z-10">
              <Image
                src="/img/hmivisioner/logo_visioner_green.png"
                alt="HMI Visioner Logo"
                width={400}
                height={400}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FILOSOFI LOGO */}
      <section className="bg-[#00773A] text-white py-20 px-6 rounded-t-[50px] relative -mt-10 z-10 mx-4 md:mx-10 shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Description Text */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block border border-white/30 px-3 py-1 text-xs rounded mb-2">
              HMI VISIONER
            </div>
            <h2 className="text-4xl font-black mb-6">
              FILOSOFI LOGO
            </h2>
            <div className="space-y-4 text-sm text-gray-100 leading-relaxed text-justify">
              <p>
                Logo <strong>"W"</strong> yang menyerupai kurva naik dan panah melambangkan <strong>Growth (Pertumbuhan)</strong>, <strong>Movement (Pergerakan)</strong>, dan <strong>Progress (Kemajuan)</strong>.
                Warna hijau gradasi mencerminkan kesegaran, inovasi, dan nuansa Islami yang menjadi identitas HMI.
              </p>
              <p>
                Garis yang terus menyambung tanpa putus merepresentasikan <strong>Konsistensi</strong> dan <strong>Keberlanjutan</strong> kaderisasi.
                Bentuk yang dinamis dan fleksibel menggambarkan kemampuan HMI Cabang Garut untuk beradaptasi dengan perkembangan zaman namun tetap teguh pada prinsip.
              </p>
            </div>
          </div>

          {/* Logo Display */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/img/hmivisioner/logo_visioner_white.png"
              alt="Logo Visioner White"
              width={400}
              height={300}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: TEXT CONTENT (2 Columns) */}
      <section className="bg-[#0fa156] text-white py-24 px-6 relative overflow-hidden">
        {/* Watermark Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <Image
            src="/img/hmivisioner/logo_visioner_white.png"
            alt="Watermark"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black italic mb-2">#HMIVISIONER</h2>
            <p className="text-xl font-light tracking-widest uppercase">KONSISTEN DALAM KEBENARAN</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-base leading-relaxed text-justify text-gray-100">
            <p>
              HMI Visioner hadir sebagai respons terhadap tantangan zaman yang menuntut mahasiswa Islam untuk tidak hanya cakap secara intelektual, tetapi juga memiliki integritas moral yang kokoh. #HMIVISIONER bukan sekadar slogan, melainkan spirit perjuangan untuk mengembalikan marwah organisasi sebagai kawah candradimuka pemimpin bangsa. Kami berkomitmen untuk membangun budaya organisasi yang inklusif, progresif, dan berdaya saing.
            </p>
            <p>
              Konsistensi dalam kebenaran adalah prinsip utama yang kami pegang teguh. Dalam setiap langkah dan kebijakan, nilai-nilai keislaman dan keindonesiaan menjadi landasan utama. Melalui kepengurusan periode 2025-2026 ini, HMI Cabang Garut bertekad untuk melahirkan karya nyata dan kontribusi positif bagi agama, bangsa, dan negara, serta menjadi pelopor perubahan di Kabupaten Garut.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: VISI & MISI */}
      <section className="bg-[#0fa156] text-white py-20 px-6 pb-32 pt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* VISI */}
            <div className="bg-[#0b6b3e]/30 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-[#0b6b3e]/50 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center font-bold text-2xl flex-shrink-0 text-white">
                  <Target size={24} />
                </div>
                <h3 className="text-3xl font-bold">VISI</h3>
              </div>
              <p className="text-base leading-relaxed">
                Terwujudnya HMI Cabang Garut sebagai organisasi kader yang modern, progresif, dan berintegritas dalam mengawal kemajuan umat dan bangsa.
              </p>
            </div>

            {/* MISI */}
            <div className="bg-[#0b6b3e]/30 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-[#0b6b3e]/50 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center font-bold text-2xl flex-shrink-0 text-white">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-3xl font-bold">MISI</h3>
              </div>
              <ol className="list-decimal list-inside space-y-3 ps-2">
                <li>Menguatkan sistem perkaderan yang berbasis kompetensi dan spiritualitas.</li>
                <li>Mendorong partisipasi aktif kader dalam diskursus keintelektualan dan pemberdayaan masyarakat.</li>
                <li>Memodernisasi tata kelola organisasi berbasis teknologi informasi.</li>
                <li>Membangun sinergitas strategis dengan berbagai elemen untuk kemajuan daerah.</li>
              </ol>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: GROUP PHOTO */}
      <section className="relative w-full h-[500px] md:h-[600px] -mt-20 overflow-hidden">
        <Image
          src="/img/hmivisioner/group_photo.jpg"
          alt="Pelantikan Pengurus HMI"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004521] via-transparent to-transparent"></div>

        <div className="absolute bottom-10 left-0 w-full text-center">
          <Image
            src="/img/hmivisioner/logo_visioner_white.png"
            alt="Logo Small"
            width={150}
            height={150}
            className="mx-auto drop-shadow-md opacity-80"
          />
        </div>
      </section>

    </div>
  );
}
