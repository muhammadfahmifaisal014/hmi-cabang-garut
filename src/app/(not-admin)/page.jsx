import TrainingSection from "@/components/layout/Training";
import NewsSection from "@/components/layout/News";
import EventsSection from "@/components/layout/Events";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="font-sans">
      <section className="relative w-full flex items-center">
        <Image
          src="/img/BgBeranda.png"
          alt="Pelantikan HMI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-green-900/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 my-24 text-white">
          <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded">
            OFFICIAL WEBSITE
          </span>

          <h1 className="mt-4 text-2xl md:text-5xl font-extrabold leading-tight md:leading-snug">
            HIMPUNAN MAHASISWA ISLAM <br /> CABANG GARUT
          </h1>

          <p className="mt-4 text-sm md:text-base max-w-4xl">
            <i>
              Meneguhkan Peran Kader sebagai Pelopor, Penggerak, dan Pelangsung
              Perjuangan Umat dan Bangsa.
            </i>
          </p>
          <p className="mt-4 text-sm md:text-base max-w-4xl">
            HMI Cabang Garut berkomitmen menjadi ruang pembinaan, pengabdian, dan
            pengembangan potensi kader dalam menghadapi tantangan zaman yang terus
            berkembang.
          </p>

          <Link
            href="/profil/hmi-visioner"
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded inline-flex items-center"
          >
            MORE <span className="ml-1">▼</span>
          </Link>
        </div>
      </section>
      <section className="relative w-full flex flex-col items-center">
        {/* <Image
     src="/img/BgEvent.jpg"
     alt="Pendopo"
     fill
     className="object-cover"
     priority
    /> */}
        {/* <div className="absolute inset-0 bg-green-900/70"></div> */}

        <div className="w-full flex flex-col items-center text-white">
          {/* Bagian Atas */}
          <section className="w-full flex flex-col md:flex-row items-center justify-center px-6 py-10 bg-green-800">
            <div className="w-full flex flex-col md:flex-row items-center justify-center px-6 py-10 bg-green-800 max-w-5xl mx-auto">
              {/* Logo */}
              <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-1/3 ">
                <div className="flex items-center space-x-8">
                  <Image
                    src="/img/LogoHMI1.png"
                    alt="Logo HMI"
                    width={70}
                    height={100}
                    className="object-contain"
                  />
                  <Image
                    src="/img/LogoHMI2.png"
                    alt="Logo Cabang Garut"
                    width={150}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Deskripsi */}
              <div className="text-center md:text-left md:w-2/3">
                <p className="text-sm md:text-base leading-relaxed">
                  Himpunan Mahasiswa Islam (HMI) Cabang Garut merupakan wadah perjuangan
                  mahasiswa Islam di Kabupaten Garut yang berorientasi pada peningkatan
                  kualitas insan akademis, pencipta, pengabdi yang bernafaskan Islam,
                  serta bertanggung jawab atas terwujudnya masyarakat adil makmur yang
                  diridhai Allah SWT.
                </p>
                <Link
                  href="/profil"
                  className="inline-block mt-3 bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1.5 rounded-md">
                  MORE ▾
                </Link>
              </div>
            </div>
          </section>

          {/* Statistik */}
          <section className="w-full bg-orange-500 ">
            <div className="max-w-7xl mx-auto grid grid-cols-3 text-center py-6">
              <div className="border-r border-white">
                <h2 className="text-3xl font-bold">9</h2>
                <p className="text-lg font-semibold">Komisariat</p>
              </div>
              <div className="border-r border-white">
                <h2 className="text-3xl font-bold">7</h2>
                <p className="text-lg font-semibold">LPP</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">1,000+</h2>
                <p className="text-lg font-semibold">Kader</p>
              </div>
            </div>
          </section>

          {/* Bagian Bawah */}
          <section className="w-full flex flex-col md:flex-row justify-center items-center py-10 px-4 max-w-7xl gap-6">
            {/* Kiri */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-md border-2 border-green-500 w-full md:w-2/3 flex flex-col md:block">
              {/* Gambar Background (Visible only on MD+) */}
              <div className="hidden md:block relative h-60 w-full">
                <Image
                  src="/img/BgBeranda.png"
                  alt="HMI Visioner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-green-800/80"></div>

                {/* Content Overlay Desktop */}
                <div className="absolute inset-0 flex items-center justify-between px-8 py-4">
                  <div className="text-white max-w-[65%]">
                    <h3 className="font-bold text-2xl mb-2">#HMIVISIONER</h3>
                    <p className="text-sm leading-relaxed mb-4 text-gray-100">
                      Gagasan HMI Cabang Garut Periode 2025–2026 dalam rangka
                      memperjuangkan keadilan sosial dan membangun kemandirian kader di
                      Wilayah Kabupaten Garut.
                    </p>
                    <Link
                      href="/profil/hmi-visioner"
                      className="inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-transform hover:scale-105">
                      DISCOVER MORE <span>▼</span>
                    </Link>
                  </div>
                  <div className="relative flex-shrink-0">
                    <Image
                      src="/img/HMIVISIONER.png"
                      alt="Logo HMIVISIONER"
                      width={160}
                      height={160}
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Layout (Stacked & Clean) */}
              <div className="md:hidden bg-green-800 p-6 flex flex-col items-center text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                  <Image src="/img/HMIVISIONER.png" width={200} height={200} alt="bg" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-black text-2xl text-white mb-2">#HMIVISIONER</h3>
                  <p className="text-gray-100 text-sm leading-relaxed mb-6">
                    Gagasan HMI Cabang Garut Periode 2025–2026 dalam rangka
                    memperjuangkan keadilan sosial.
                  </p>
                  <Link
                    href="/profil/hmi-visioner"
                    className="inline-block w-full bg-orange-500 text-white font-bold py-3 rounded-lg shadow-md active:scale-95 transition-transform"
                  >
                    LIHAT SELENGKAPNYA
                  </Link>
                </div>
              </div>
            </div>

            {/* Kanan */}
            <div className="bg-green-800 rounded-2xl text-center py-8 px-6 md:w-1/3 shadow-lg">
              <div className="flex flex-col items-center space-y-3">
                <Image
                  src="/img/wa.png"
                  alt="Logo wa"
                  width={50}
                  height={50}
                  className="object-contain drop-shadow-lg"
                />
                <h3 className="text-white font-semibold text-lg">
                  Hotline HMI Cabang Garut
                </h3>
                <p className="text-lg font-bold tracking-wide">0888-8888-8888</p>
                <Link
                  href="/hubungi-kami"
                  className="inline-block mt-3 bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-1.5 rounded-md">
                  MESSAGE US
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="relative z-10 w-full mx-auto px-6 text-white">
          <NewsSection />
          <EventsSection />
          <TrainingSection />
        </div>
      </section>
    </div>
  );
}
