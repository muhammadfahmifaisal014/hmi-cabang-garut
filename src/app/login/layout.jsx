import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login - Admin HMI",
  description: "Login untuk masuk ke dashboard admin",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-100`}>
        {children}
      </body>
    </html>
  );
}
