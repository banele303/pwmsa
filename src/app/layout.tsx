import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pwmsa.org.za"),
  title: {
    default: "PWMSA – Progressive Women's Movement of South Africa",
    template: "%s | PWMSA",
  },
  description:
    "The Progressive Women's Movement of South Africa (PWMSA) is committed to uniting progressive women and strengthening collective action towards the advancement, empowerment and emancipation of women.",
  keywords: [
    "PWMSA",
    "Progressive Women's Movement South Africa",
    "women empowerment",
    "gender equality",
    "GBV",
    "femicide",
    "women's rights South Africa",
    "women's movement",
  ],
  authors: [{ name: "PWMSA" }],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "PWMSA – Progressive Women's Movement of South Africa",
    images: [
      {
        url: "https://pwmsa.org.za/wp-content/uploads/website-soon-to-be-Launched.jpg",
        width: 1200,
        height: 515,
        alt: "PWMSA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PWMSA",
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
    shortcut: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
