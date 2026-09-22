import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Flame,
  CheckCircle2,
  Share2,
  FileText,
  Clock,
  Heart,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Active Campaigns | PWMSA Movement in Action",
  description:
    "Explore current and recent PWMSA campaigns across South Africa: Jukskei River Clean-up, Soweto GBVF March, Mpumalanga Enterprise Hub, Women's Parliament 2026, and youth advocacy.",
  openGraph: {
    title: "Active Campaigns | PWMSA Movement in Action",
    description:
      "Grassroots advocacy, direct action, and policy transformation campaigns led by the Progressive Women's Movement of South Africa.",
    images: [
      {
        url: "https://pwmsa.org.za/wp-content/uploads/20250130_145419-768x576.jpg",
        width: 768,
        height: 576,
        alt: "PWMSA Environmental Clean-up Campaign",
      },
    ],
  },
};

const campaignsDetailed = [
  {
    id: "jukskei-clean-up",
    title: "Alexander Jukskei River Clean-Up & Eco-Justice",
    lead: "Environmental Stewardship Led by Township Women & Youth",
    category: "Climate & Environmental Justice",
    location: "Alexandra Township, Gauteng",
    date: "Annual & Ongoing Action 2025 – 2026",
    status: "Active & Expanding",
    statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    image: "https://pwmsa.org.za/wp-content/uploads/20250130_145419-768x576.jpg",
    problemStatement:
      "The Jukskei River, flowing through Alexandra township, has historically suffered from illegal municipal dumping, industrial effluent, and neglected sewage infrastructure, placing young children and informal households at catastrophic disease risk.",
    ourAction:
      "PWMSA Gauteng mobilised over 350 community volunteers, women's cooperatives, and local youth for an intensive clean-up and riverbank revegetation initiative. The campaign established community eco-guards who conduct weekly patrols to deter illegal dumping, conduct water-quality awareness sessions in schools, and advocate with the City of Johannesburg for regular waste collection infrastructure.",
    keyOutcomes: [
      "Removed over 12 tons of solid waste and plastics from critical riverbank stretches.",
      "Established 4 permanent community monitoring points along the Alexandra river corridor.",
      "Trained 60 young women in environmental testing and municipal petitioning.",
      "Secured municipal commitment for two additional skip-bins and daily waste collection.",
    ],
    coordinator: "GP-PWMSA Environmental Working Team",
  },
  {
    id: "soweto-gbvf-march",
    title: "Soweto March Against GBVF & Judicial Impunity",
    lead: "Led by GP-PWMSA Coordinator Mopipone & Community Frontlines",
    category: "GBVF Eradication",
    location: "Soweto, Johannesburg, Gauteng",
    date: "July 2026 / Ongoing Monitoring",
    status: "Active Tracking",
    statusColor: "bg-red-100 text-red-800 border-red-300",
    image: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab1.jpg",
    problemStatement:
      "A surge in horrific sexual violence cases—including the assault of young girls by individuals in positions of religious and community trust—revealed catastrophic delays in SAPS dockets, missing evidence, and insensitive victim handling.",
    ourAction:
      "Led by GP-PWMSA Provincial Coordinator Mopipone, hundreds of women marched to local police stations and the magistrates court, demanding immediate arrest of suspects, specialized prosecutors for domestic violence courts, and strict bail denials for repeat offenders. PWMSA provides pro-bono legal liaison and trauma counseling for the victim's family.",
    keyOutcomes: [
      "Over 1,200 marchers mobilised through the streets of Soweto in disciplined protest.",
      "Delivered a formal Memorandum of Demands to the Gauteng Police Commissioner.",
      "Established the Soweto Court Monitoring Desk tracking 14 high-profile GBV dockets.",
      "Provided continuous psychological and legal support to 28 survivor families.",
    ],
    coordinator: "Coordinator Mopipone (GP-PWMSA)",
  },
  {
    id: "mpumalanga-enterprise",
    title: "WNC Women's Enterprise & Cooperative Incubator",
    lead: "Economic Freedom Through Skills, Funding & Market Linkages",
    category: "Economic Transformation",
    location: "Ehlanzeni & Gert Sibande Districts, Mpumalanga",
    date: "June 2026 – Ongoing",
    status: "Active Implementation",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    image: "https://pwmsa.org.za/wp-content/uploads/20250718_071213-768x576.jpg",
    problemStatement:
      "Rural and peri-urban women face severe structural exclusion from formal commercial procurement, banking credit, and high-value supply chains, relegating them to vulnerable, low-yield informal survivalist trading.",
    ourAction:
      "The PWMSA National Working Committee (WNC) launched an enterprise incubator equipping 200 women-led enterprises with company registration, SARS compliance, financial recordkeeping, digital POS equipment, and direct supply contracts with local agricultural and retail institutions.",
    keyOutcomes: [
      "200 female micro-entrepreneurs enrolled and certified in business governance.",
      "Facilitated R750,000 in seed equipment and micro-grant disbursements.",
      "Formed 6 regional agricultural and textile production cooperatives.",
      "Connected local producers with provincial government nutrition procurement schemes.",
    ],
    coordinator: "PWMSA National Working Committee (NWC)",
  },
  {
    id: "womens-parliament",
    title: "Women's Parliament 2026 Declaration Presentation",
    lead: "Demanding 50/50 Gender Parity & Statutory Budget Enforcement",
    category: "Political Participation",
    location: "Kimberley, Northern Cape",
    date: "August 2026",
    status: "Legislative Oversight",
    statusColor: "bg-purple-100 text-purple-800 border-purple-300",
    image: "https://pwmsa.org.za/wp-content/uploads/20250718_080227-768x576.jpg",
    problemStatement:
      "Despite progressive constitutional rhetoric, women remain under-represented in municipal mayoralties, parliamentary budget appropriations for gender violence remain chronically inadequate, and national legislation often lacks enforceable accountability benchmarks.",
    ourAction:
      "PWMSA CEO ALulama Nare and national convenors presented the PWMSA Declaration Report at the 2026 Women's Parliament in the Northern Cape. The report laid out unambiguous legislative demands for enforceable gender parity quotas, ring-fenced municipal GBVF prevention budgets, and mandatory quarterly reporting on gender transformation.",
    keyOutcomes: [
      "Declaration Report formally adopted into the parliamentary review record.",
      "Established permanent consultative channels between PWMSA and legislative portfolio committees.",
      "Secured commitments for cross-party gender budgeting workshops in 2027.",
      "Elevated provincial grassroots women's testimonies directly to cabinet ministers.",
    ],
    coordinator: "ALulama Nare (CEO & NWC)",
  },
  {
    id: "youth-representation",
    title: "National Youth Leadership & Tech Mentorship Pipeline",
    lead: "Amplifying Young Women's Voices Across Higher Education & Industry",
    category: "Youth Empowerment",
    location: "National Across All 9 Provinces",
    date: "July 2026 – Ongoing",
    status: "Active Cohort",
    statusColor: "bg-blue-100 text-blue-800 border-blue-300",
    image: "https://pwmsa.org.za/wp-content/uploads/20241012_164953-Copy-Copy-768x576.jpg",
    problemStatement:
      "Young women navigate harrowing rates of youth unemployment (exceeding 60%), campus-based sexual harassment, lack of digital access, and systemic exclusion from senior organisational decision-making structures.",
    ourAction:
      "Headed by National Youth Representative Ms Phumelela Zigoxo, this campaign unites student leaders, young professionals, and rural youth. It offers structured leadership training, bursary application assistance, digital literacy bootcamps, and direct representation within PWMSA's highest decision-making bodies.",
    keyOutcomes: [
      "Activated youth chapters across 14 university and TVET college campuses.",
      "Trained 500+ young women in civic advocacy, constitutional law, and digital leadership.",
      "Secured 45 corporate internship placements for graduate participants.",
      "Conducted 12 nationwide webinars on workplace rights and tackling harassment.",
    ],
    coordinator: "Ms Phumelela Zigoxo (National Youth Representative)",
  },
  {
    id: "clergy-justice",
    title: "Religious Accountability & Child Protection Campaign",
    lead: "Holding Sacred Institutions to Uncompromising Constitutional Standards",
    category: "Justice & Child Protection",
    location: "National Focus",
    date: "April 2026 – Active Action",
    status: "Active Legal Taskforce",
    statusColor: "bg-rose-100 text-rose-800 border-rose-300",
    image: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab2.jpg",
    problemStatement:
      "Perpetrators of sexual abuse and rape in religious and faith-based institutions frequently exploit spiritual authority, victim-blaming, and internal cover-ups to evade criminal prosecution, leaving child victims traumatised and unsupported.",
    ourAction:
      "PWMSA issued stern public statements and mobilised a dedicated legal and social work team following the rape of a young girl by a religious leader. The campaign demands automatic mandatory reporting by religious bodies, removal of perpetrator access to minors, and immediate state prosecution without institutional interference.",
    keyOutcomes: [
      "Coordinated victim legal representation through pro-bono advocate networks.",
      "Initiated national dialogues with religious councils on safeguarding policies.",
      "Drafted the 'Faith & Safety Protocol' for adoption by community congregations.",
      "Mobilised public court picketing to oppose bail applications for accused predators.",
    ],
    coordinator: "PWMSA Legal & Human Rights Sub-committee",
  },
];

export default function CampaignsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#1f170e] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1f170e]/95 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-block bg-[#e8ce52] text-[#4a3720] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              On the Ground • In the Courts • In Communities
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              PWMSA National <br />
              <span className="text-[#e8ce52]">Campaigns &amp; Direct Action</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We do not simply theorise about gender equality — we mobilise on the streets, monitor the courts, clean our rivers, incubate businesses, and demand accountability from every seat of power.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#campaign-list"
                className="bg-[#e8ce52] text-[#4a3720] px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors"
              >
                Browse Active Campaigns
              </a>
              <Link
                href="/partner"
                className="border border-white/30 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors"
              >
                Sponsor a Campaign
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN STATS TICKER ── */}
      <section className="bg-[#e8ce52] py-8 text-[#4a3720] border-y border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-5xl font-black">6+</div>
              <div className="text-xs uppercase font-bold tracking-wider mt-1">Major Active Campaigns</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black">15,000+</div>
              <div className="text-xs uppercase font-bold tracking-wider mt-1">Citizens Mobilised Directly</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black">9 / 9</div>
              <div className="text-xs uppercase font-bold tracking-wider mt-1">Provinces in Active Motion</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black">100%</div>
              <div className="text-xs uppercase font-bold tracking-wider mt-1">Grassroots Grounded</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMPAIGNS DEEP CASE STUDIES ── */}
      <section id="campaign-list" className="py-24 bg-[#faf7f0] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {campaignsDetailed.map((c, i) => (
            <div
              key={c.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-200/70 grid lg:grid-cols-12 gap-0 group"
            >
              {/* Visual Banner (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-black uppercase px-3 py-1 rounded-full border ${c.statusColor}`}>
                    {c.status}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="text-xs font-bold text-[#e8ce52] uppercase tracking-wider">
                    {c.category}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <MapPin size={14} className="text-[#e8ce52]" />
                    <span>{c.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Calendar size={14} className="text-[#e8ce52]" />
                    <span>{c.date}</span>
                  </div>
                </div>
              </div>

              {/* Comprehensive Content (7 cols) */}
              <div className="lg:col-span-7 p-8 lg:p-12 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#715832]">
                      Campaign File #{i + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mt-1">
                      {c.title}
                    </h2>
                    <p className="text-sm font-semibold text-[#715832] mt-1">{c.lead}</p>
                  </div>

                  {/* Problem & Action */}
                  <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-gray-900 block mb-0.5">The Challenge:</strong>
                      {c.problemStatement}
                    </p>
                    <p>
                      <strong className="text-gray-900 block mb-0.5">Our Strategic Intervention:</strong>
                      {c.ourAction}
                    </p>
                  </div>

                  {/* Measurable Outcomes */}
                  <div className="bg-[#fcfaf5] border border-amber-200/80 rounded-2xl p-5 space-y-2">
                    <div className="text-xs font-black uppercase tracking-wider text-[#715832] flex items-center gap-1.5">
                      <Target size={14} /> Key Tangible Outcomes
                    </div>
                    <ul className="space-y-2 pt-1">
                      {c.keyOutcomes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                          <CheckCircle2 size={14} className="text-[#715832] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Metadata & CTA */}
                <div className="pt-4 border-t border-amber-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold text-gray-700">Lead Desk:</span> {c.coordinator}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#715832] text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-[#4a3720] transition-colors"
                  >
                    Get Involved in This Campaign <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 bg-[#1a140d] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[#e8ce52] text-xs font-bold uppercase tracking-widest">
            Community Organising
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Want to Launch a PWMSA Campaign in Your Ward?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base">
            PWMSA assists local women&apos;s committees with petition templates, media advisory guidance, marshaling training, and legal support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="bg-[#e8ce52] text-[#4a3720] px-8 py-3.5 rounded-xl font-black hover:bg-white transition-colors"
            >
              Contact Campaign Desk
            </Link>
            <Link
              href="/partner"
              className="border border-white/30 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Support With Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
