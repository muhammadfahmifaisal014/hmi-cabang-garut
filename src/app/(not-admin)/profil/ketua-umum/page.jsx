import React from "react";

export const metadata = {
  title: "Daftar Ketua Umum",
  description: "Daftar Ketua Umum HMI Cabang Garut Dari Masa Ke Masa",
};

export default function DaftarKetuaUmumPage() {
  const ketuaList = [
    {
      id: 1,
      name: "Tahun 19xx - 19xx : Nama Ketua Umum",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      name: "Tahun 19xx - 19xx : Nama Ketua Umum",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      name: "Tahun 19xx - 19xx : Nama Ketua Umum",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      name: "Tahun 19xx - 19xx : Nama Ketua Umum",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      name: "Tahun 19xx - 19xx : Nama Ketua Umum",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 6,
      name: "Tahun 19xx - 19xx : Nama Ketua Umum",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div className="w-full bg-[#0fa156] text-white font-sans pb-20">

      {/* PAGE HEADER */}
      <section className="bg-transparent pt-32 pb-8 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="inline-block border border-white rounded-lg px-4 py-1 mb-4 backdrop-blur-sm bg-white/10">
          <span className="text-white font-bold uppercase tracking-widest text-sm">
            KETUA UMUM
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black uppercase leading-none drop-shadow-md text-left">
          HIMPUNAN MAHASISWA ISLAM <br />
          CABANG GARUT
          <span className="inline-block bg-orange-500 text-white px-4 ml-0 md:ml-4 rounded-lg transform -skew-x-6 mt-2 md:mt-0 text-3xl md:text-5xl border-2 border-white">
            Dari Masa Ke Masa
          </span>
        </h1>
      </section>

      {/* CONTENT LIST CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-[#004e26] p-8 md:p-12 rounded-[3rem] shadow-2xl min-h-[500px]">

          {/* Inner Title */}
          <div className="mb-8">
            <div className="inline-block bg-transparent border-2 border-white px-8 py-2 rounded-full mb-4">
              <h2 className="text-white font-bold text-lg uppercase tracking-wider">Ketua Umum</h2>
            </div>
            <p className="text-white font-bold text-lg mb-6">
              Nama-nama Ketua Umum HMI Cabang Garut dari masa ke masa :
            </p>
          </div>

          {/* List */}
          <ul className="space-y-6 text-white text-sm md:text-base leading-relaxed opacity-90">
            {ketuaList.map((item) => (
              <li key={item.id} className="flex gap-2">
                <span className="font-bold min-w-[20px]">{item.id}.</span>
                <div className="font-bold">
                  {item.desc}
                  {/* Note: In the design the text seems repetitive dummy text. 
                                 I've put the dummy text here. You can replace with real data later. */}
                </div>
              </li>
            ))}
          </ul>

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
