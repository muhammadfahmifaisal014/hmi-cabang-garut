import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Profil",
};

export default function ProfilPage() {
  const lppList = [
    "Lembaga Dakwah Mahasiswa Islam (LDMI)",
    "Lembaga Pers Mahasiswa Islam (LAPMI)",
    "Lembaga Teknologi Mahasiswa Islam (LTMI)",
    "Lembaga Ekonomi Mahasiswa Islam (LEMI)",
    "Lembaga Seni Budaya Mahasiswa Islam (LSBMI)",
    "Lembaga Konsultasi Bantuan Hukum Mahasiswa Islam (LKBHMI)",
  ];

  const komisariatList = [
    {
      name: "KOMISARIAT HMI SEKOLAH TINGGI HUKUM GARUT (STHG)",
      desc: "Komisariat yang berbasis di Kampus Sekolah Tinggi Hukum Garut. Memiliki fokus pada kajian hukum dan advokasi.",
      logo: "/img/komisariat/logo_hmi_vertical.png", // Temporarily using vertical logo or generic if needed, sticking to generic for now if not provided. Actually let's use the white one for missing ones.
    },
    {
      name: "KOMISARIAT HMI INSTITUT TEKNOLOGI GARUT (ITG)",
      desc: "Berbasis di Institut Teknologi Garut, fokus pada pengembangan teknologi dan sains dalam bingkai keislaman.",
      logo: "/img/komisariat/logo_itg.png",
    },
    {
      name: "KOMISARIAT HMI INSTITUT PENDIDIKAN INDONESIA (IPI) GARUT",
      desc: "Wadah perjuangan mahasiswa di lingkungan IPI Garut, menekankan pada aspek pendidikan dan keguruan.",
      logo: "/img/komisariat/logo_ipi.png",
    },
    {
      name: "KOMISARIAT HMI UNIVERSITAS GARUT (UNIGA)",
      desc: "Komisariat terbesar yang menaungi kader-kader dari berbagai fakultas di Universitas Garut.",
      logo: "/img/komisariat/logo_uniga.png",
    },
    {
      name: "KOMISARIAT HMI INSTITUT MUHAMMADIYAH DARUL ARQAM (GARUT/IMDAGA)",
      desc: "Berjuang di lingkungan kampus Muhammadiyah dengan semangat keislaman dan keindonesiaan.",
      logo: "/img/komisariat/logo_imdaga.png",
    },
    {
      name: "KOMISARIAT HMI SEKOLAH TINGGI AGAMA ISLAM MUSADDADIYAH (STAIM)",
      desc: "Fokus pada pendalaman ilmu-ilmu keislaman dan pergerakan di lingkungan STAIM.",
      logo: "/img/komisariat/logo_staim.png",
    },
    {
      name: "KOMISARIAT HMI INSTITUT AGAMA ISLAM PERSATUAN ISLAM (IPI) GARUT",
      desc: "Kaderisasi mahasiswa di lingkungan Persatuan Islam dengan nafas HMI.",
      logo: "/img/komisariat/logo_persis.png",
    },
    {
      name: "KOMISARIAT PERSIAPAN HMI SEKOLAH TINGGI ILMU EKONOMI (STIE) YASA ANGGANA GARUT",
      desc: "Mengembangkan potensi mahasiswa ekonomi dengan nilai-nilai HMI.",
      logo: "/img/komisariat/logo_stie.png",
    },
    {
      name: "KOMISARIAT PERSIAPAN HMI SEKOLAH TINGGI AGAMA ISLAM SILIWANGI (STAIS) GARUT",
      desc: "Komisariat persiapan yang mewadahi mahasiswa di STAIS Siliwangi Garut.",
      logo: "/img/komisariat/logo_stais.png",
    },
  ];

  return (
    <div className="w-full bg-[#0fa156] text-white overflow-hidden pb-20">
      {/* Container utama */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10">

        {/* SECTION 1: HEADER & LOGO BESAR */}
        <section className="flex flex-col md:flex-row items-start justify-between relative mb-20">
          <div className="md:w-2/3 pr-0 md:pr-10 z-10">
            <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded mb-4">
              PROFIL
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              HIMPUNAN MAHASISWA ISLAM
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-2xl opacity-90">
              Himpunan Mahasiswa Islam (HMI) adalah organisasi mahasiswa yang didirikan di Yogyakarta pada tanggal 14 Rabiul Awal 1366 H bertepatan dengan tanggal 5 Februari 1947, atas prakarsa Lafran Pane beserta 14 orang mahasiswa Sekolah Tinggi Islam (sekarang Universitas Islam Indonesia).
            </p>

            {/* Tujuan & Usaha Icons Section */}
            <div className="mt-12 space-y-10">
              {/* Tujuan */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {/* Icon Target Placeholder */}
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    {/* Menggunakan icon petir sebagai placeholder untuk "Usaha/Tujuan" yang energik, atau bisa diganti target */}
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">TUJUAN</h3>
                  <p className="text-sm leading-relaxed max-w-xl">
                    Terbinanya insan akademis, pencipta, pengabdi yang bernafaskan Islam, dan bertangung jawab atas terwujudnya masyarakat adil makmur yang diridhai Allah SWT.
                  </p>
                </div>
              </div>

              {/* Usaha */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {/* Icon Chart Placeholder */}
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">USAHA</h3>
                  <p className="text-sm leading-relaxed max-w-xl">
                    Melakukan pembinaan dan pengembangan potensi anggota, serta berperan aktif dalam dunia kemahasiswaan, perguruan tinggi dan kemasyarakatan untuk menyongsong masa depan umat dan bangsa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Big Vertical Banner Logo */}
          <div className="hidden md:block absolute right-0 top-0 w-1/4 h-full">
            <div className="bg-green-800/80 h-[120%] w-full flex items-center justify-center rounded-b-full overflow-hidden absolute -top-20">
              {/* Visual Representation of the vertical banner from design */}
              <div className="flex flex-col items-center justify-center space-y-4 text-white">
                <Image
                  src="/img/logohmiputih.png"
                  alt="Logo HMI"
                  width={100}
                  height={120}
                  className="opacity-80"
                />
                <h1 className="text-8xl font-black opacity-20 writing-vertical-rl" style={{ writingMode: 'vertical-rl' }}>
                  HMI
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT HMI CABANG GARUT */}
        <section className="bg-green-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 mb-20 shadow-lg">
          <div className="flex-shrink-0">
            <Image
              src="/img/logohmiputih.png"
              alt="Logo HMI Cabang Garut"
              width={150}
              height={180}
            />
            <div className="text-center mt-2 font-bold text-xs">HMI CABANG GARUT</div>
          </div>
          <div className="flex-grow">
            <span className="bg-white text-green-800 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
              Profil HMI Cabang Garut
            </span>
            <h2 className="text-3xl font-bold mb-4">
              HIMPUNAN MAHASISWA ISLAM <br /> CABANG GARUT
            </h2>
            <p className="text-sm leading-relaxed text-gray-100">
              HMI Cabang Garut merupakan perpanjangan tangan Pengurus Besar HMI di tingkat Kabupaten Garut.
              Sebagai organisasi kader, HMI Cabang Garut terus berupaya mencetak kader-kader berkualitas yang siap berkontribusi
              demi kemajuan daerah dan bangsa. Keberadaan HMI di Garut juga menjadi simbol perjuangan mahasiswa Islam dalam
              menegakkan nilai-nilai keislaman dan keindonesiaan.
            </p>
          </div>
        </section>

        {/* SECTION 3: LPP */}
        <section className="flex flex-col md:flex-row justify-between items-start mb-24 gap-10">
          <div className="md:w-1/2">
            <span className="bg-white text-green-800 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
              LPP HMI Cabang Garut
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Lembaga Pengembangan Profesi <br /> (LPP) HMI Cabang Garut
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Lembaga Pengembangan Profesi adalah lembaga kekaryaan yang mewadahi bakat dan minat kader HMI
              dalam bidang profesi tertentu untuk menunjang pencapaian tujuan HMI.
            </p>
          </div>
          <div className="md:w-1/2 bg-green-900/40 p-6 rounded-xl border border-green-700/50">
            <ol className="list-decimal list-inside space-y-3 font-semibold text-lg">
              {lppList.map((lpp, idx) => (
                <li key={idx} className="pl-2">{lpp}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 4: KOMISARIAT */}
        <section className="text-center mb-20">
          <span className="bg-white text-green-800 text-xs font-bold px-2 py-1 rounded mb-4 inline-block">
            KOMISARIAT
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-12 uppercase tracking-wide">
            KOMISARIAT HMI SE-RUANG LINGKUP HMI CABANG GARUT
          </h2>
          <p className="max-w-3xl mx-auto text-sm mb-12 text-gray-200">
            Komisariat merupakan ujung tombak perkaderan HMI yang berada di lingkungan Perguruan Tinggi.
            Berikut adalah daftar Komisariat yang berada di bawah naungan HMI Cabang Garut:
          </p>

          <div className="space-y-6">
            {komisariatList.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start justify-between text-left border-b border-white/20 pb-6 last:border-0 hover:bg-white/5 transition p-4 rounded-xl">
                <div className="md:pr-10 flex-grow">
                  <div className="text-xs font-bold text-orange-400 mb-2 uppercase tracking-wider">KOMISARIAT {index + 1}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{item.name}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed font-light">{item.desc}</p>
                </div>
                <div className="mt-4 md:mt-0 flex-shrink-0">
                  <div className="bg-white rounded-full p-1 w-28 h-28 flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
