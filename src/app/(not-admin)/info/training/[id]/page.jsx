import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export async function generateStaticParams() {
  const { data: trainings } = await supabase.from("trainings").select("id");
  return (trainings || []).map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function TrainingDetailPage({ params }) {
  const { data: item } = await supabase
    .from("trainings")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!item) {
    return notFound();
  }

  return (
    <div className="w-full bg-[#0fa156] text-white font-sans pb-20">
      {/* PAGE HEADER */}
      <section className="bg-transparent pt-32 pb-8 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="inline-block border border-white rounded-lg px-4 py-1 mb-4 backdrop-blur-sm bg-white/10">
          <Link href="/info/training" className="text-white font-bold uppercase tracking-widest text-sm hover:underline">
            ← KEMBALI KE TRAINING
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="px-3 py-1 bg-[#FFA600] text-white text-xs font-bold uppercase tracking-wider w-fit rounded">{item.category}</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight drop-shadow-md text-left">
            {item.title}
          </h1>
        </div>
        <p className="text-lg md:text-xl font-medium mt-4 opacity-90">
          Diposting pada: {new Date(item.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </section>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 mt-8">
        <div className="bg-[#004e26] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
          {/* Image Banner */}
          <div className="relative w-full h-[300px] md:h-[500px]">
            <Image
              src={item.image_url || "/img/event1.png"}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004e26] via-transparent to-transparent"></div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-12 space-y-6 text-base md:text-lg leading-relaxed text-gray-100 whitespace-pre-wrap">
            <p className="font-bold text-2xl text-[#FFA600] mb-4">Detail Training</p>
            <div>
              {item.description}
            </div>
            <div className="pt-8 mt-8 border-t border-white/20">
              <Link href="/hubungi-kami" className="bg-[#FFA600] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 inline-block uppercase text-sm tracking-widest">
                DAFTAR SEKARANG
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
