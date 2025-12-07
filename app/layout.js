// app/layout.js

import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://whichslot.com"),
  title: {
    default: "WhichSlot – Random Slot Wheel & Casino Finder",
    template: "%s · WhichSlot",
  },
  description:
    "Spin the WhichSlot wheel to get a random online slot from 800+ games, browse all slots in one place, and find casinos where you can play.",
  keywords: [
    "online slots",
    "slot picker",
    "random slot wheel",
    "casino slots",
    "slot games list",
    "BitStarz slots",
    "BC.Game slots",
    "WhichSlot",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://whichslot.com",
    title: "WhichSlot – Random Slot Wheel & Casino Finder",
    description:
      "Spin the wheel, discover a random online slot from 800+ games, and jump straight to casinos where you can play.",
    siteName: "WhichSlot",
    images: [
      {
        url: "/og-image.png", // create this image in /public if you haven’t yet
        width: 1200,
        height: 630,
        alt: "WhichSlot – Random slot wheel with colorful neon ring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhichSlot – Random Slot Wheel & Casino Finder",
    description:
      "Not sure which slot to play? Spin the WhichSlot wheel to get a random pick from 800+ games.",
    images: ["/og-image.png"],
  },
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
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TRCDECQXG2"
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TRCDECQXG2', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Basic JSON-LD for the website */}
      <Script
        id="ld-website"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "WhichSlot",
          url: "https://whichslot.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://whichslot.com/slots?search={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>

      {/* ⬇️ overflow-x-hidden added on body + main to prevent horizontal scroll */}
      <body className={`${jakarta.className} overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen bg-[#050816] overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
