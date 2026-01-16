import trainings from "@/data/trainings";
import Image from "next/image";
import Link from "next/link";

export default async function TrainingDetail({params}) {
 const {slug} = await params; // ✅ tunggu params resolve
 if (!slug) {
  return <div className="p-6 text-center">Slug tidak valid</div>;
 }

 // ambil id dari slug: "1-intermediate-training-lk2" → 1
 const id = Number(slug.split("-")[0]);
 const training = trainings.find((t) => t.id === id);

 if (!training) {
  return <div className="p-6 text-center">Training tidak ditemukan</div>;
 }

 return (
  <div className="max-w-7xl my-4 mx-auto rounded-lg overflow-hidden shadow-lg bg-black/25">
   {/* Header */}
   <div className="bg-[#00773A] flex items-center justify-between p-4">
    <div>
     <h2 className="text-white font-bold text-sm">{training.title}</h2>
     <p className="text-gray-200 text-xs">
      {training.date} - {training.location}
     </p>
    </div>
    <div className="text-[#00A859] font-bold text-lg">★</div>
   </div>

   <Image
    src={training.pamplet}
    alt={training.title}
    width={800} // bisa pakai ukuran besar
    height={1200}
    className="w-full h-auto object-contain "
   />

   {/* Content */}
   <div className="p-4 bg-[#2a2a2a]">
    <h3 className="text-white text-lg font-bold">{training.title}</h3>
    <p className="text-gray-300 text-sm mt-1">{training.tema}</p>
    <p className="text-gray-400 text-xs">{training.waktu.forum.tanggal}</p>
   </div>

   <div className="max-w-5xl mx-auto my-10  text-white rounded-lg  overflow-hidden">
    {/* Content */}
    <div className="p-6 space-y-6">
     {/* Deskripsi */}
     <section>
      <h2 className="text-xl font-semibold mb-2">Dasar Pemikiran</h2>
      <p className="text-gray-200 whitespace-pre-line text-justify">
       {training.desc}
      </p>
     </section>

     {/* Tujuan */}
     <section>
      <h2 className="text-xl font-semibold mb-2">Tujuan {training.jenis}</h2>
      <ul className="list-disc list-inside text-gray-200 space-y-1">
       {training.tujuan.map((t, i) => (
        <li key={i}>{t}</li>
       ))}
      </ul>
     </section>

     {/* Target */}
     <section>
      <h2 className="text-xl font-semibold mb-2">Target {training.jenis}</h2>
      <ul className="list-decimal list-inside text-gray-200 space-y-1">
       {training.target.map((t, i) => (
        <li key={i}>{t}</li>
       ))}
      </ul>
     </section>

     {/* Waktu & Tempat */}
     <section>
      <h2 className="text-xl font-semibold mb-2">Waktu & Tempat</h2>
      <div className="space-y-3 text-gray-200">
       <div>
        <p className="font-bold">Screening Test</p>
        <p>{training.waktu.screening.tanggal}</p>
        <p>{training.waktu.screening.tempat}</p>
       </div>
       <div>
        <p className="font-bold">Forum Training</p>
        <p>{training.waktu.forum.tanggal}</p>
        <p>{training.waktu.forum.tempat}</p>
       </div>
       <p className="italic text-sm text-gray-400">
        (*Jika ada perubahan akan diinformasikan lebih lanjut)
       </p>
      </div>
     </section>

     {/* Tombol */}
     <div className="flex flex-wrap gap-4 mt-6">
      <Link
       href={training.proposalUrl}
       className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded text-sm font-semibold">
       UNDUH PROPOSAL
      </Link>
      <Link
       href={training.registerUrl}
       className="bg-[#00A859] hover:bg-green-600 px-5 py-2 rounded text-sm font-semibold">
       DAFTAR SEKARANG
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
}
