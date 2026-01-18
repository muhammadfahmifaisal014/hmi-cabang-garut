import InfoCard from "@/components/element/InfoCard";
import { supabase } from "@/lib/supabaseClient";

export default async function TrainingSection() {
  const { data: trainings } = await supabase
    .from("trainings")
    .select("*")
    .order("date", { ascending: false })
    .limit(3);

  const trainingList = trainings || [];

  return (
    <section className="py-16 text-center text-white">
      {/* Title */}
      <div className="inline-block border-2 border-white px-6 py-2 rounded mb-4">
        <span className="text-xl md:text-2xl font-bold uppercase tracking-wide">
          Training
        </span>
      </div>
      <h2 className="mt-4 text-xl md:text-3xl font-semibold px-4">
        Ikuti Pelatihan Mendatang di HMI Cabang Garut
      </h2>

      {/* Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {trainingList.length === 0 ? (
          <p className="col-span-full text-center opacity-70">Belum ada training baru.</p>
        ) : (
          trainingList.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              date={new Date(item.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
              image={item.image_url || "/img/event1.png"}
              description={item.description.substring(0, 100) + "..."}
              subtitle={item.category}
              // Templated link to detail page
              link={`/info/training/${item.id}`}
            />
          ))
        )}
      </div>
    </section>
  );
}
