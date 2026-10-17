import type { Metadata } from "next";
import { Inter, Inter_Tight, Caveat, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "boringfunnels · Build funnels that sell with the AI tools you already use",
  description:
    "Every week we take apart a real funnel whose ads are still running, from the ad to the last email, and prepare it for your agent to build from.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "boringfunnels",
    description: "Build funnels that sell with the coding agent you already use.",
    url: "https://boringfunnels.com",
    siteName: "boringfunnels",
    images: [{ url: "/og.jpg" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} ${caveat.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
