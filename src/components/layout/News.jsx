import InfoCard from "@/components/element/InfoCard";
import { supabase } from "@/lib/supabaseClient";

export default async function NewsSection() {
  const { data: news } = await supabase
    .from("news")
    .select("*")
    .order("date", { ascending: false })
    .limit(3);

  const newsList = news || [];

  return (
    <section className="py-12 text-center text-white">
      {/* Title */}
      <div className="inline-block border-2 border-white px-6 py-2 rounded mb-4">
        <span className="text-xl md:text-2xl font-bold uppercase tracking-wide">
          Berita
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Temukan Berita Baru HMI Cabang Garut
      </h2>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {newsList.length === 0 ? (
          <p className="col-span-full text-center opacity-70">Belum ada berita terbaru.</p>
        ) : (
          newsList.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              date={new Date(item.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
              image={item.image_url || "/img/BgBeranda.png"}
              description={item.excerpt || item.content.substring(0, 100) + "..."}
              link={`/info/berita/${item.slug}`}
            />
          ))
        )}
      </div>
    </section>
  );
}
