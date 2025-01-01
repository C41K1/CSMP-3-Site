import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSMP 4",
  description: "Bem-vindo(a) ao CSMP 4",
  openGraph: {
    title: "CSMP 4",
    description: "Bem-vindo(a) ao CSMP 4",
    url: "https://csmp.vercel.app",
    images: ["/assets/banner-csmp-4.png"],
    siteName: "CSMP 4",
  },
  twitter: {
    title: "CSMP 4",
    description: "Bem-vindo(a) ao CSMP 4",
    card: "summary_large_image",
    images: ["/assets/banner-csmp-4.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
