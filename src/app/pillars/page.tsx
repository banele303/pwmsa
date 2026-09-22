import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldAlert,
  TrendingUp,
  Award,
  BookOpen,
  HeartHandshake,
  Sprout,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Download,
  AlertCircle,
  Building,
  Scale,
  Users2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Strategic Pillars | PWMSA Focus Areas & National Directives",
  description:
    "Explore the 6 Strategic Pillars of the Progressive Women's Movement of South Africa: GBVF Eradication, Economic Empowerment, Political Participation, Healthcare, Education & Skills, and Climate Justice.",
  openGraph: {
    title: "Strategic Pillars | PWMSA Focus Areas",
    description:
      "Comprehensive programmatic roadmap advancing women's rights, emancipation, and economic autonomy in South Africa.",
    images: [
      {
        url: "https://pwmsa.org.za/wp-content/uploads/2026/08/symbol@2x.png",
        width: 1200,
        height: 630,
        alt: "PWMSA Strategic Pillars",
      },
    ],
  },
};

const pillarsDetailed = [
  {
    num: "01",
    title: "Eradication of GBV and Femicide",
    subtitle: "Ending Impunity, Supporting Survivors & Transforming Culture",
    icon: ShieldAlert,
    bannerImage: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab1.jpg",
    accent: "red",
    borderColor: "border-red-500",
    badgeColor: "bg-red-100 text-red-800 border-red-200",
    overview:
      "South Africa confronts an endemic crisis of Gender-Based Violence and Femicide (GBVF). PWMSA treats GBVF not as an isolated criminal matter, but as an acute national crisis requiring uncompromising legislative enforcement, rapid judicial processing, survivor trauma healing, and community-led preventative intervention.",
    strategicObjectives: [
      "Establish and resource community-based rapid response teams in high-incident police precincts across all 9 provinces.",
      "Monitor criminal justice outcomes and eliminate unreasonable delays in sexual assault and domestic violence court rolls.",
      "Expand accessible shelters, interim safe houses, and psychosocial trauma counseling for women and children in peri-urban and rural areas.",
      "Mandate gender-sensitisation training for South African Police Service (SAPS) frontline officers and healthcare personnel.",
      "Conduct school and community educational drives targeting young boys and men to dismantle patriarchal entitlement and abusive norms.",
    ],
    measurableTargets: [
      { metric: "100%", label: "Support for victim-centred court preparations" },
      { metric: "54+", label: "Safe spaces linked with civil shelter networks" },
      { metric: "24/7", label: "Advocacy hotline coordination across provinces" },
    ],
    currentInitiative:
      "The GP-PWMSA Soweto GBVF Mobilisation task force continues to demand judicial accountability for victims of clergy and domestic violence, tracking 38 ongoing court cases to ensure justice is served.",
  },
  {
    num: "02",
    title: "Economic Empowerment & Enterprise",
    subtitle: "Financial Sovereignty, Equal Pay & Sustainable Livelihoods",
    icon: TrendingUp,
    bannerImage: "https://pwmsa.org.za/wp-content/uploads/20250718_071213-768x576.jpg",
    accent: "amber",
    borderColor: "border-amber-500",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    overview:
      "True liberation is impossible without economic freedom. PWMSA dismantles systemic economic barriers by advocating for women's ownership of land, direct inclusion in supply chains, access to debt-free capital, cooperative development, and the strict enforcement of equal pay for equal work.",
    strategicObjectives: [
      "Accelerate the rollout of the PWMSA WNC Women's Enterprise Incubator in Mpumalanga, Free State, and Limpopo.",
      "Lobby government departments and state-owned enterprises to fulfill the 40% preferential procurement mandate for women-owned enterprises.",
      "Facilitate partnerships with development finance institutions (DFIs) to provide accessible micro-loans and blended enterprise grants.",
      "Establish rural women's agro-processing cooperatives, providing collective cold-storage, transport, and formal retail market linkages.",
      "Eliminate the pervasive gender pay gap across both public sector scales and private corporate industries through transparent reporting.",
    ],
    measurableTargets: [
      { metric: "R50M+", label: "Value of preferential enterprise opportunities facilitated" },
      { metric: "2,500+", label: "Women trained in business governance & compliance" },
      { metric: "15+", label: "Agri-cooperatives supported with equipment & market access" },
    ],
    currentInitiative:
      "The Mpumalanga Enterprise Development Programme has successfully trained 200 female micro-entrepreneurs in compliance, financial bookkeeping, and local procurement readiness.",
  },
  {
    num: "03",
    title: "Political Participation & Leadership",
    subtitle: "Equal Governance, Mentorship & Institutional Parity",
    icon: Award,
    bannerImage: "https://pwmsa.org.za/wp-content/uploads/20250718_080227-768x576.jpg",
    accent: "purple",
    borderColor: "border-purple-500",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    overview:
      "Women constitute more than 51% of South Africa's population, yet remain underrepresented in key economic and political executive positions. PWMSA actively mentors women for political office, civic governance, judicial appointments, and trade union leadership.",
    strategicObjectives: [
      "Campaign for enforceable statutory 50/50 gender quotas on all political party electoral candidate lists for local and national elections.",
      "Conduct structured political academies preparing young and emerging female leaders for executive governance and parliamentary oversight.",
      "Establish non-partisan Women Parliamentary Caucuses at provincial legislature and national assembly levels.",
      "Monitor municipal budgeting processes to ensure public expenditures reflect gender-responsive resource allocations.",
      "Elevate the voices of working-class and rural women in legislative public hearings and constitutional reviews.",
    ],
    measurableTargets: [
      { metric: "50%", label: "Constitutional target for female executive representation" },
      { metric: "9", label: "Provincial leadership training academies running annually" },
      { metric: "500+", label: "Emerging women leaders mentored through PWMSA structures" },
    ],
    currentInitiative:
      "At the Women's Parliament in the Northern Cape, PWMSA's CEO tabled the 2026 Declaration Report demanding statutory compliance on gender representation quotas.",
  },
  {
    num: "04",
    title: "Healthcare, Maternal Well-Being & Reproductive Rights",
    subtitle: "Universal Healthcare, Dignity & Bodily Autonomy",
    icon: HeartHandshake,
    bannerImage: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab4.jpg",
    accent: "teal",
    borderColor: "border-teal-500",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    overview:
      "Bodily autonomy and healthcare dignity are fundamental constitutional rights. PWMSA advocates for quality, dignified maternal care in public clinics, comprehensive sexual and reproductive healthcare services, universal sanitary dignity for schoolgirls, and comprehensive mental health support for trauma survivors.",
    strategicObjectives: [
      "Ensure free, dignified sanitary product distribution across all quintile 1 to 3 public schools to eradicate menstrual absenteeism.",
      "Audit rural maternal health wards and clinics to eliminate obstetric mistreatment and reduce preventable maternal mortality.",
      "Expand non-judgmental reproductive healthcare and family planning services in primary healthcare facilities.",
      "Integrate trauma-informed psychosocial counseling into district clinic networks for victims of domestic and gender violence.",
      "Champion the gender-responsive implementation of the National Health Insurance (NHI) framework.",
    ],
    measurableTargets: [
      { metric: "100k+", label: "Dignity packs distributed to schoolgirls annually" },
      { metric: "120+", label: "Clinic oversight visits conducted by community monitors" },
      { metric: "0", label: "Tolerance for obstetric violence and medical negligence" },
    ],
    currentInitiative:
      "PWMSA's Sanitary Dignity Campaign has distributed over 35,000 sanitary dignity care packs to rural schools across KwaZulu-Natal, Eastern Cape, and Limpopo.",
  },
  {
    num: "05",
    title: "Education, STEM & Next-Generation Skills",
    subtitle: "Bridging the Digital Divide & Unleashing Youth Potential",
    icon: BookOpen,
    bannerImage: "https://pwmsa.org.za/wp-content/uploads/20241012_164953-Copy-Copy-768x576.jpg",
    accent: "blue",
    borderColor: "border-blue-500",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    overview:
      "Young women face disproportionate hurdles in educational retention and entry into future-oriented technology and scientific careers. PWMSA drives initiatives to support girls in Science, Technology, Engineering, and Mathematics (STEM), alongside second-chance adult literacy programmes.",
    strategicObjectives: [
      "Establish regional STEM and coding clubs for young girls in township and rural secondary schools.",
      "Secure corporate and philanthropic bursary allocations specifically reserved for women pursuing STEM and critical-skills degrees.",
      "Provide second-chance education and adult matriculation support for young mothers and women who dropped out of formal schooling.",
      "Equip youth with practical digital literacy, online trade, and coding competencies to participate in the modern knowledge economy.",
      "Offer structured internship and apprenticeship placements through PWMSA's corporate partner network.",
    ],
    measurableTargets: [
      { metric: "1,200+", label: "Young women enrolled in tech & STEM workshops" },
      { metric: "250+", label: "Tertiary education bursaries facilitated" },
      { metric: "85%", label: "Job & internship placement rate for academy graduates" },
    ],
    currentInitiative:
      "Under Youth Representative Ms Phumelela Zigoxo, the PWMSA Youth Leadership Chapter has activated digital bootcamps in Gauteng and the Western Cape.",
  },
  {
    num: "06",
    title: "Climate Justice, Environment & Food Sovereignty",
    subtitle: "Eco-Feminism, Sustainable Land Access & Clean Communities",
    icon: Sprout,
    bannerImage: "https://pwmsa.org.za/wp-content/uploads/20250130_145419-768x576.jpg",
    accent: "emerald",
    borderColor: "border-emerald-500",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    overview:
      "Climate change and environmental degradation disproportionately impact women, particularly subsistence farmers and informal settlement dwellers. PWMSA mobilises women as frontline ecological stewards, championing clean water sources, renewable energy access, and climate resilience.",
    strategicObjectives: [
      "Mobilise community-led river clean-up and environmental restoration drives, such as the flagship Alexander Jukskei River initiative.",
      "Advocate for land redistribution programmes that prioritise title deeds and agricultural tenure for women smallholder farmers.",
      "Promote climate-smart agro-ecology techniques, organic household food gardens, and local seed-sharing banks.",
      "Demand gender-sensitive disaster management plans in flood-prone and drought-stricken informal settlements.",
      "Ensure women's representation in national just energy transition policy consultations and green economy investments.",
    ],
    measurableTargets: [
      { metric: "20+", label: "Tons of riverbed waste removed through clean-ups" },
      { metric: "500+", label: "Household permaculture food gardens established" },
      { metric: "10+", label: "Community eco-guardian teams actively deployed" },
    ],
    currentInitiative:
      "The Alexander Jukskei River Clean-up brought together 300+ community volunteers to rehabilitate critical waterways and educate residents on environmental health.",
  },
];

export default function PillarsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO BANNER (YELLOW BRAND BACKGROUND) ── */}
      <section className="relative bg-[#e8ce52] text-[#1f170e] pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden border-b border-amber-500/20">
        {/* Subtle decorative glow elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#715832]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Main Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#2d2113] text-[#e8ce52] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                <span>Strategic Blueprint 2026 – 2030</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-[#1f170e] tracking-tight leading-[1.08]">
                Our 6 Strategic <br />
                <span className="text-[#59401e]">Programmatic Pillars</span>
              </h1>

              <p className="text-[#3d2b17] text-lg sm:text-xl font-medium leading-relaxed max-w-2xl">
                The Progressive Women&apos;s Movement of South Africa anchors all policy, grassroots campaigns, and institutional interventions around six interconnected pillars. These focus areas address the root causes of gender inequality, poverty, and violence.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#pillar-01"
                  className="inline-flex items-center gap-2 bg-[#1f170e] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#3d2b17] shadow-lg shadow-[#1f170e]/20 hover:scale-[1.02] transition-all"
                >
                  Explore Pillars <ArrowRight size={16} />
                </a>
                <Link
                  href="/partner"
                  className="inline-flex items-center gap-2 bg-white/85 hover:bg-white text-[#1f170e] border border-[#1f170e]/20 px-7 py-3.5 rounded-xl font-bold text-sm shadow-sm hover:shadow transition-all"
                >
                  Fund or Partner a Pillar
                </Link>
              </div>
            </div>

            {/* Impact Directives Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-[#715832]/20 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-amber-200/80 pb-4">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#715832]">
                      National Directives
                    </span>
                    <h3 className="text-lg font-black text-gray-900">
                      Measurable Targets
                    </h3>
                  </div>
                  <span className="text-sm font-black text-[#715832] bg-[#e8ce52]/40 border border-amber-300 px-3 py-1 rounded-xl">
                    6 Pillars Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-[#faf6ee] p-3.5 rounded-2xl border border-amber-200/60">
                    <div className="text-2xl font-black text-[#715832]">100%</div>
                    <div className="text-xs text-gray-700 font-semibold mt-0.5">Victim-Centred Court Advocacy</div>
                  </div>
                  <div className="bg-[#faf6ee] p-3.5 rounded-2xl border border-amber-200/60">
                    <div className="text-2xl font-black text-[#715832]">40%</div>
                    <div className="text-xs text-gray-700 font-semibold mt-0.5">Preferential Procurement Goal</div>
                  </div>
                  <div className="bg-[#faf6ee] p-3.5 rounded-2xl border border-amber-200/60">
                    <div className="text-2xl font-black text-[#715832]">50/50</div>
                    <div className="text-xs text-gray-700 font-semibold mt-0.5">Statutory Gender Quota Drive</div>
                  </div>
                  <div className="bg-[#faf6ee] p-3.5 rounded-2xl border border-amber-200/60">
                    <div className="text-2xl font-black text-[#715832]">100k+</div>
                    <div className="text-xs text-gray-700 font-semibold mt-0.5">Dignity Packs Distributed</div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed border-t border-amber-200/80 pt-4">
                  Each pillar operates under direct mandate from the PWMSA National Steering Committee, driving monitored outcomes with grassroots tracking across all 9 provinces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV TILES ── */}
      <section className="py-10 bg-white border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {pillarsDetailed.map((p) => (
              <a
                key={p.num}
                href={`#pillar-${p.num}`}
                className="p-3.5 bg-[#fdfaf4] border border-amber-200 rounded-xl text-center hover:border-[#715832] hover:bg-[#e8ce52]/10 transition-all group"
              >
                <span className="text-xl font-black text-[#715832] block">{p.num}</span>
                <span className="text-xs font-bold text-gray-800 line-clamp-2 mt-1 group-hover:text-[#715832]">
                  {p.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAILED PILLARS COMPREHENSIVE BREAKDOWN ── */}
      <section className="py-20 bg-[#faf7f0] space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {pillarsDetailed.map((p, idx) => {
            const Icon = p.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={p.num}
                id={`pillar-${p.num}`}
                className={`bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-amber-200/80 scroll-mt-28 flex flex-col lg:grid lg:grid-cols-12 gap-10 items-start ${
                  isReversed ? "lg:[&>*]:order-2" : ""
                }`}
              >
                {/* Left Visual & Metrics (5 cols) */}
                <div className="lg:col-span-5 w-full space-y-6">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-amber-100">
                    <Image
                      src={p.bannerImage}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-bold bg-[#e8ce52] text-[#4a3720] px-2 py-0.5 rounded">
                        PILLAR {p.num}
                      </span>
                      <h4 className="font-bold text-base mt-1">{p.subtitle}</h4>
                    </div>
                  </div>

                  {/* Impact Targets Grid */}
                  <div className="bg-[#fcfaf5] border border-amber-200/70 rounded-2xl p-5 space-y-3">
                    <div className="text-xs font-black uppercase tracking-wider text-[#715832]">
                      Target Impact Metrics (2026 – 2030)
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                      {p.measurableTargets.map((t, i) => (
                        <div key={i} className="p-2 bg-white rounded-xl border border-amber-100">
                          <div className="text-lg font-black text-[#715832]">{t.metric}</div>
                          <div className="text-[10px] text-gray-600 leading-tight mt-1">{t.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Box */}
                  <div className="bg-amber-50 border-l-4 border-[#e8ce52] rounded-r-xl p-4 text-xs text-gray-800 leading-relaxed">
                    <strong className="text-[#715832] block mb-1">Active Initiative:</strong>
                    {p.currentInitiative}
                  </div>
                </div>

                {/* Right Content Column (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#e8ce52] text-[#4a3720] rounded-2xl shadow-sm">
                      <Icon size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-black text-[#715832] uppercase tracking-widest">
                        Strategic Focus Area {p.num}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
                        {p.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {p.overview}
                  </p>

                  <div className="space-y-4 pt-2">
                    <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-[#715832]" />
                      Key Strategic Interventions:
                    </h3>
                    <ul className="space-y-3">
                      {p.strategicObjectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#715832] mt-2 shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-amber-100 flex flex-wrap items-center gap-4">
                    <Link
                      href="/partner"
                      className="inline-flex items-center gap-2 bg-[#715832] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#4a3720] transition-colors"
                    >
                      Partner on this Pillar <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/campaigns"
                      className="text-sm font-bold text-[#715832] hover:underline"
                    >
                      See Associated Campaigns &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-20 bg-[#1a140d] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[#e8ce52] text-xs font-bold uppercase tracking-widest">
            Collaborative Action
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Support a Specific Pillar of Intervention
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base">
            Whether your corporate social investment aligns with enterprise development, girls in STEM, or survivor protection, PWMSA provides structured, audited partnership conduits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href="/partner"
              className="bg-[#e8ce52] text-[#4a3720] px-8 py-3.5 rounded-xl font-black hover:bg-white transition-colors"
            >
              Express Partnership Interest
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Contact National Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
