import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "[YOUR NAME] — Frontend Developer",
  description: "[YOUR ONE-LINE INTRO] Portfolio of [YOUR NAME]: React, Next.js and Tailwind CSS projects.",
  openGraph: { title: "[YOUR NAME] — Portfolio", description: "[YOUR ONE-LINE INTRO]", type: "website" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} bg-[#0B0B10] text-zinc-100 antialiased`}>{children}</body>
    </html>
  );
}