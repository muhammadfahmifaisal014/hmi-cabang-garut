import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DaftarPage({ params }) {
  const { slug } = await params;
  const idStr = slug.split("-")[0];
  const id = Number(idStr);

  if (isNaN(id)) return notFound();

  // Fetch from Supabase
  const { data: training } = await supabase
    .from("trainings")
    .select("*")
    .eq("id", id)
    .single();

  if (!training) {
    return (
      <div className="p-10 text-center text-red-500">Formulir tidak ditemukan</div>
    );
  }

  // Assuming we will add a 'registration_link' or 'google_form_url' column to the DB.
  // For now, let's try to find it in a new field we'll propose, or fallback to description search.
  // Temporary: we can assume if description contains a URL, or we add a field.
  // I will update the SCHEMA to add 'registration_link'.
  const formUrl = training.registration_link;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-4xl mx-auto pt-10 px-4">
        <Link href={`/training-raya/${slug}`} className="text-sm text-green-600 hover:underline mb-4 inline-block">
          ← Kembali ke Detail Training
        </Link>

        <h1 className="text-2xl font-bold mt-2 mb-6 text-center text-[#00773A] uppercase">
          Formulir Pendaftaran <br /> <span className="text-black text-lg">{training.title}</span>
        </h1>

        <div className="w-full h-[800px] bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
          {formUrl ? (
            <iframe
              src={formUrl.includes("viewform") ? `${formUrl}?embedded=true` : formUrl}
              width="100%"
              height="100%"
              className="border-0"
            >
              Memuat formulir...
            </iframe>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-10 text-center space-y-4">
              <div className="text-6xl">📝</div>
              <h3 className="text-xl font-bold text-gray-700">Formulir Belum Tersedia</h3>
              <p className="text-gray-500 max-w-md">
                Link pendaftaran belum ditambahkan oleh admin untuk training ini.
                Silakan hubungi panitia atau cek kembali nanti.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
