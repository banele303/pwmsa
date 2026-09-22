import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldAlert,
  Users,
  Target,
  Heart,
  Shield,
  BookOpen,
  Landmark,
  Scale,
  Sparkles,
  CheckCircle2,
  Calendar,
  PhoneCall,
  Award,
  Globe2,
  FileText,
  Clock,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import InteractiveGallery from "@/components/InteractiveGallery";

export const metadata: Metadata = {
  title: "PWMSA | Progressive Women's Movement of South Africa",
  description:
    "The Progressive Women's Movement of South Africa (PWMSA) was established on 08 August 2006 in Bloemfontein to unite progressive women, advance gender equality, eliminate GBVF, and champion women's emancipation.",
  openGraph: {
    title: "PWMSA | Progressive Women's Movement of South Africa",
    description:
      "Advancing women's emancipation, gender equality, and social justice across all 9 provinces of South Africa.",
    images: [
      {
        url: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab1.jpg",
        width: 800,
        height: 676,
        alt: "PWMSA Women in Solidarity",
      },
    ],
  },
};

const mandateItems = [
  {
    num: "01",
    title: "Unite Women Nationwide",
    desc: "Unite progressive women across political, cultural, racial, and socio-economic lines around a singular, powerful women's emancipation agenda.",
    icon: Users,
    tag: "Unity",
  },
  {
    num: "02",
    title: "Strengthen Strategic Alliances",
    desc: "Build robust operational relationships between women's organisations, civil society, labour unions, and relevant state institutions.",
    icon: Heart,
    tag: "Partnership",
  },
  {
    num: "03",
    title: "Advocacy Platform",
    desc: "Provide an uncompromising national and international platform for women committed to advancing fundamental constitutional rights.",
    icon: Target,
    tag: "Voice",
  },
  {
    num: "04",
    title: "Eradicate Discrimination",
    desc: "Directly challenge patriarchal oppression, structural bias, workplace marginalisation, and systemic discrimination in all spheres of society.",
    icon: Scale,
    tag: "Justice",
  },
  {
    num: "05",
    title: "Gender Parity & Emancipation",
    desc: "Promote true gender parity in executive government, corporate boardrooms, academia, and local community governance structures.",
    icon: Award,
    tag: "Equality",
  },
  {
    num: "06",
    title: "Grassroots Mobilisation",
    desc: "Mobilise women around pressing socio-economic challenges, access to fertile land, clean water, and civic infrastructure in urban and rural areas.",
    icon: Globe2,
    tag: "Grassroots",
  },
  {
    num: "07",
    title: "Decisive GBVF Action",
    desc: "Strengthen preventative and institutional responses to Gender-Based Violence and Femicide with victim support and law enforcement accountability.",
    icon: ShieldAlert,
    tag: "Protection",
  },
  {
    num: "08",
    title: "Leadership Mentorship",
    desc: "Equip and mentor the next generation of women leaders to participate with authority in policy design and high-level decision-making.",
    icon: Landmark,
    tag: "Leadership",
  },
  {
    num: "09",
    title: "Economic Empowerment",
    desc: "Advance financial inclusion, enterprise development, procurement equity, and equal remuneration for work of equal value.",
    icon: TrendingUp,
    tag: "Economy",
  },
  {
    num: "10",
    title: "Youth & Educational Upliftment",
    desc: "Champion young women's access to tertiary education, STEM careers, vocational training, and modern digital economy skills.",
    icon: BookOpen,
    tag: "NextGen",
  },
];

const pillarsSummary = [
  {
    id: "01",
    title: "Eradication of GBVF",
    desc: "Multi-sectoral action against gender violence, survivor legal defense, community safety networks, and trauma support.",
    link: "/pillars",
    accent: "border-red-200 bg-red-50 text-red-700",
  },
  {
    id: "02",
    title: "Economic Transformation",
    desc: "Promoting female entrepreneurship, preferential procurement, enterprise incubators, and equal workplace pay.",
    link: "/pillars",
    accent: "border-amber-200 bg-amber-50 text-amber-800",
  },
  {
    id: "03",
    title: "Political Leadership",
    desc: "Advocating for 50/50 gender representation across parliamentary, provincial, municipal, and corporate decision bodies.",
    link: "/pillars",
    accent: "border-purple-200 bg-purple-50 text-purple-700",
  },
  {
    id: "04",
    title: "Healthcare & Rights",
    desc: "Universal maternal care, reproductive health autonomy, mental wellness, and comprehensive menstrual dignity drives.",
    link: "/pillars",
    accent: "border-teal-200 bg-teal-50 text-teal-800",
  },
  {
    id: "05",
    title: "Education & Skills",
    desc: "Bursary pipelines, STEM education for young girls, digital literacy hubs, and second-chance education for mothers.",
    link: "/pillars",
    accent: "border-blue-200 bg-blue-50 text-blue-700",
  },
  {
    id: "06",
    title: "Climate & Environmental Justice",
    desc: "Mobilising women to protect natural ecosystems, lead community river restorations, and champion climate resilience.",
    link: "/pillars",
    accent: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
];

const timelineEvents = [
  {
    year: "1956",
    title: "Historical Foundation",
    desc: "Over 20,000 women march to the Union Buildings in Pretoria against pass laws, establishing South Africa's legendary tradition of collective women's resistance.",
  },
  {
    year: "2006",
    title: "Official Bloemfontein Launch",
    desc: "On 08 August 2006, over 1,500 women leaders gather in Bloemfontein to establish the Progressive Women's Movement of South Africa (PWMSA) as a non-partisan mass vehicle.",
  },
  {
    year: "2012",
    title: "Provincial Structure Rollout",
    desc: "PWMSA activates formal executive and working committees in all 9 provinces, establishing direct grassroots links across both rural and urban areas.",
  },
  {
    year: "2018",
    title: "National GBVF Summit Advocacy",
    desc: "PWMSA plays a pivotal role in pushing for the National Strategic Plan on Gender-Based Violence and Femicide and community-led response teams.",
  },
  {
    year: "2024",
    title: "Enterprise & Economic Incubator",
    desc: "Launch of the WNC Women's Economic Empowerment Fund and enterprise training hubs in Mpumalanga and North West.",
  },
  {
    year: "2026",
    title: "Women's Parliament & Modern Rejuvenation",
    desc: "Presentation of the National Declaration Report in the Northern Cape and digital transformation of movement communications.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── CRISIS HELPLINE EMERGENCY BAR ── */}
      <div className="bg-[#5a1215] text-white py-2 px-4 border-b border-red-800/40 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <ShieldAlert size={16} className="text-red-400 shrink-0" />
            <span>
              <strong>URGENT GBVF CRISIS SUPPORT:</strong> 24/7 National Emergency Command Centre:
            </span>
            <a
              href="tel:0800428428"
              className="font-bold underline text-[#e8ce52] hover:text-white"
            >
              0800 428 428
            </a>
            <span className="hidden md:inline text-gray-300">| Please Call Me: *120*7867#</span>
          </div>
          <Link
            href="/contact"
            className="text-xs bg-[#e8ce52] text-[#4a3720] px-3 py-1 rounded font-bold hover:bg-white transition-colors"
          >
            Get Help &amp; Support
          </Link>
        </div>
      </div>

      {/* ── MASSIVE MODERN HERO SECTION ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-[#14100b] text-white overflow-hidden pt-20 pb-20">
        {/* Hero Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f160a] via-[#14100b] to-[#0d0a07] opacity-95" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(#e8ce52 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Gold Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e8ce52]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#715832]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* Movement Tagline Badge */}
              <div className="inline-flex items-center gap-2.5 bg-[#e8ce52]/10 border border-[#e8ce52]/30 px-4 py-2 rounded-full backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e8ce52] animate-ping" />
                <span className="text-[#e8ce52] text-xs sm:text-sm font-bold tracking-wider uppercase">
                  EST. 08 AUGUST 2006 • BLOEMFONTEIN, SOUTH AFRICA
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                ADVANCING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8ce52] via-[#ffd966] to-[#f4be41]">
                  WOMEN&apos;S EMANCIPATION,
                </span>
                <br />
                GENDER EQUALITY &amp;
                <br />
                <span className="text-[#e8ce52]">SOCIAL JUSTICE</span>
              </h1>

              {/* Subtitle / Lead Body */}
              <p className="text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                The <strong className="text-white font-semibold">Progressive Women&apos;s Movement of South Africa (PWMSA)</strong> is the nation&apos;s united frontline organisation fighting for gender equality, social transformation, economic power, and the total eradication of GBVF.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/partner"
                  className="inline-flex items-center gap-3 bg-[#e8ce52] text-[#4a3720] px-8 py-4 rounded-xl font-black text-base shadow-xl shadow-[#e8ce52]/20 hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  Partner with Us <ArrowRight size={18} />
                </Link>
                <Link
                  href="/pillars"
                  className="inline-flex items-center gap-2.5 bg-white/5 border border-white/20 text-white px-7 py-4 rounded-xl font-bold text-base hover:bg-white/10 hover:border-[#e8ce52]/60 transition-all duration-300"
                >
                  Explore 6 Pillars
                </Link>
                <Link
                  href="/campaigns"
                  className="inline-flex items-center gap-2 text-sm text-[#e8ce52] hover:text-white underline underline-offset-4 font-semibold px-2 py-4"
                >
                  View Active Campaigns <ArrowUpRight size={16} />
                </Link>
              </div>

              {/* Key Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#e8ce52]">2006</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                    Bloemfontein Founded
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#e8ce52]">9/9</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                    Provinces Organised
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#e8ce52]">1956</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                    Historic March Legacy
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Column (5 cols) — THE ORIGINAL FIRST IMAGE */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#e8ce52] to-[#715832] opacity-30 blur-lg" />

                {/* Main Featured Photo Box using the FIRST IMAGE: pwmsa-ab1.jpg */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#e8ce52]/50 shadow-2xl bg-[#1a150e]">
                  <Image
                    src="https://pwmsa.org.za/wp-content/uploads/pwmsa-ab1.jpg"
                    alt="PWMSA Progressive Women's Movement March & Gathering"
                    width={800}
                    height={676}
                    priority
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Photo Gradient Overlay & Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="inline-block bg-[#e8ce52] text-[#4a3720] text-xs font-black px-2.5 py-1 rounded w-max mb-2">
                      OFFICIAL PWMSA ARCHIVE
                    </span>
                    <h3 className="text-white text-xl font-bold">
                      United in Solidarity for Equality &amp; Justice
                    </h3>
                    <p className="text-gray-300 text-xs mt-1">
                      Members of the Progressive Women&apos;s Movement uniting at a national assembly.
                    </p>
                  </div>
                </div>

                {/* Floating Highlights Badges */}
                <div className="absolute -bottom-6 -left-6 bg-[#241a10] border border-[#e8ce52]/40 rounded-xl p-4 shadow-xl hidden sm:flex items-center gap-3 backdrop-blur-md">
                  <div className="p-2.5 rounded-lg bg-[#e8ce52] text-[#4a3720]">
                    <Shield size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-medium">Core Mandate</div>
                    <div className="text-white font-bold text-sm">GBVF Zero Tolerance</div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-[#241a10] border border-[#e8ce52]/40 rounded-xl p-4 shadow-xl hidden sm:flex items-center gap-3 backdrop-blur-md">
                  <div className="p-2.5 rounded-lg bg-[#e8ce52] text-[#4a3720]">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase font-medium">National Network</div>
                    <div className="text-white font-bold text-sm">All 9 SA Provinces</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICIAL TOP BANNER REPLICA BAR ── */}
      <section className="bg-[#e8ce52] py-4 shadow-inner border-y border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-[#715832] text-white rounded-lg">
                <CheckCircle2 size={20} />
              </span>
              <p className="text-[#4a3720] font-black text-base sm:text-xl tracking-wide uppercase">
                UNITED FOR GENDER EQUALITY. UNITED FOR WOMEN&apos;S EMPOWERMENT.
              </p>
            </div>
            <Link
              href="/partner"
              className="bg-[#715832] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#4a3720] transition-colors whitespace-nowrap"
            >
              Join Our Movement Today
            </Link>
          </div>
        </div>
      </section>

      {/* ── HISTORICAL LEGACY & FOUNDING STORY ── */}
      <section className="py-24 bg-[#faf6ee] text-gray-900 border-b border-amber-200/70 relative overflow-hidden">
        {/* Subtle ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e8ce52]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#715832]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header Block */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#715832] bg-[#e8ce52]/25 border border-[#e8ce52]/40 px-3.5 py-1.5 rounded-full">
              Historical Legacy &amp; Founding Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#261d12] tracking-tight leading-tight">
              About the Progressive Women&apos;s Movement of South Africa
            </h2>
            <div className="w-16 h-1 bg-[#e8ce52] rounded-full mx-auto" />
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
              The <strong className="text-[#715832] font-semibold">Progressive Women&apos;s Movement of South Africa (PWMSA)</strong> was formally established on <strong className="text-black font-semibold">08th August 2006 in Bloemfontein</strong> in response to the ongoing marginalisation, patriarchal domination, and systemic violence experienced by women across our country.
            </p>
          </div>

          {/* Historic Quote Callout Box */}
          <div className="bg-gradient-to-r from-[#241a10] via-[#2f2214] to-[#241a10] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-amber-500/30 relative overflow-hidden">
            <div className="absolute top-4 right-6 text-[#e8ce52]/10 text-8xl font-serif font-black select-none pointer-events-none">
              &ldquo;
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <span className="text-[#e8ce52] text-xs font-black uppercase tracking-widest">
                The Heritage of 1956
              </span>
              <blockquote className="text-2xl sm:text-3xl font-black italic text-amber-100 leading-snug">
                &ldquo;Wathint&apos; Abafazi, Wathint&apos; Imbokodo!&rdquo;
              </blockquote>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                The Movement&apos;s spirit is deeply rooted in the historic struggles of South African women. It draws directly from the heroic legacy of the <strong className="text-white">1956 Women&apos;s March</strong>, when 20,000 women marched to the Union Buildings in Pretoria against pass laws—establishing our enduring tradition of collective defiance, solidarity, and constitutional transformation.
              </p>
            </div>
          </div>

          {/* 3 Heritage Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#715832]">1956</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#715832] bg-[#e8ce52]/20 px-2.5 py-0.5 rounded-full">
                    Heritage
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#715832] transition-colors">
                  The Historic Women&apos;s March
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  20,000 courageous women of all races united to demand bodily freedom, an end to oppressive pass laws, and total human equality—founding the generational vanguard of South African feminist activism.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-amber-100 text-xs text-gray-500 font-medium">
                Generational Foundation
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#715832]">2006</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#715832] bg-[#e8ce52]/20 px-2.5 py-0.5 rounded-full">
                    Founding
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#715832] transition-colors">
                  The Bloemfontein Covenant
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Over 1,500 delegates convened on 08 August 2006 to formally establish PWMSA as a broad-based, non-partisan mass movement consolidating the collective power of trade unions, civic leagues, and community activists.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-amber-100 text-xs text-gray-500 font-medium">
                National Consolidation
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#715832]">2026+</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#715832] bg-[#e8ce52]/20 px-2.5 py-0.5 rounded-full">
                    Mission
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#715832] transition-colors">
                  The Continuing Struggle
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Addressing the triple crises of poverty, unemployment, and inequality with active working committees across all 9 provinces—eradicating GBVF, championing 50/50 parity, and building economic sovereignty.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-amber-100 text-xs text-gray-500 font-medium">
                Modern Frontline Vanguard
              </div>
            </div>
          </div>

          {/* Foundational Principles Strip */}
          <div className="bg-white/80 backdrop-blur-sm border border-amber-200/80 rounded-2xl p-8 shadow-sm">
            <h4 className="text-center text-xs font-black uppercase tracking-widest text-[#715832] mb-6">
              Foundational Principles of the Movement
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Non-Partisan Coalition", desc: "Uniting women across all political, cultural, and socio-economic spheres." },
                { title: "Constitutional Equality", desc: "Grounded in Section 9 of the Bill of Rights guaranteeing total parity." },
                { title: "Grassroots Presence", desc: "Organised branch committees operating across all 9 provinces." },
                { title: "Zero Tolerance for GBVF", desc: "Demanding systemic judicial accountability and comprehensive victim care." },
                { title: "Economic Self-Determination", desc: "Dismantling structural poverty through enterprise and land tenure." },
                { title: "Intergenerational Leadership", desc: "Mentoring young women to lead in policy, governance, and technology." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-amber-50/50 transition-colors">
                  <CheckCircle2 size={18} className="text-[#715832] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm text-gray-900 block font-bold">{item.title}</strong>
                    <span className="text-xs text-gray-600 leading-snug">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 10 MANDATES OF PWMSA (YELLOW & BLACK THEME • ZERO ICONS) ── */}
      <section className="py-24 bg-[#14100b] text-white relative overflow-hidden border-y border-[#e8ce52]/20">
        {/* Ambient yellow/gold lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#e8ce52]/10 rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#e8ce52 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-[#e8ce52] text-[#14100b] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-[#e8ce52]/20">
              Core Strategic Directives
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Our 10 National Mandates
            </h2>
            <div className="w-16 h-1 bg-[#e8ce52] rounded-full mx-auto" />
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed pt-2">
              Reaffirmed during the Special Alliance Conference, these ten foundational directives form our operational covenant with the women of South Africa.
            </p>
          </div>

          {/* 10 Mandates: Numbered Dual-Column Architectural Dossier Grid (NO ICONS) */}
          <div className="grid md:grid-cols-2 gap-6">
            {mandateItems.map((item) => (
              <div
                key={item.num}
                className="bg-[#1e1710] border border-[#e8ce52]/25 hover:border-[#e8ce52] rounded-2xl p-7 transition-all duration-300 hover:bg-[#251d14] flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  {/* Top Bar: Number + Monospace Tag */}
                  <div className="flex items-center justify-between border-b border-[#e8ce52]/15 pb-3">
                    <span className="text-2xl sm:text-3xl font-black text-[#e8ce52] tracking-wider select-none">
                      #{item.num}
                    </span>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#e8ce52] bg-[#e8ce52]/10 border border-[#e8ce52]/30 px-3 py-1 rounded-full uppercase">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-[#e8ce52] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mt-2.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Binding Directive Label (NO ICONS) */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-gray-400">
                  <span className="text-[#e8ce52] uppercase tracking-wider">PWMSA Action Directive</span>
                  <span className="text-gray-500 font-mono">BINDING CHARTER</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 STRATEGIC PILLARS DIRECTORY (ICON-FREE EDITORIAL DESIGN) ── */}
      <section className="py-24 bg-white text-gray-900 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Left Overview Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <span className="text-[#715832] bg-amber-100 border border-amber-300 px-3 py-1 rounded text-xs font-black uppercase tracking-widest inline-block">
                Focus Areas
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                Our 6 Strategic Pillars
              </h2>
              <div className="w-12 h-1 bg-[#e8ce52] rounded-full" />
              <p className="text-gray-600 text-base leading-relaxed">
                Everything we do is focused through these six systemic pillars, addressing structural issues at policy, legal, and grassroots community levels across South Africa.
              </p>
              <div className="pt-2">
                <Link
                  href="/pillars"
                  className="inline-block bg-[#715832] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#4a3720] transition-colors shadow-md"
                >
                  View Full Strategic Roadmap
                </Link>
              </div>
            </div>

            {/* Right Column: Numbered Architectural Strips (NO ICONS) */}
            <div className="lg:col-span-8 divide-y divide-amber-200/80 border-y border-amber-200/80">
              {pillarsSummary.map((pillar) => (
                <div
                  key={pillar.id}
                  className="py-8 sm:py-10 transition-all duration-300 hover:bg-[#fdfbf7] px-4 sm:px-6 rounded-2xl group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                    {/* Architectural Number */}
                    <span className="text-3xl sm:text-4xl font-black text-amber-300 group-hover:text-[#715832] transition-colors shrink-0 select-none">
                      {pillar.id}
                    </span>

                    {/* Content */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#715832] transition-colors">
                          {pillar.title}
                        </h3>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#715832] bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded">
                          Strategic Directive
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-1">
                        {pillar.desc}
                      </p>
                      <div className="pt-3">
                        <Link
                          href={pillar.link}
                          className="text-xs font-bold uppercase tracking-wider text-[#715832] hover:text-black transition-colors underline underline-offset-4"
                        >
                          Explore Strategic Framework
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO ARCHIVE & INTERACTIVE BENTO GALLERY ── */}
      <InteractiveGallery />

      {/* ── 20-YEAR TIMELINE OF HISTORICAL IMPACT ── */}
      <section className="py-24 bg-white text-gray-900 border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#715832] bg-amber-100 border border-amber-300 px-3 py-1 rounded text-xs font-black uppercase tracking-widest">
              From 1956 to 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a]">
              Two Decades of Organised Power
            </h2>
            <p className="text-gray-600">
              Tracing our origins from the historic Women&apos;s March through twenty years of dedicated PWMSA activism.
            </p>
          </div>

          <div className="relative border-l-2 border-[#e8ce52] ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
            {timelineEvents.map((ev, i) => (
              <div key={i} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#715832] border-4 border-white shadow-md group-hover:bg-[#e8ce52] transition-colors" />

                <div className="bg-[#fdfaf3] border border-amber-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-[#715832]">{ev.year}</span>
                    <span className="text-xs bg-[#e8ce52]/30 text-[#4a3720] px-2.5 py-0.5 rounded font-bold uppercase">
                      Milestone
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{ev.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION & INVOLVEMENT ── */}
      <section className="py-24 bg-[#715832] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <span className="inline-block bg-[#e8ce52] text-[#4a3720] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
            Stand in Solidarity
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Be Part of the Historic Movement for Gender Equality
          </h2>
          <p className="text-amber-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you are an individual woman ready to participate in your local branch, an organisation seeking coalition partnership, or a corporate entity advancing B-BBEE gender transformation — PWMSA welcomes you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link
              href="/partner"
              className="inline-flex items-center gap-3 bg-[#e8ce52] text-[#4a3720] px-8 py-4 rounded-xl font-black text-lg hover:bg-white hover:scale-105 transition-all shadow-xl"
            >
              Partner with Us <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Contact National Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
