import type { Metadata } from "next";
import { Poppins, Creepster } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const creepster = Creepster({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-creepster",
});

export const metadata: Metadata = {
  title: "Rick and Morty Challenge",
  description: "Basic App created by Agustin Garone",
  icons: {
    icon: "./favicon.ico",
    shortcut: "../public/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${creepster.variable}`}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
