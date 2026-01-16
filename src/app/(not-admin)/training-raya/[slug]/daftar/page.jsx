import trainings from "@/data/trainings";

export default async function DaftarPage({params}) {
 const {slug} = await params; // slug = "1-intermediate-training-lk2"
 const id = Number(slug.split("-")[0]); // ambil id = 1
 const training = trainings.find((t) => t.id === id);

 if (!training) {
  return (
   <div className="p-10 text-center text-red-500">Formulir tidak ditemukan</div>
  );
 }

 const formUrl = training.registerUrl;

 return (
  <div>
   <h1 className="text-2xl font-bold mt-4 mb-4 text-center text-[#00773A]">
    Formulir Pendaftaran {training.title}
   </h1>

   <div className="w-full h-[800px]">
    {formUrl ? (
     <iframe
      src={`${formUrl}/viewform?embedded=true`}
      width="100%"
      height="100%">
      Memuat…
     </iframe>
    ) : (
     <p className="text-center text-red-500">Link form belum tersedia</p>
    )}
   </div>
  </div>
 );
}
