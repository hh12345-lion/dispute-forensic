import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentRoot } from "@/components/cookies/CookieConsentRoot";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

export const dynamic = "force-dynamic";

/** Body copy: Lora. */
const lora = localFont({
  src: [
    { path: "./fonts/lora.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/lora-italic-italic.woff2", weight: "400 700", style: "italic" },
  ],
  variable: "--font-body",
  display: "swap",
});

/** Headings: Sora. */
const sora = localFont({
  src: [{ path: "./fonts/sora.woff2", weight: "300 800", style: "normal" }],
  variable: "--font-heading",
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
    <html lang="en" className={`${lora.variable} ${sora.variable} h-full`}>
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
