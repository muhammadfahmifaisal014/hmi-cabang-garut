import React from "react";
import Image from "next/image";

import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export const metadata = {
  title: "Event HMI Cabang Garut",
  description: "Agenda dan Event kegiatan HMI Cabang Garut",
};

export const dynamic = "force-dynamic";

const EventCard = ({ date, title, desc, img, slug }) => (
  <Link href={`/info/event/${slug}`} className="relative group w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl cursor-pointer border border-white/20 block">
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
      <p className="text-xs md:text-sm text-gray-200 mb-4 line-clamp-2 leading-relaxed opacity-90">
        {desc}
      </p>

      <div className="bg-[#FFA600] hover:bg-[#e69500] text-white text-[10px] md:text-xs font-bold py-2 px-6 rounded-full uppercase tracking-wider transition-all shadow-lg flex items-center gap-2">
        Discover More
        <span className="text-[8px]">▼</span>
      </div>
    </div>
  </Link>
);

export default async function EventPage() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: false });

  const eventList = events || [];

  return (
    <div className="w-full bg-[#0fa156] text-white font-sans pb-20">

      {/* PAGE HEADER */}
      <section className="bg-transparent pt-32 pb-6 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="inline-block border border-white rounded-lg px-4 py-1 mb-4 backdrop-blur-sm bg-white/10">
          <span className="text-white font-bold uppercase tracking-widest text-sm">
            Event
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-end md:justify-between gap-4">
          <h1 className="text-3xl md:text-5xl font-black uppercase leading-none drop-shadow-md text-left max-w-3xl">
            Ikut Event Mendatang di <br />
            HIMPUNAN MAHASISWA ISLAM <br />
            CABANG GARUT <span className="text-[#FFA600] bg-white/10 px-2 rounded-lg">Periode 2025-2026</span>
          </h1>
        </div>
      </section>

      {/* EVENT TITLE BAR */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="border border-white rounded-full py-2 px-12 inline-block bg-[#004e26]/80 backdrop-blur-md">
          <span className="text-white font-bold uppercase tracking-widest">Event</span>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventList.length === 0 ? (
          <div className="col-span-full text-center py-20 text-white/70">
            <p className="text-xl">Belum ada event yang dipublish saat ini.</p>
          </div>
        ) : (
          eventList.map((event) => (
            <EventCard
              key={event.id}
              date={new Date(event.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
              title={event.title}
              desc={event.description.substring(0, 100) + '...'}
              img={event.image_url || "/img/bgEvent.jpg"}
              slug={event.slug}
            />
          ))
        )}
      </div>

      {/* DISCOVER MORE BUTTON (Global) */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#FFA600] text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-orange-600 transition-colors shadow-lg flex items-center gap-2">
          MORE <span className="text-[10px]">▼</span>
        </button>
      </div>

      {/* FOOTER MESSAGE */}
      <div className="text-center mt-20 opacity-80">
        <h2 className="text-4xl font-black italic mb-2">#HMIVISIONER</h2>
        <p className="tracking-[0.3em] font-light">KONSISTEN DALAM KEBENARAN</p>
      </div>

    </div>
  );
}
