export const metadata = {
  title: "WhichSlot.com – Spin. Discover. Play.",
  description: "Spin the slot wheel and find your next favorite casino game."
};

import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
