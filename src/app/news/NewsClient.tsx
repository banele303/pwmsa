"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Search,
  Building,
  ShieldAlert,
  Sparkles,
  Award,
  X,
  Printer,
  Share2,
  Check,
  ChevronRight,
  ExternalLink,
  FileText,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  TrendingDown,
  Landmark,
  Scale,
  Briefcase,
  Play,
  Film,
  Tag,
} from "lucide-react";

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  fullContent?: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  video?: string;
  tags?: string[];
  featured?: boolean;
  isSpecialPublication?: boolean;
}

export const articlesCollection: Article[] = [
  {
    slug: "pwmsa-communications-advocacy-update-2026",
    title: "PWMSA Communications, Advocacy & Organisational Update",
    subtitle:
      "Wathint' abafazi, wathint' imbokodo: Seventy Years of Resistance, Twenty Years of Organisation",
    excerpt:
      "Consolidating key communications activities, campaign messages, stakeholder engagements, and organizational priorities across August–October 2026. Includes the CEO's address, the Ekurhuleni femicide crisis callout, Women's Parliament Kimberley declaration, and our fiscal advocacy demands to National Treasury.",
    fullContent:
      "This official quarterly newsletter and update consolidates PWMSA's communications, advocacy positions, and organizational milestones across all nine provinces. Marking twenty years of organized struggle since our 2006 launch in Bloemfontein and seventy years since the historic 1956 Women's March, PWMSA continues to demand structural accountability for women's lives and livelihoods.",
    category: "Official Publication",
    categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
    date: "October 2026",
    readTime: "8 min read",
    author: "Communications Office & Office of the CEO",
    image: "/new-images/martch/20241012_164951 - Copy.jpg",
    featured: true,
    isSpecialPublication: true,
    tags: [
      "#PWMSA",
      "#70YearsResistance",
      "#20YearsOrganisation",
      "#WomensVoices",
      "#SocialTransformation",
    ],
  },
  {
    slug: "protecting-local-livelihoods-fast-fashion-retrenchments",
    title: "Protecting Local Livelihoods: The Fight Against Fast-Fashion Retrenchments",
    subtitle: "Clothing & Textile Workers Mobilise with Symbolic 'Tombstones' Against Shein & Temu",
    excerpt:
      "The video captures a critical mobilization of clothing and textile workers protesting the devastating impact of global e-commerce giants like Shein and Temu on domestic manufacturing. Workers hold symbolic tombstones highlighting mounting job losses and demanding immediate trade fairness and reskilling support.",
    fullContent:
      "The video captures a critical mobilization of clothing and textile workers protesting the devastating impact of global e-commerce giants like Shein and Temu on domestic manufacturing. Featuring workers holding symbolic \"tombstones\" displaying mounting job-loss numbers, the footage highlights an urgent socioeconomic crisis:\n\n• The Threat to Local Employment: Unregulated or under-regulated low-cost imports undercut local retail and manufacturing, risking tens of thousands of domestic jobs by the end of the decade.\n\n• The Call for Action & Retraining: Alongside pushes for policy regulation and trade fairness, labor movements emphasize the critical need to support affected workers through strategic reskilling, upskilling, and industrial retention frameworks.\n\nPWMSA stands in steadfast solidarity with our sisters in manufacturing, calling on the Department of Trade, Industry and Competition (DTIC) and SARS Customs to enforce strict import duty compliance to protect domestic jobs.",
    category: "Labour & Livelihoods",
    categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    date: "24 October 2026",
    readTime: "4 min read",
    author: "PWMSA Labour & Economic Rights Desk",
    image: "/new-images/martch/20241129_112434.jpg",
    video: "/images/video-main.mp4",
    tags: [
      "#SaveLocalJobs",
      "#StopRetrenchments",
      "#JobLossCausedBySheinAndTemu",
      "#PWMSA",
      "#WorkersRights",
      "#ReskillAndRetain",
      "#SupportLocalIndustry",
    ],
    featured: false,
  },
  {
    slug: "ifp-presidential-roundtable-gbvf",
    title: "IFP Presidential Roundtable on GBVF: Alliance Over Guardianship",
    subtitle: "High-Level Engagements at Birchwood Hotel with Political Leaders, CGE & Civil Society",
    excerpt:
      "PWMSA participated in high-level engagements alongside key political leaders, Chapter 9 institutions (CGE), and civil society partners. Our message is clear: male leadership must dismantle patriarchal privilege rather than take decision-making space from survivors.",
    fullContent:
      "The Progressive Women’s Movement of South Africa (PWMSA) recently participated in high-level engagements at the Birchwood Hotel alongside key political leaders, Chapter 9 institutions (Commission for Gender Equality - CGE), and civil society partners.\n\nWhile multi-sectoral collaboration is essential to confront South Africa's national crisis of violence against women, our message remains clear:\n\n• Alliance Over Guardianship: Male involvement in combatting toxic masculinity is critical, but male leadership must mean dismantling patriarchal privilege within political and traditional institutions—not taking decision-making space from survivors.\n\n• Economic Autonomy as Defense: Eliminating GBVF requires eradicating systemic poverty, landlessness, and the gender pay gap. When women are economically disempowered, exit routes from abusive households remain blocked.\n\n• Institutional Accountability: We demand fully resourced frontline services, consistent judicial enforcement, dedicated sexual offences courts, and structural reforms across state and customary governance.\n\nPWMSA remains committed to uniting women across all sectors to ensure policy commitments deliver tangible justice and security.",
    category: "Policy & Governance",
    categoryColor: "bg-purple-100 text-purple-800 border-purple-200",
    date: "09 October 2026",
    readTime: "4 min read",
    author: "PWMSA Governance & Policy Desk",
    image: "/images/news/ifp-gbvf-roundtable.jpg",
    tags: [
      "#GenderBasedViolence",
      "#SouthAfrica",
      "#PolicyAndGovernance",
      "#WomenLeadership",
      "#PWMSA",
      "#GBVF",
    ],
    featured: false,
  },
  {
    slug: "mqa-colloquium-skills-mining",
    title: "MQA Colloquium: Gender-Responsive Skills Planning in the Mining Sector",
    subtitle: "Advancing Black Women & Host Communities in the Critical Minerals Economy",
    excerpt:
      "As South Africa positions itself within the critical minerals economy, skills planning must intentionally address the intersecting inequalities of race, class, gender, and geography across the mining value chain.",
    fullContent:
      "As South Africa positions itself within the critical minerals economy, skills planning must intentionally address the intersecting inequalities of race, class, gender, and geography that continue to shape access to education, training, and employment opportunities.\n\nParticular attention must be given to increasing the participation, retention, and advancement of women, especially Black women and those from rural, mining-hosting, and low-income communities, who remain underrepresented in technical, operational, digital, and leadership roles across the mining value chain.\n\nConsistent with the SETA mandate, workforce development initiatives should be informed by labour market intelligence and focused on closing scarce and critical skills gaps while removing systemic barriers that limit women's access to learning pathways, workplace opportunities, and career progression.\n\nBy creating inclusive talent pipelines, strengthening mentorship and leadership development programmes, and aligning skills interventions with future industry needs, the sector can unlock the full potential of a diverse workforce. Advancing women's economic participation is not only a transformation imperative but also a strategic advantage that enhances innovation, productivity, and organisational resilience.\n\nUltimately, gender-responsive, race-conscious, and socially inclusive skills planning will ensure that the benefits of the critical minerals transition contribute to sustainable growth, workforce transformation, and equitable development across South Africa's mining sector.",
    category: "Economic Transformation",
    categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
    date: "01 October 2026",
    readTime: "5 min read",
    author: "PWMSA Mining & Transformation Desk",
    image: "/images/news/mqa-colloquium.jpg",
    tags: [
      "#MQAColloquium",
      "#MiningTransformation",
      "#WomenInMining",
      "#CriticalMinerals",
      "#SETA",
      "#PWMSA",
      "#SkillsDevelopment",
    ],
    featured: false,
  },
  {
    slug: "fund-gbv-disaster-response-national-treasury",
    title: "Fund the GBV Disaster Response: PWMSA's Direct Call to National Treasury",
    subtitle: "Fiscal Advocacy & Survivor Infrastructure",
    excerpt:
      "Pressing the National Treasury for ring-fenced, sustainable funding for the national GBV disaster response, permanent forensic staffing, and community survivor shelter support.",
    fullContent:
      "Our voice in the media and in the corridors of power is a weapon of the struggle. PWMSA has formally escalated representations to National Treasury, demanding that Gender-Based Violence and Femicide (GBVF) be resourced with the mandatory statutory backing of a national disaster. PWMSA stresses that ad-hoc grants and fragmented budget allocations fail to stem the emergency. We call for dedicated multi-year appropriations to equip Thuthuzela Care Centres with 24-hour forensic medical teams, establish secure township and rural women's shelters, and provide sustained socio-economic rehabilitation packages for GBVF survivors.",
    category: "Fiscal Advocacy",
    categoryColor: "bg-red-100 text-red-800 border-red-200",
    date: "24 September 2026",
    readTime: "4 min read",
    author: "PWMSA Fiscal Policy Desk",
    image: "/images/news/national-treasury-gbv-funding.jpg",
    tags: ["#NationalTreasury", "#GBVFDisaster", "#FundTheResponse", "#PWMSA"],
    featured: false,
  },
  {
    slug: "urgent-gbvf-action-plea",
    title: "PWMSA Calls for Immediate Emergency Declared on National GBVF Crisis: Ekurhuleni and Beyond",
    excerpt:
      "Eleven women's bodies found in Ekurhuleni since July. PWMSA has submitted an urgent memorandum demanding permanent bail bans for repeat domestic offenders, 24-hour crisis centres, and judicial emergency measures.",
    fullContent:
      "Eleven women's bodies found in Ekurhuleni since July. Eleven lives lost, families shattered, and a nation demanding answers. In an exhaustive memorandum presented to the Inter-Ministerial Committee on Gender-Based Violence, PWMSA National Convenor Angie Motshega stressed that current interventions remain fragmented and under-resourced. The statement outlines immediate operational steps, including the 24-hour staffing of Thuthuzela Care Centres, the mandatory re-opening of domestic violence court registers, and community audits of police responsiveness.",
    category: "Official Statement",
    categoryColor: "bg-red-100 text-red-800 border-red-200",
    date: "18 September 2026",
    readTime: "4 min read",
    author: "PWMSA National Secretariat",
    image: "/images/news/ekurhuleni-gbvf-emergency.jpg",
    tags: ["#EkurhuleniCrisis", "#StopFemicide", "#JusticeNow", "#PWMSA"],
    featured: false,
  },
  {
    slug: "womens-parliament-northern-cape",
    title: "Women's Parliament 2026: CEO Lulama Nare Delivers Landmark Declaration Report in Kimberley",
    excerpt:
      "Addressing lawmakers and delegates in Kimberley, PWMSA CEO Lulama Nare tabled the 2026 Declaration Report, requiring statutory accountability metrics for 50/50 gender parity and economic inclusion.",
    fullContent:
      "The Women's Parliament in Kimberley (13–14 August 2026) provided an indispensable platform for women's direct participation in democratic processes, policy design, and legislative accountability. CEO Lulama Nare presented the final declaration report, emphasizing that while South Africa's legal framework is praised internationally, working-class women continue to bear the brunt of unmonitored austerity and patriarchal violence. PWMSA demands mandatory budget line tracking and enforcement of gender equity across provincial departments.",
    category: "Parliamentary Report",
    categoryColor: "bg-purple-100 text-purple-800 border-purple-200",
    date: "14 August 2026",
    readTime: "5 min read",
    author: "Office of the Chief Executive",
    image: "/new-images/20250718_080227.jpg",
    tags: ["#WomensParliament", "#KimberleyDeclaration", "#GenderParity", "#PWMSA"],
    featured: false,
  },
  {
    slug: "soweto-gbvf-march-dispatch",
    title: "Soweto Communities March for Justice Led by GP-PWMSA Coordinator Mopipone",
    excerpt:
      "Over 1,200 women, mothers, and community activists assembled in Soweto to protest systemic delays in sexual assault investigations, demanding justice after a church minister was implicated in the assault of a minor.",
    fullContent:
      "Marchers carried banners through central Soweto before handing over a memorandum to police leadership. GP-PWMSA Coordinator Mopipone declared that communities will no longer permit religious or traditional authority to shield perpetrators from the full might of criminal law.",
    category: "Campaign Dispatch",
    categoryColor: "bg-amber-100 text-amber-800 border-amber-200",
    date: "14 July 2026",
    readTime: "3 min read",
    author: "Gauteng Provincial Desk",
    image: "/new-images/martch/20241129_112434.jpg",
    tags: ["#SowetoMarch", "#ProtectOurChildren", "#CommunityAction"],
    featured: false,
  },
  {
    slug: "youth-representation-conference",
    title: "Youth Representative Ms Phumelela Zigoxo Rallies Next Generation of Women Leaders",
    excerpt:
      "Delivering the keynote address at the National Youth Leadership Forum, Ms Phumelela Zigoxo challenged higher education institutions and corporate leaders to open tangible pathways for female graduates facing high youth unemployment.",
    fullContent:
      "The youth summit resolved to launch digital mentorship pods in 14 universities and colleges, pairing final-year students with established professionals in engineering, legal practice, and executive governance.",
    category: "Youth Empowerment",
    categoryColor: "bg-blue-100 text-blue-800 border-blue-200",
    date: "02 July 2026",
    readTime: "4 min read",
    author: "PWMSA Youth Desk",
    image: "/new-images/youth-development/20250627_095847.jpg",
    tags: ["#YouthLeadership", "#YoungWomenLead", "#NextGeneration"],
    featured: false,
  },
  {
    slug: "mpumalanga-enterprise-launch",
    title: "PWMSA Enterprise Hub Launches in Mpumalanga: 200 Women Entrepreneurs Enrolled",
    excerpt:
      "The PWMSA National Working Committee has activated its flagship economic incubator in Mpumalanga, providing accredited business management training, SARS tax assistance, and supply-chain linkages for women-owned businesses.",
    fullContent:
      "During the launch in Ehlanzeni District, National Working Committee member Getrude Mtswene underscored that economic sovereignty is the most potent antidote to domestic vulnerability and gender-based violence. The programme has already facilitated seed equipment grants for 15 agro-processing cooperatives.",
    category: "Economic Transformation",
    categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    date: "19 June 2026",
    readTime: "4 min read",
    author: "PWMSA Enterprise Desk",
    image: "/new-images/Enterprice/20250130_144518.jpg",
    tags: ["#EconomicSovereignty", "#WomenInBusiness", "#Mpumalanga"],
    featured: false,
  },
  {
    slug: "jukskei-environmental-justice",
    title: "Alexandra Women Lead Groundbreaking Jukskei River Rehabilitation Drive",
    excerpt:
      "Demonstrating that feminist leadership is intrinsically tied to ecological justice, PWMSA volunteers in Alexandra removed 12 tons of riverbank waste and instituted permanent community eco-guard stations.",
    fullContent:
      "The initiative united local school learners, community ward committees, and environmental groups. The campaign highlights the acute health risks township residents endure due to neglected municipal sanitation and calls for urgent infrastructure upgrades.",
    category: "Eco-Justice",
    categoryColor: "bg-teal-100 text-teal-800 border-teal-200",
    date: "28 May 2026",
    readTime: "3 min read",
    author: "Alexandra Community Desk",
    image: "/new-images/river cleaning/20250718_114224.jpg",
    tags: ["#EcoJustice", "#AlexandraCleanUp", "#GrassrootsAction"],
    featured: false,
  },
  {
    slug: "clergy-justice-accountability",
    title: "PWMSA Demands Unconditional Justice and Safeguarding Protocols Across Faith Bodies",
    excerpt:
      "In response to recent court proceedings concerning clergy sexual assault, PWMSA has petitioned national ecumenical and interfaith councils to establish independent child safeguarding panels.",
    fullContent:
      "PWMSA legal representatives announced continuous court monitoring for all pending trials involving religious figures, providing victim counseling and legal support to prevent institutional intimidation.",
    category: "Legal Advocacy",
    categoryColor: "bg-rose-100 text-rose-800 border-rose-200",
    date: "12 April 2026",
    readTime: "4 min read",
    author: "Legal & Human Rights Desk",
    image: "/images/campaigns/clergy-justice.jpg",
    tags: ["#LegalAdvocacy", "#Safeguarding", "#AccountabilityNow"],
    featured: false,
  },
  {
    slug: "special-alliance-conference",
    title: "Special Alliance Conference Reaffirms Historic 1956 Legacy & 20-Year Action Charter",
    excerpt:
      "Delegates from all 9 provinces convened to review PWMSA's 20-year trajectory since its 2006 Bloemfontein founding, adopting a revised national action charter for the next decade.",
    fullContent:
      "The assembly reaffirmed the ten foundational mandates of the movement and called for intensified grassroots branch consolidation across rural and peri-urban settlements ahead of national policy reviews.",
    category: "National Assembly",
    categoryColor: "bg-amber-100 text-amber-800 border-amber-200",
    date: "15 March 2026",
    readTime: "5 min read",
    author: "National Working Committee",
    image: "/new-images/martch/20241012_165836 - Copy.jpg",
    tags: ["#NationalAssembly", "#1956Legacy", "#Charter2026"],
    featured: false,
  },
];

const categories = [
  "All",
  "Official Publication",
  "Labour & Livelihoods",
  "Policy & Governance",
  "Economic Transformation",
  "Fiscal Advocacy",
  "Official Statement",
  "Parliamentary Report",
  "Campaign Dispatch",
  "Youth Empowerment",
];

export default function NewsClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [copiedSlug, setCopiedSlug] = useState(false);

  const featured = articlesCollection[0];

  const filteredArticles = useMemo(() => {
    return articlesCollection.filter((art) => {
      const matchesCategory =
        selectedCategory === "All" || art.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        art.title.toLowerCase().includes(query) ||
        art.excerpt.toLowerCase().includes(query) ||
        art.author.toLowerCase().includes(query) ||
        art.category.toLowerCase().includes(query) ||
        (art.tags && art.tags.some((t) => t.toLowerCase().includes(query)));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleShare = (art: Article) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(
        `${window.location.origin}/news#${art.slug}`
      );
      setCopiedSlug(true);
      setTimeout(() => setCopiedSlug(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#1a140e] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a140e]/95 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-block bg-[#e8ce52] text-[#4a3720] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Newsroom, Official Publications &amp; Media Desk
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Movement Dispatches &amp; <br />
              <span className="text-[#e8ce52]">Official Updates</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Read verified press releases, parliamentary submissions, video dispatches, quarterly organisational newsletters, and campaign updates directly from the National Working Committee of PWMSA.
            </p>
          </div>
        </div>
      </section>

      {/* ── SPECIAL FEATURED PUBLICATION BANNER (PDF UPDATE) ── */}
      <section className="py-12 bg-[#fbf8f2] border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-300 grid lg:grid-cols-12 gap-0">
            {/* Visual Column (5 cols) */}
            <div className="lg:col-span-5 bg-[#1a140e] text-white p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e8ce52_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-[#e8ce52] text-[#4a3720] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    Official Newsletter &amp; Report
                  </span>
                  <span className="text-amber-200 text-xs font-semibold">
                    Aug – Oct 2026
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Communications, Advocacy &amp; Organisational Update
                </h3>

                <p className="text-[#e8ce52] text-sm font-semibold italic">
                  &ldquo;Wathint&apos; abafazi, wathint&apos; imbokodo: seventy years of resistance, twenty years of organisation.&rdquo;
                </p>

                <p className="text-gray-300 text-xs leading-relaxed">
                  Prepared by the Communications Office for the National Working Committee, National Leadership, and Provincial Structures.
                </p>
              </div>

              {/* Movement at a glance mini-strip */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">
                  Movement at a Glance
                </p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-white/10 rounded-xl p-2">
                    <span className="block text-xl font-black text-[#e8ce52]">20</span>
                    <span className="text-[10px] text-gray-300 leading-tight block">Years Struggle</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-2">
                    <span className="block text-xl font-black text-[#e8ce52]">70</span>
                    <span className="text-[10px] text-gray-300 leading-tight block">Years 1956</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-2">
                    <span className="block text-xl font-black text-[#e8ce52]">35+</span>
                    <span className="text-[10px] text-gray-300 leading-tight block">Affiliates</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-2">
                    <span className="block text-xl font-black text-[#e8ce52]">9</span>
                    <span className="text-[10px] text-gray-300 leading-tight block">Provinces</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column (7 cols) */}
            <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-br from-white to-[#fdfbf7]">
              <div className="space-y-4">
                {/* Note from CEO teaser */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#715832]">
                    <Image
                      src="/images/committee/lulama-nare.jpg"
                      alt="Lulama Nare CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#715832] uppercase tracking-wide block">
                      Note from the CEO &bull; Lulama Nare
                    </span>
                    <p className="text-xs text-gray-800 leading-relaxed italic">
                      &ldquo;Today, the pass laws we resist are the realities of poverty, unemployment, and gender-based violence. We have firmly pressed the National Treasury to adequately fund the GBV disaster response... Let us keep building a better world, one act at a time.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900">
                    Building a Better World, One Act at a Time
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    This comprehensive newsletter consolidates key communications activities, campaign messages, event materials, and organisational priorities. Explore detailed coverage of the <strong>Women&apos;s Parliament in Kimberley</strong>, the <strong>Ekurhuleni femicide crisis dispatch</strong>, high-level engagements with <strong>COSATU, MQA, and IFP</strong>, and our core advocacy on <strong>Fiscal Resources and Fast-Fashion Retrenchment Protections</strong>.
                  </p>
                </div>

                {/* Key focus tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1">
                    <Play size={10} className="fill-emerald-800" /> Fast-Fashion Protest Video
                  </span>
                  <span className="text-[11px] bg-red-50 text-red-700 border border-red-200 px-2.5 py-1 rounded-lg font-semibold">
                    GBVF Disaster Response Funding
                  </span>
                  <span className="text-[11px] bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded-lg font-semibold">
                    IFP Presidential Roundtable
                  </span>
                  <span className="text-[11px] bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-lg font-semibold">
                    MQA Mining Colloquium
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-amber-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  <span className="font-bold text-gray-800 block">Communications Office, PWMSA</span>
                  <span>National Working Committee &bull; October 2026</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveArticle(featured)}
                    className="inline-flex items-center gap-2 bg-[#715832] text-white hover:bg-[#4a3720] px-5 py-2.5 rounded-xl text-xs font-black shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <FileText size={14} /> Read Full 5-Page Update
                  </button>
                  <button
                    onClick={() => handleShare(featured)}
                    className="p-2.5 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                    title="Share link"
                  >
                    {copiedSlug ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH & CATEGORY FILTER ── */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search statements, reports, video dispatches (e.g. Shein, IFP, MQA, GBVF)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#715832] focus:ring-2 focus:ring-[#715832]/20 text-xs sm:text-sm outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="text-xs text-gray-500 font-medium">
              Showing <strong className="text-gray-900">{filteredArticles.length}</strong> of {articlesCollection.length} entries
            </div>
          </div>

          {/* Category Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#715832] text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="py-16 bg-[#fcfaf6] flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8">
              <Search size={36} className="mx-auto text-gray-400 mb-3" />
              <h3 className="text-lg font-bold text-gray-800">No articles found</h3>
              <p className="text-gray-500 text-xs mt-1">
                Try adjusting your search query or switching categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs font-bold text-[#715832] hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((art) => (
                <article
                  key={art.slug}
                  onClick={() => setActiveArticle(art)}
                  className="bg-white rounded-2xl overflow-hidden border border-amber-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-sm ${art.categoryColor}`}
                        >
                          {art.category}
                        </span>
                      </div>

                      {art.video && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                          <div className="w-12 h-12 rounded-full bg-[#e8ce52] text-[#4a3720] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play size={20} className="fill-[#4a3720] ml-0.5" />
                          </div>
                        </div>
                      )}

                      {art.video && (
                        <div className="absolute bottom-3 right-3">
                          <span className="text-[10px] font-black bg-black/80 text-white px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Film size={11} /> Video Dispatch
                          </span>
                        </div>
                      )}

                      {art.isSpecialPublication && (
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] font-black bg-[#e8ce52] text-[#4a3720] px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Newsletter
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {art.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {art.readTime}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg text-gray-900 leading-snug group-hover:text-[#715832] transition-colors">
                        {art.title}
                      </h3>

                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>

                      {art.tags && art.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {art.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          {art.tags.length > 3 && (
                            <span className="text-[10px] text-gray-400 self-center">
                              +{art.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-amber-100/60 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-gray-500 truncate max-w-[180px]">
                      {art.author}
                    </span>
                    <span className="text-xs font-bold text-[#715832] group-hover:underline flex items-center gap-1">
                      {art.video ? "Watch & Read →" : "Read Full →"}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── ARTICLE MODAL READER ── */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-amber-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center justify-between bg-[#fcfaf6]">
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full border ${activeArticle.categoryColor}`}
                >
                  {activeArticle.category}
                </span>
                <span className="text-xs text-gray-500 hidden sm:inline">
                  {activeArticle.date} &bull; {activeArticle.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  title="Print / Save Document"
                >
                  <Printer size={16} />
                </button>
                <button
                  onClick={() => handleShare(activeArticle)}
                  className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  title="Copy Link"
                >
                  {copiedSlug ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
                </button>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 text-gray-500 hover:text-red-600 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
              {activeArticle.isSpecialPublication ? (
                /* ── SPECIAL FULL DOCUMENT VIEW FOR THE 5-PAGE NEWSLETTER ── */
                <div className="space-y-10">
                  {/* Document Masthead */}
                  <div className="text-center pb-8 border-b-2 border-amber-300 space-y-3">
                    <div className="inline-flex items-center justify-center gap-3">
                      <Image
                        src="/logo.png"
                        alt="PWMSA Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                      <span className="text-xs font-bold tracking-widest text-[#715832] uppercase">
                        Women&apos;s Voices, Collective Action, Social Transformation
                      </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
                      PROGRESSIVE WOMEN&apos;S MOVEMENT OF SOUTH AFRICA
                    </h1>

                    <div className="inline-block bg-amber-100 text-amber-900 font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-amber-300">
                      Communications, Advocacy &amp; Organisational Update &bull; Reporting Period: August – October 2026
                    </div>

                    <p className="text-xs text-gray-500 max-w-xl mx-auto pt-1">
                      <strong>Prepared by:</strong> Communications Office <br />
                      <strong>For:</strong> National Working Committee, National Leadership and Provincial Structures
                    </p>
                  </div>

                  {/* Note from the CEO */}
                  <div className="bg-[#fcfaf5] rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-6">
                    <div className="flex items-center gap-3 border-b border-amber-200 pb-4">
                      <div className="w-2.5 h-6 bg-[#715832] rounded-full" />
                      <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                        Note from the CEO
                      </h2>
                    </div>

                    <div className="grid md:grid-cols-12 gap-6 items-start">
                      <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
                        <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300">
                          <Image
                            src="/images/committee/lulama-nare.jpg"
                            alt="Lulama Nare CEO PWMSA"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <strong className="block text-sm font-black text-gray-900">
                            Lulama Nare
                          </strong>
                          <span className="text-xs text-[#715832] font-semibold">
                            CEO, PWMSA
                          </span>
                        </div>
                      </div>

                      <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                        <p>
                          As the Progressive Women&apos;s Movement of South Africa (PWMSA) marks <strong>twenty years of organized struggle</strong> since our 2006 launch in Bloemfontein—and <strong>seventy years</strong> since the historic 1956 march on the Union Buildings—we are reminded that our fight for equality, dignity, and social justice remains as urgent as ever.
                        </p>
                        <p>
                          This reporting period has been a pivotal time for our movement. Through critical engagements like the <strong>Women&apos;s Parliament in Kimberley</strong> and our ongoing advocacy with media, labour, and government stakeholders, we have continued to place gender justice, economic empowerment, and accountability at the forefront of the national agenda.
                        </p>
                        <p className="bg-amber-100/70 p-3 rounded-xl border-l-4 border-[#715832] font-medium text-gray-900">
                          &ldquo;Today, the pass laws we resist are the realities of poverty, unemployment, and gender-based violence. We have firmly pressed the National Treasury to adequately fund the GBV disaster response, and we continue to demand that the protection of women&apos;s livelihoods remains central to every economic turnaround plan.&rdquo;
                        </p>
                        <p>
                          Thank you to our provincial structures, national leadership, and 35+ multi-sectoral affiliate organizations for your unwavering dedication. Let us keep building a better world, one act at a time.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Building a Better World & Movement at a Glance */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-[#715832] uppercase tracking-wider block">
                        Executive Summary
                      </span>
                      <h2 className="text-2xl font-black text-gray-900">
                        Building a Better World, One Act at a Time
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        The Progressive Women&apos;s Movement of South Africa (PWMSA) continues to champion women&apos;s emancipation, gender equality, social justice and economic transformation. As a national, multisectoral movement, PWMSA brings together women across sectors to advance a common agenda for equality, dignity and meaningful participation in the development of South Africa.
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        Established in Bloemfontein on 8 August 2006, the Movement draws strength from the legacy of women&apos;s collective resistance, particularly the historic Women&apos;s March of 9 August 1956. That legacy places a responsibility on contemporary women&apos;s organisations to address persistent inequalities and advocate for practical, measurable change.
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="bg-[#1a140e] text-white rounded-3xl p-6 sm:p-8 space-y-4">
                      <h3 className="text-sm font-bold text-[#e8ce52] uppercase tracking-wider text-center">
                        The Movement at a Glance
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                        <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/5">
                          <span className="block text-3xl sm:text-4xl font-black text-[#e8ce52]">20</span>
                          <span className="text-xs text-gray-300 mt-1 block">Years of organised struggle since 2006 Bloemfontein launch</span>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/5">
                          <span className="block text-3xl sm:text-4xl font-black text-[#e8ce52]">70</span>
                          <span className="text-xs text-gray-300 mt-1 block">Years since 20 000 women marched on Union Buildings</span>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/5">
                          <span className="block text-3xl sm:text-4xl font-black text-[#e8ce52]">35+</span>
                          <span className="text-xs text-gray-300 mt-1 block">National multi-sectoral organisations united under one banner</span>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/5">
                          <span className="block text-3xl sm:text-4xl font-black text-[#e8ce52]">9</span>
                          <span className="text-xs text-gray-300 mt-1 block">Provinces where the Movement is rebuilding its structures</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Women's Month 2026: Milestone of Resistance */}
                  <div className="space-y-6 bg-amber-50/60 rounded-3xl p-6 sm:p-8 border border-amber-200">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-[#715832] uppercase tracking-wider">
                        Milestone of Resistance &amp; Organisation
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                        &ldquo;Wathint&apos; abafazi, wathint&apos; imbokodo: seventy years of resistance, twenty years of organisation.&rdquo;
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        August 2026 marked the most significant Women&apos;s Month in a generation, serving as a platform for the Movement to take stock, sharpen its demands, and put South African women back at the centre of public discourse.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 pt-2">
                      <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-[#715832]">8 August</span>
                          <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">20th Anniversary</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900">Mandate Recommitment</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Recommitted affiliates to our original mandate—uniting women, deepening government partnerships, and fighting discrimination in every sphere.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-[#715832]">9 August</span>
                          <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">National Women&apos;s Day</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900">Honouring 1956 Icons</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Honoured icons Lilian Ngoyi, Helen Joseph, Rahima Moosa, Sophia Williams-De Bruyn, and the 20,000 women of 1956, declaring that today&apos;s pass laws are poverty, unemployment, and violence.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-[#715832]">13–14 August</span>
                          <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Kimberley</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900">Women&apos;s Parliament Declaration</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          CEO Lulama Nare presented the final declaration report, placing gender justice, economic empowerment, and accountability for the Women&apos;s Charter on the national agenda.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-[#715832]">August–October</span>
                          <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Grassroots</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900">Provincial Dialogues</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Convened community activations focusing on GBV, economic inclusion, and young women&apos;s rights, transforming Women&apos;s Month into a season of active organising and recruitment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Crisis Alert & Our Message */}
                  <div className="border-l-4 border-red-600 bg-red-50 p-6 rounded-r-3xl space-y-3">
                    <span className="text-xs font-black uppercase tracking-wider text-red-800 flex items-center gap-1.5">
                      <ShieldAlert size={16} /> Urgent National Callout &bull; Ekurhuleni GBVF Crisis
                    </span>
                    <blockquote className="text-sm sm:text-base font-bold text-gray-900 italic">
                      &ldquo;Eleven women&apos;s bodies found in Ekurhuleni since July. Eleven lives lost, families shattered, and a nation demanding answers.&rdquo;
                    </blockquote>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      <strong>Our Message This August:</strong> The women of 1956 refused to carry passes. The women of 2026 refuse to carry poverty, violence and exclusion.
                    </p>
                  </div>

                  {/* Section 5: Stakeholder Engagements (August–October 2026) */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-black text-gray-900">
                          Stakeholder Engagements &amp; Key Milestones
                        </h3>
                        <p className="text-xs text-gray-500">
                          High-level dialogues and stakeholder collaborations (August–October 2026)
                        </p>
                      </div>
                      <span className="text-xs font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full hidden sm:inline">
                        9 Key Engagements
                      </span>
                    </div>

                    <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                      {[
                        {
                          title: "Women's Parliament",
                          date: "13–14 August",
                          location: "Northern Cape",
                          desc: "An important platform for women's participation in democratic processes, policy discussions and advocacy on issues affecting women and their communities.",
                          badge: "Parliamentary",
                        },
                        {
                          title: "702 Radio Broadcast",
                          date: "10 August",
                          location: "Gauteng / National",
                          desc: "A media engagement opportunity to amplify PWMSA's advocacy priorities and contribute to public conversations on women's rights and social issues.",
                          badge: "Broadcast",
                        },
                        {
                          title: "Gertrude Shope Dialogue",
                          date: "15 August",
                          location: "Pretoria",
                          desc: "An invitation associated with women's leadership, political mentorship, and constitutional empowerment.",
                          badge: "Leadership",
                        },
                        {
                          title: "eNCA Television",
                          date: "17 August",
                          location: "National Broadcast",
                          desc: "A media engagement opportunity to share PWMSA's perspectives and strengthen the public visibility of its advocacy work.",
                          badge: "Broadcast",
                        },
                        {
                          title: "AIDC-EC Engagement",
                          date: "27 August",
                          location: "Eastern Cape",
                          desc: "Provincial stakeholder engagement focused on economic justice, labour inclusion, and community development.",
                          badge: "Labour & Justice",
                        },
                        {
                          title: "COSATU Congress Engagement",
                          date: "14–17 September",
                          location: "Midrand",
                          desc: "An invitation connected to organised labour and stakeholder engagement, strengthening dialogue on workers' rights, gender equality and women's participation.",
                          badge: "Organised Labour",
                        },
                        {
                          title: "COSATU Dialogue Session",
                          date: "22 September",
                          location: "Kempton Park",
                          desc: "A further engagement opportunity involving organised labour and stakeholder collaboration on protecting female workers against retrenchments.",
                          badge: "Organised Labour",
                        },
                        {
                          title: "MQA (Mining Qualifications Authority)",
                          date: "1 October",
                          location: "Emperors Palace",
                          desc: "Participation in the MQA Colloquium on gender-responsive skills planning, critical minerals, and advancing women in technical roles.",
                          badge: "Statutory Body",
                        },
                        {
                          title: "IFP Presidential Roundtable on GBVF",
                          date: "9 October",
                          location: "Birchwood Hotel, Boksburg",
                          desc: "High-level engagement with political leadership and Chapter 9 institutions (CGE) advocating alliance over guardianship and economic autonomy.",
                          badge: "Policy & GBVF",
                        },
                      ].map((evt, idx) => (
                        <div
                          key={idx}
                          className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-amber-50/40 transition-colors"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-sm text-gray-900">
                                {evt.title}
                              </h4>
                              <span className="text-[10px] bg-amber-100 text-[#715832] font-semibold px-2 py-0.5 rounded-full">
                                {evt.badge}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 max-w-2xl leading-relaxed">
                              {evt.desc}
                            </p>
                          </div>
                          <div className="text-left sm:text-right flex-shrink-0 text-xs">
                            <span className="font-bold text-gray-900 block">{evt.date}</span>
                            <span className="text-gray-500 flex items-center sm:justify-end gap-1">
                              <MapPin size={11} /> {evt.location}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 6: Shaping the National Conversation, Holding Power to Account */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-black text-gray-900">
                        Shaping the National Conversation, Holding Power to Account
                      </h3>
                      <p className="text-xs text-gray-600 italic">
                        &ldquo;Our voice in the media and in the corridors of power is a weapon of the struggle. These are the positions the Movement has advanced in the public domain.&rdquo;
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                      <div className="bg-[#fcfaf5] p-5 rounded-2xl border-2 border-amber-300 space-y-2">
                        <span className="text-[10px] font-black uppercase text-amber-900 tracking-wider block">
                          Accountability
                        </span>
                        <h4 className="font-black text-sm text-gray-900">
                          Monitoring Public Spending on Women
                        </h4>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          Monitoring public spending on gender programmes to ensure the femicide crisis remains a top national priority across municipal, provincial, and national budgets.
                        </p>
                      </div>

                      <div className="bg-red-50 p-5 rounded-2xl border-2 border-red-300 space-y-2">
                        <span className="text-[10px] font-black uppercase text-red-900 tracking-wider block">
                          Fiscal Advocacy
                        </span>
                        <h4 className="font-black text-sm text-gray-900">
                          Fund the GBV Disaster Response: Call to National Treasury
                        </h4>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          Pressing National Treasury for dedicated, sustainable funding for GBV disaster response, survivor support, and forensic staff scaling.
                        </p>
                      </div>

                      <div className="bg-emerald-50 p-5 rounded-2xl border-2 border-emerald-300 space-y-2">
                        <span className="text-[10px] font-black uppercase text-emerald-900 tracking-wider block">
                          Labour &amp; Livelihoods
                        </span>
                        <h4 className="font-black text-sm text-gray-900">
                          Retrenchments Are a Gender Issue
                        </h4>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          Demanding that the protection of women&apos;s livelihoods be prioritized in all employer and government turnaround plans amid waves of economic retrenchments.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sign-off & Directory Footer */}
                  <div className="pt-8 border-t-2 border-amber-200 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                          Official Publication Sign-Off
                        </span>
                        <p className="font-black text-base text-gray-900">
                          In solidarity, Communications Office, PWMSA
                        </p>
                      </div>
                      <button
                        onClick={handlePrint}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#715832] border border-[#715832] px-4 py-2 rounded-xl hover:bg-[#715832] hover:text-white transition-colors cursor-pointer"
                      >
                        <Printer size={14} /> Print Complete Update
                      </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-200 text-xs">
                      <div className="space-y-1.5">
                        <strong className="text-gray-900 block font-bold">Head Office</strong>
                        <p className="text-gray-600">
                          Kumbukeni Children &amp; Family Centre <br />
                          105 William Nicol Drive, Fourways, Johannesburg
                        </p>
                        <p className="text-gray-700 font-medium">
                          Tel: (011) 705 1960
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <strong className="text-gray-900 block font-bold">Contact the Movement</strong>
                        <p className="text-gray-600">
                          General: <a href="mailto:info@pwmsa.org.za" className="text-[#715832] underline">info@pwmsa.org.za</a> <br />
                          Media: <a href="mailto:communications@pwmsa.org.za" className="text-[#715832] underline">communications@pwmsa.org.za</a> <br />
                          Web: <a href="https://www.pwmsa.org.za" target="_blank" rel="noreferrer" className="text-[#715832] underline">www.pwmsa.org.za</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* ── STANDARD / VIDEO ARTICLE VIEW ── */
                <div className="space-y-6">
                  {/* Video or Image Media Header */}
                  {activeArticle.video ? (
                    <div className="space-y-2">
                      <div className="rounded-2xl overflow-hidden bg-black shadow-lg border border-amber-200">
                        <video
                          src={activeArticle.video}
                          controls
                          playsInline
                          className="w-full max-h-[460px] object-contain mx-auto"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-gray-500 px-1">
                        <span className="flex items-center gap-1 font-semibold text-gray-700">
                          <Film size={12} className="text-[#715832]" /> Video Mobilisation: Clothing &amp; Textile Workers Protest
                        </span>
                        <span>Source: PWMSA Labour Desk Archive</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={activeArticle.image}
                        alt={activeArticle.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="space-y-3">
                    <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                      {activeArticle.title}
                    </h1>
                    {activeArticle.subtitle && (
                      <p className="text-base text-[#715832] font-semibold">
                        {activeArticle.subtitle}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1 pb-3 border-b border-gray-100">
                      <span><strong>Author:</strong> {activeArticle.author}</span>
                      <span>&bull;</span>
                      <span><strong>Published:</strong> {activeArticle.date}</span>
                      <span>&bull;</span>
                      <span><strong>Reading time:</strong> {activeArticle.readTime}</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
                    <p className="font-semibold text-gray-900 text-base border-l-4 border-[#715832] pl-4 py-1 bg-amber-50/50 rounded-r-xl">
                      {activeArticle.excerpt}
                    </p>
                    <div className="whitespace-pre-line space-y-4 text-gray-700">
                      {activeArticle.fullContent}
                    </div>
                  </div>

                  {/* Hashtags */}
                  {activeArticle.tags && activeArticle.tags.length > 0 && (
                    <div className="pt-4 border-t border-gray-100 space-y-2">
                      <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                        <Tag size={12} /> Movement Hashtags:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeArticle.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-amber-50 text-[#715832] border border-amber-200 px-3 py-1 rounded-full font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-gray-500">
                      Progressive Women&apos;s Movement of South Africa (PWMSA) &bull; Verified Dispatch
                    </div>
                    <Link
                      href="/contact"
                      className="text-xs font-bold bg-[#715832] text-white px-4 py-2 rounded-xl hover:bg-[#4a3720] transition-colors"
                    >
                      Contact Media Liaison
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── MEDIA RESOURCE & SPOKESPERSON CONTACTS ── */}
      <section className="py-20 bg-[#1a140e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#261d14] border border-amber-500/30 rounded-3xl p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#e8ce52] text-xs font-bold uppercase tracking-widest">
                Journalists &amp; Media Inquiries
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Official PWMSA Media Desk &amp; Spokesperson Contacts
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                For verified quotes, official updates, high-resolution movement assets, or interviews with the CEO Lulama Nare and National Convenors, please contact our media liaison desk.
              </p>
              <div className="flex flex-wrap gap-6 pt-2 text-xs text-gray-300">
                <div>
                  <strong className="text-white block">Media Inquiries:</strong>
                  <span>communications@pwmsa.org.za</span>
                </div>
                <div>
                  <strong className="text-white block">Press Officer Phone:</strong>
                  <span>+27 79 554 4302 / 061 942 0421</span>
                </div>
                <div>
                  <strong className="text-white block">Head Office:</strong>
                  <span>(011) 705 1960</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="bg-[#e8ce52] text-[#4a3720] px-6 py-3.5 rounded-xl font-black text-sm text-center hover:bg-white transition-colors"
              >
                Request Spokesperson Interview
              </Link>
              <a
                href="mailto:communications@pwmsa.org.za?subject=Media%20Inquiry%20PWMSA"
                className="border border-white/30 text-white px-6 py-3.5 rounded-xl font-bold text-sm text-center hover:bg-white/10 transition-colors"
              >
                Send Media Request
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
