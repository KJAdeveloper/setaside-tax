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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://setaside-tax.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SetAside — Free 1099 Tax Set-Aside Calculator",
    template: "%s | SetAside",
  },
  description:
    "Free calculator for freelancers and gig workers: know how much to set aside for quarterly 1099 taxes. Instant estimate of SE tax, federal, and state.",
  keywords: [
    "1099 tax calculator",
    "how much to set aside for taxes freelance",
    "quarterly estimated taxes",
    "self employment tax calculator",
    "gig worker taxes",
  ],
  openGraph: {
    title: "SetAside — Free 1099 Tax Set-Aside Calculator",
    description:
      "Know exactly how much of every 1099 dollar to park for the IRS — before April hurts.",
    type: "website",
    url: siteUrl,
    siteName: "SetAside",
  },
  twitter: {
    card: "summary_large_image",
    title: "SetAside — Free 1099 Tax Set-Aside Calculator",
    description:
      "Instant quarterly tax set-aside estimate for freelancers & gig workers.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
