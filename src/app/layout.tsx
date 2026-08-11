import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrapGround | Divulgação para trap, rap e hip-hop",
  description:
    "Campanhas de divulgação para artistas e lançamentos. Coloque seu som diante da audiência da TrapGround — mídia especializada em trap, rap e cultura hip-hop.",
  keywords: [
    "TrapGround",
    "divulgação musical",
    "trap",
    "rap",
    "hip-hop",
    "lançamento",
    "artista",
    "campanha de divulgação",
    "mídia musical",
  ],
  authors: [{ name: "TrapGround" }],
  openGraph: {
    title: "TrapGround | Divulgação para quem faz parte da cena",
    description:
      "Campanhas de divulgação para artistas e lançamentos. X, Instagram e site editorial.",
    url: "https://www.trapground.com.br",
    siteName: "TrapGround",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrapGround | Divulgação para trap, rap e hip-hop",
    description: "Coloque seu lançamento diante da audiência da TrapGround.",
    creator: "@trapcit0u",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.trapground.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#f5f5f5]`}
      >
        {children}
      </body>
    </html>
  );
}
