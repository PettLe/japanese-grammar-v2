import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Japanin kielioppia ja muuta",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-neutral-950 px-25" lang="en">
      <body className={inter.className}>
        {Navbar()}
        {children}</body>
    </html>
  );
}
