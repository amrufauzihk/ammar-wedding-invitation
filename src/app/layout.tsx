import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Wedding of Ammar Fauzan",
  description:
    "You're invited to celebrate the wedding of Ammar Fauzan. An elegant digital invitation inspired by Bugis tradition.",
  keywords: [
    "wedding invitation",
    "Ammar Fauzan",
    "Bugis wedding",
    "digital invitation",
  ],
  openGraph: {
    title: "The Wedding of Ammar Fauzan",
    description: "You're cordially invited to the wedding celebration of Ammar Fauzan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-cream font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
