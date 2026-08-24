import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentRoot } from "@/components/cookies/CookieConsentRoot";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plex-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = createMetadata({
  title:
    "Dispute Forensic Expert Witness | Accounting, Engineering & Digital Forensics",
  description:
    "Find qualified forensic expert witnesses across accounting, engineering, digital forensics, and economics for litigation and international arbitration worldwide.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexSerif.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <ConsentDefaultsScript />
        <CookieConsentRoot>
          <Header />
          <main className="min-w-0 flex-1">{children}</main>
          <Footer />
        </CookieConsentRoot>
      </body>
    </html>
  );
}
