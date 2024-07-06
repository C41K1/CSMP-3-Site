import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSMP 3",
  description: "Bem-vindo(a) ao CSMP 3",
  openGraph: {
    title: "CSMP 3",
    description: "Bem-vindo(a) ao CSMP 3",
    url: "https://csmp.vercel.app",
    images: ["/assets/csmp3-logo.png"],
    siteName: "AxolCore",
  },
  twitter: {
    title: "CSMP 3",
    description: "Bem-vindo(a) ao CSMP 3",
    card: "summary_large_image",
    images: ["/assets/csmp3-logo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
