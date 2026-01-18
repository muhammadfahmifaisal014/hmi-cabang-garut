import React from "react";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Daftar Ketua Umum",
  description: "Daftar Ketua Umum HMI Cabang Garut Dari Masa Ke Masa",
};

export default async function DaftarKetuaUmumPage() {
  const { data: chairmen } = await supabase
    .from("chairmen")
    .select("*")
    .order("period", { ascending: true });

  const list = chairmen || [];

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
          {list.length === 0 ? (
            <p className="text-white/80 italic">Belum ada data ketua umum.</p>
          ) : (
            <ul className="space-y-6 text-white text-sm md:text-base leading-relaxed opacity-90">
              {list.map((item, index) => (
                <li key={item.id} className="flex gap-4">
                  <span className="font-bold min-w-[24px] text-lg">{index + 1}.</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">
                      Tahun {item.period} : {item.name}
                    </span>
                    {item.description && (
                      <span className="mt-1 block text-white/80 whitespace-pre-wrap">
                        {item.description}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}

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
