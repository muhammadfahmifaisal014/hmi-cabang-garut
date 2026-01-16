import { Montserrat, Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={`${montserrat.variable} ${inter.variable} bg-[#00773A] antialiased text-white font-sans`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
