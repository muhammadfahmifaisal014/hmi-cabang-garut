import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TrainingDetail({ params }) {
  const { slug } = await params; // slug format example: "1-intermediate-training"
  if (!slug) return notFound();

  // Extract ID from slug (assumes format "ID-slug-text")
  const idStr = slug.split("-")[0];
  const id = Number(idStr);

  if (isNaN(id)) return notFound();

  // Fetch from Supabase
  const { data: training, error } = await supabase
    .from("trainings")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !training) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Training Tidak Ditemukan</h1>
          <p className="text-gray-500">Mungkin data telah dihapus atau URL salah.</p>
          <Link href="/" className="inline-block mt-4 text-[#00773A] hover:underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  // --- Data Mapping (DB to UI) ---
  // Note: The database schema might be simpler than the original static data.
  // We map available fields and use fallbacks for missing structured data.

  const title = training.title;
  const imageUrl = training.image_url || "/img/event1.png"; // Fallback image
  const location = training.location || "Lokasi belum ditentukan"; // Need to ensure DB has this
  const dateStr = training.date || "Jadwal menyusul";

  // Use description from DB, or fallback text
  const description = training.description || "Belum ada deskripsi detail.";

  // For complex fields (Tujuan, Target, Waktu Detail) which might not exist in simple DB schema yet:
  // We can either parse them if stored in a generic JSON column, or hide the sections if missing.
  // For now, we'll try to use optional distinct fields or hide sections.

  return (
    <div className="max-w-7xl my-4 mx-auto rounded-lg overflow-hidden shadow-lg bg-black/25">
      {/* Header */}
      <div className="bg-[#00773A] flex items-center justify-between p-4">
        <div>
          <h2 className="text-white font-bold text-sm">{title}</h2>
          <p className="text-gray-200 text-xs">
            {dateStr} - {location}
          </p>
        </div>
        <div className="text-[#00A859] font-bold text-lg">★</div>
      </div>

      <div className="relative w-full aspect-[4/5] md:aspect-[16/9] bg-black">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* Basic Content */}
      <div className="p-4 bg-[#2a2a2a]">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-gray-300 text-sm mt-1">{training.category || "Training HMI"}</p>
      </div>

      <div className="max-w-5xl mx-auto my-10 text-white rounded-lg overflow-hidden px-4 md:px-0">
        <div className="p-6 space-y-8 bg-[#1a1a1a]/50 rounded-xl">

          {/* Deskripsi / Dasar Pemikiran */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-2">Deskripsi Kegiatan</h2>
            <p className="text-gray-200 whitespace-pre-line text-justify leading-relaxed">
              {description}
            </p>
          </section>

          {/* Waktu & Tempat (Simple View since complex fields unavailable) */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-b border-gray-600 pb-2">Pelaksanaan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
              <div className="bg-white/5 p-4 rounded-lg">
                <span className="block text-sm text-gray-400">Tanggal</span>
                <span className="font-semibold text-lg">{dateStr}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <span className="block text-sm text-gray-400">Lokasi</span>
                <span className="font-semibold text-lg">{location}</span>
              </div>
            </div>
          </section>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
            {/* Only show Register button if link exists */}
            {/* Assuming we might add 'registration_link' to DB later, or check description for link?
                 For now, we link to the sub-page 'daftar' which handles the form logic. */}
            <Link
              href={`/training-raya/${slug}/daftar`}
              className="bg-[#00A859] hover:bg-green-600 px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition shadow-lg flex items-center gap-2"
            >
              DAFTAR SEKARANG
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
