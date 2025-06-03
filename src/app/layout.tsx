import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: "Warwick Gorman | Data & Product Analytics",
  description: "Portfolio and journey towards a $250K+ career in data/product analytics and product management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${robotoMono.variable}`}>
      <body className={`${inter.className}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
