"use client";

import { useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  MapPin,
  Sparkles,
} from "lucide-react";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: "marches" | "governance" | "grassroots" | "enterprise";
  location: string;
  date: string;
  span?: string; // For bento grid spans
}

const galleryData: GalleryItem[] = [
  {
    id: "ab1",
    src: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab1.jpg",
    title: "National Solidarity & Mass Mobilisation",
    subtitle:
      "PWMSA delegates assembling in national regalia to demand immediate judicial accountability and gender parity.",
    category: "marches",
    location: "Bloemfontein, Free State",
    date: "Historic Founding & Annual Assemblies",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "ab2",
    src: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab2.jpg",
    title: "Special Alliance National Conference",
    subtitle:
      "Convenors and delegates from all 9 provinces deliberating on constitutional resolutions and movement charters.",
    category: "governance",
    location: "Gauteng Provincial Hub",
    date: "National Policy Summit",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "parliament",
    src: "https://pwmsa.org.za/wp-content/uploads/20250718_080227-768x576.jpg",
    title: "Women's Parliament 2026 Declaration",
    subtitle:
      "PWMSA CEO presenting the National Declaration Report demanding enforceable 50/50 statutory representation.",
    category: "governance",
    location: "Kimberley, Northern Cape",
    date: "August 2026",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "enterprise",
    src: "https://pwmsa.org.za/wp-content/uploads/20250718_071213-768x576.jpg",
    title: "WNC Enterprise Incubator Rollout",
    subtitle:
      "Graduation of female entrepreneurs in compliance, financial management, and cooperative supply chains.",
    category: "enterprise",
    location: "Nelspruit, Mpumalanga",
    date: "June 2026",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "youth",
    src: "https://pwmsa.org.za/wp-content/uploads/20241012_164953-Copy-Copy-768x576.jpg",
    title: "Next-Gen Youth Representation Chapter",
    subtitle:
      "Ms Phumelela Zigoxo leading mentorship and civic education workshops for university and TVET delegates.",
    category: "grassroots",
    location: "Johannesburg & Soweto",
    date: "July 2026",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gathering",
    src: "https://pwmsa.org.za/wp-content/uploads/20241012_132501.jpg",
    title: "Grassroots Imbizo & Survivor Dialogues",
    subtitle:
      "Community women gathering to establish neighborhood rapid response task forces against gender violence.",
    category: "grassroots",
    location: "Soweto, Gauteng",
    date: "October 2024",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: "jukskei",
    src: "https://pwmsa.org.za/wp-content/uploads/20250130_145419-768x576.jpg",
    title: "Alexander Jukskei Eco-Justice Action",
    subtitle:
      "Over 350 volunteers cleaning critical waterways and educating residents on environmental health rights.",
    category: "grassroots",
    location: "Alexandra Township",
    date: "January 2025 – 2026",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "ab4",
    src: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab4.jpg",
    title: "Constitutional Advocacy & Rights March",
    subtitle:
      "Standing resolute against discriminatory customary and workplace practices across South Africa.",
    category: "marches",
    location: "Durban Central, KZN",
    date: "Provincial Solidarity Day",
    span: "md:col-span-1 md:row-span-1",
  },
];

const categories = [
  { id: "all", label: "All Archives (8)" },
  { id: "marches", label: "Marches & Mobilisation" },
  { id: "governance", label: "Governance & Parliament" },
  { id: "enterprise", label: "Enterprise Incubators" },
  { id: "grassroots", label: "Grassroots & Community" },
] as const;

export default function InteractiveGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  };

  return (
    <section className="py-24 bg-[#14100b] text-white relative overflow-hidden border-t border-[#e8ce52]/20">
      {/* Background glow and subtle dot grid */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#e8ce52]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#715832]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#14100b] bg-[#e8ce52] px-3.5 py-1.5 rounded-full shadow-lg shadow-[#e8ce52]/20">
              <Sparkles size={14} /> Official Photo Archives
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              The Movement in Action
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Explore authentic archival photographs from our national assemblies, street mobilisations, provincial imbizos, and enterprise launches across South Africa.
            </p>
          </div>

          <div className="text-xs text-gray-400 font-mono border-l-2 border-[#e8ce52] pl-3 py-1">
            <span className="text-[#e8ce52] font-bold block text-sm">2006 – 2026</span>
            HISTORICAL DOCUMENTATION
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-white/10 pb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#e8ce52] text-[#14100b] shadow-lg shadow-[#e8ce52]/25 scale-105"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Bento Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[240px]">
          {filteredPhotos.map((item, idx) => {
            const isFeatured = item.span && item.span.includes("col-span-2");
            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#e8ce52] transition-all duration-500 shadow-xl bg-[#1e1710] ${
                  item.span ? item.span : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Ambient dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge: Category & Expand Icon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-black/60 text-[#e8ce52] border border-[#e8ce52]/40 px-2.5 py-1 rounded-full backdrop-blur-md">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1.5 pointer-events-none">
                  <div className="flex items-center gap-3 text-[11px] text-gray-300">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#e8ce52]" /> {item.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#e8ce52]" /> {item.date}
                    </span>
                  </div>

                  <h3
                    className={`font-black text-white group-hover:text-[#e8ce52] transition-colors leading-snug ${
                      isFeatured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            aria-label="Close photo view"
          >
            <X size={24} />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-[#e8ce52] hover:text-[#14100b] text-white rounded-full transition-all shadow-lg"
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Navigation Next */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-[#e8ce52] hover:text-[#14100b] text-white rounded-full transition-all shadow-lg"
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#1a140d] rounded-3xl overflow-hidden border border-[#e8ce52]/40 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Image Preview Box (60%) */}
            <div className="relative md:w-3/5 min-h-[340px] md:min-h-[500px] bg-black">
              <Image
                src={filteredPhotos[activePhotoIndex].src}
                alt={filteredPhotos[activePhotoIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Narrative Context Sidebar (40%) */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6 bg-[#1f1710]">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#e8ce52] font-mono">
                  <span>
                    PHOTO {activePhotoIndex + 1} OF {filteredPhotos.length}
                  </span>
                  <span className="uppercase bg-[#e8ce52]/10 border border-[#e8ce52]/30 px-2 py-0.5 rounded">
                    {filteredPhotos[activePhotoIndex].category}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white leading-tight">
                  {filteredPhotos[activePhotoIndex].title}
                </h3>

                <div className="space-y-2 text-xs text-gray-300 border-y border-white/10 py-3">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#e8ce52]" />
                    <span>
                      <strong>Location:</strong> {filteredPhotos[activePhotoIndex].location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#e8ce52]" />
                    <span>
                      <strong>Timeline:</strong> {filteredPhotos[activePhotoIndex].date}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {filteredPhotos[activePhotoIndex].subtitle}
                </p>

                <div className="p-4 bg-black/40 rounded-xl border border-white/5 text-xs text-gray-400 leading-relaxed">
                  <strong className="text-white block mb-1">Archival Record:</strong>
                  Documented under the Progressive Women&apos;s Movement of South Africa historical preservation charter. All rights reserved.
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gray-400">PWMSA National Media Desk</span>
                <button
                  onClick={closeLightbox}
                  className="text-xs bg-[#e8ce52] text-[#14100b] px-4 py-2 rounded-lg font-bold hover:bg-white transition-colors"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
