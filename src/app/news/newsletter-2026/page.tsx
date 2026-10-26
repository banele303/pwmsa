import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Printer } from "lucide-react";
import Newsletter2026Document from "@/components/Newsletter2026Document";

export const metadata: Metadata = {
  title: "Communications, Advocacy & Organisational Update 2026 | PWMSA Newsletter",
  description:
    "Official 2026 Newsletter and Organisational Update of the Progressive Women's Movement of South Africa (PWMSA). Milestone of Resistance and Organisation: 70 years of resistance, 20 years of organisation.",
  openGraph: {
    title: "PWMSA Communications, Advocacy & Organisational Update 2026",
    description:
      "Seventy years of resistance, twenty years of organisation. Complete 5-page official quarterly update from the Progressive Women's Movement of South Africa.",
    images: [
      {
        url: "/new-images/martch/20241012_164951 - Copy.jpg",
        width: 1200,
        height: 675,
        alt: "PWMSA Newsletter 2026",
      },
    ],
  },
};

export default function Newsletter2026Page() {
  return (
    <div className="min-h-screen bg-[#f1ede4] py-12 pt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Navigation Breadcrumb & Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#715832] hover:text-[#4a3720] transition-colors"
          >
            <ArrowLeft size={16} /> Back to News &amp; Statements Desk
          </Link>

          <div className="text-xs text-gray-500 font-medium">
            Official Publication &bull; August–October 2026
          </div>
        </div>

        {/* 1:1 Authentic 5-Page Document */}
        <Newsletter2026Document initialPage="all" showPageNavigation={true} />
      </div>
    </div>
  );
}
