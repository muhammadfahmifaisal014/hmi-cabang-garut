import {Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const montserrat = Montserrat({
 weight: ["400", "500", "600", "700"],
 style: ["normal", "italic"],
 subsets: ["latin"],
 display: "swap",
});

export const metadata = {
 title: {
  default: "HMI Cabang Garut",
  template: "%s - HMI Cabang Garut",
 },
 description: "HMI Cabang Garut",
 metadataBase: new URL("https://hmicabanggarut.or.id"),
};

export default async function RootLayout({children}) {
 return (
  <div className={`${montserrat.className} h-screen`}>
   <Navbar />
   <main className="h-full flex items-center justify-center">
    Undermaintenance
   </main>
   <Footer />
  </div>
 );
}
