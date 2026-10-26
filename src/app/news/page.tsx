import type { Metadata } from "next";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "News & Official Statements | PWMSA Media Desk",
  description:
    "Read official statements, press releases, parliamentary dispatches, and quarterly organisational updates from the Progressive Women's Movement of South Africa (PWMSA).",
  openGraph: {
    title: "News & Official Statements | PWMSA Media Desk",
    description:
      "Stay informed with the latest communications, advocacy dispatches, stakeholder roundtables, and campaign news from PWMSA.",
    images: [
      {
        url: "/images/news/national-treasury-gbv-funding.jpg",
        width: 1200,
        height: 675,
        alt: "PWMSA News & Statements",
      },
    ],
  },
};

export default function NewsPage() {
  return <NewsClient />;
}
