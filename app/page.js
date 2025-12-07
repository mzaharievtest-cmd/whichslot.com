// app/page.js
import { redirect } from "next/navigation";

export const metadata = {
  title: "WhichSlot – Random Slot Picker | Spin the Wheel & Get a Game",
  description:
    "Can't decide which slot to play? WhichSlot lets you spin a random slot wheel and instantly discover a game from 800+ popular online slots.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WhichSlot – Spin the Wheel to Get a Random Slot",
    description:
      "Use the WhichSlot wheel to get a random slot suggestion when you don’t know what to play. Over 800 slots available.",
    url: "https://whichslot.com",
    siteName: "WhichSlot",
    images: [{ url: "/og-wheel.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhichSlot – Random Slot Selector",
    description:
      "Not sure which slot to play? Spin the wheel and get a random slot instantly.",
    images: ["/og-wheel.png"],
  },
};

export default function Home() {
  redirect("/wheel");
}
