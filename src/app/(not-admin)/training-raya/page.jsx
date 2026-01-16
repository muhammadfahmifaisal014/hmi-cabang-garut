import TrainingSection from "@/components/layout/Training";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 return (
  <div className="font-sans">
   <section className="relative w-full flex flex-col items-center">
    <Image
     src="/img/BgEvent.jpg"
     alt="Pendopo"
     fill
     className="object-cover"
     priority
    />
    <div className="absolute inset-0 bg-green-900/70"></div>

    <div className="relative z-10 w-full mx-auto px-6  text-white">
     <TrainingSection />
    </div>
   </section>
  </div>
 );
}
