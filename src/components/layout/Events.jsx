import InfoCard from "@/components/element/InfoCard";
import { supabase } from "@/lib/supabaseClient";

export default async function EventsSection() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: false })
    .limit(3);

  const eventList = events || [];

  return (
    <section className="py-12 text-center text-white">
      {/* Title */}
      <div className="inline-block border-2 border-white px-6 py-2 rounded mb-4">
        <span className="text-xl md:text-2xl font-bold uppercase tracking-wide">
          Event
        </span>
      </div>

      <h2 className="text-xl md:text-3xl font-semibold mb-8 px-4">
        Ikuti Kegiatan HMI Cabang Garut Mendatang
      </h2>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {eventList.length === 0 ? (
          <p className="col-span-full text-center opacity-70">Belum ada event mendatang.</p>
        ) : (
          eventList.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              date={new Date(item.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
              image={item.image_url || "/img/bgEvent.jpg"}
              description={item.description.substring(0, 100) + "..."}
              subtitle={item.location}
              link={`/info/event/${item.slug}`}
            />
          ))
        )}
      </div>
    </section>
  );
}
