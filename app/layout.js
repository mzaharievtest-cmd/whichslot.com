// app/layout.js

import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata = {
  title: "WhichSlot – Spin. Discover. Play.",
  description: "Spin the slot wheel and discover your next favorite casino game.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Navbar />
        <main className="min-h-screen bg-[#050816]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
