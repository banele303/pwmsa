import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Tag,
  ArrowRight,
  Clock,
  Download,
  Share2,
  Search,
  FileText,
  Building,
  ShieldAlert,
  Sparkles,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "News & Official Statements | PWMSA Media Desk",
  description:
    "Read official statements, press releases, parliamentary dispatches, and campaign updates from the Progressive Women's Movement of South Africa (PWMSA).",
  openGraph: {
    title: "News & Official Statements | PWMSA Media Desk",
    description:
      "Stay informed with the latest investigative reports, press briefings, and campaign news from PWMSA.",
    images: [
      {
        url: "https://pwmsa.org.za/wp-content/uploads/20241012_132501.jpg",
        width: 1200,
        height: 675,
        alt: "PWMSA News & Statements",
      },
    ],
  },
};

const articlesCollection = [
  {
    slug: "urgent-gbvf-action-plea",
    title: "PWMSA Calls for Immediate Emergency Declared on National GBVF Crisis",
    excerpt:
      "Following a harrowing spike in brutal femicide cases across three provinces, the Progressive Women's Movement of South Africa has submitted a formal dossier to the Ministry of Police demanding emergency judicial measures, permanent bail bans for repeat domestic offenders, and dedicated funding for township shelters.",
    fullContent:
      "In an exhaustive memorandum presented to the Inter-Ministerial Committee on Gender-Based Violence, PWMSA National Convenor Angie Motshega stressed that current interventions remain fragmented and under-resourced. The statement outlines six immediate operational steps, including the 24-hour staffing of Thuthuzela Care Centres, the mandatory re-opening of domestic violence court registers, and community audits of police responsiveness.",
    category: "Official Statement",
    categoryColor: "bg-red-100 text-red-800 border-red-200",
    date: "18 September 2026",
    readTime: "4 min read",
    author: "PWMSA National Secretariat",
    image: "https://pwmsa.org.za/wp-content/uploads/20241012_132501.jpg",
    featured: true,
  },
  {
    slug: "womens-parliament-northern-cape",
    title: "Women's Parliament 2026: CEO ALulama Nare Delivers Landmark Declaration Report",
    excerpt:
      "Addressing lawmakers and delegates in Kimberley, PWMSA CEO ALulama Nare tabled the 2026 Declaration Report, requiring provincial governments to establish statutory accountability metrics for 50/50 gender parity across all public sector appointments and procurement spend.",
    fullContent:
      "The Declaration Report, produced after six months of provincial consultations across South Africa's rural and urban districts, highlights persistent implementation deficits in existing gender legislation. The CEO emphasized that while South Africa's legal framework is praised internationally, working-class women continue to bear the brunt of unmonitored austerity and patriarchal violence.",
    category: "Parliamentary Report",
    categoryColor: "bg-purple-100 text-purple-800 border-purple-200",
    date: "28 August 2026",
    readTime: "5 min read",
    author: "Office of the Chief Executive",
    image: "https://pwmsa.org.za/wp-content/uploads/20250718_080227-768x576.jpg",
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
    image: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab1.jpg",
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
    image: "https://pwmsa.org.za/wp-content/uploads/20241012_164953-Copy-Copy-768x576.jpg",
    featured: false,
  },
  {
    slug: "mpumalanga-enterprise-launch",
    title: "PWMSA WNC Enterprise Hub Launches in Mpumalanga: 200 Women Entrepreneurs Enrolled",
    excerpt:
      "The PWMSA National Working Committee has activated its flagship economic incubator in Mpumalanga, providing accredited business management training, SARS tax assistance, and supply-chain linkages for women-owned businesses.",
    fullContent:
      "During the launch in Ehlanzeni District, NWC member Getrude Mtswene underscored that economic sovereignty is the most potent antidote to domestic vulnerability and gender-based violence. The programme has already facilitated seed equipment grants for 15 agro-processing cooperatives.",
    category: "Economic Transformation",
    categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    date: "19 June 2026",
    readTime: "4 min read",
    author: "WNC Enterprise Desk",
    image: "https://pwmsa.org.za/wp-content/uploads/20250718_071213-768x576.jpg",
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
    image: "https://pwmsa.org.za/wp-content/uploads/20250130_145419-768x576.jpg",
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
    image: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab2.jpg",
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
    image: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab4.jpg",
    featured: false,
  },
];

export default function NewsPage() {
  const featured = articlesCollection[0];
  const rest = articlesCollection.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#1a140e] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a140e]/95 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-block bg-[#e8ce52] text-[#4a3720] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Newsroom &amp; Public Statements Desk
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Official Media &amp; <br />
              <span className="text-[#e8ce52]">Movement Dispatches</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Read all verified press releases, parliamentary submissions, campaign dispatches, and policy updates directly from the National Working Committee of PWMSA.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED HEADLINE STORY ── */}
      <section className="py-16 bg-[#fbf8f2] border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-200/80 grid lg:grid-cols-12 gap-0">
            {/* Featured Image (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute top-6 left-6 bg-[#e8ce52] text-[#4a3720] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                FEATURED LEAD STORY
              </span>
            </div>

            {/* Featured Body (5 cols) */}
            <div className="lg:col-span-5 p-8 lg:p-12 space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${featured.categoryColor}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                  {featured.title}
                </h2>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {featured.excerpt}
                </p>

                <p className="text-gray-600 text-xs leading-relaxed border-l-2 border-[#715832] pl-3 italic">
                  {featured.fullContent}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  <span className="block font-semibold text-gray-800">{featured.author}</span>
                  <span>{featured.date}</span>
                </div>
                <button className="text-xs bg-[#715832] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#4a3720] transition-colors">
                  Read Full Statement
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-100 pb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                Recent Dispatches &amp; Statements
              </h2>
              <p className="text-gray-600 text-sm">
                Chronological archive of PWMSA public communication and media interventions.
              </p>
            </div>
            <div className="text-xs text-[#715832] font-bold">
              Showing {articlesCollection.length} Verified Entries
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((art) => (
              <article
                key={art.slug}
                className="bg-[#fcfaf6] rounded-2xl overflow-hidden border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${art.categoryColor}`}>
                        {art.category}
                      </span>
                    </div>
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
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-amber-100/60 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-gray-500">
                    {art.author}
                  </span>
                  <button className="text-xs font-bold text-[#715832] group-hover:underline flex items-center gap-1">
                    Read More &rarr;
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDIA RESOURCE & PRESS KIT ── */}
      <section className="py-20 bg-[#1a140e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#261d14] border border-amber-500/30 rounded-3xl p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#e8ce52] text-xs font-bold uppercase tracking-widest">
                Journalists &amp; Media Inquiries
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Official PWMSA Media Kit &amp; Spokesperson Contacts
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                For verified quotes, high-resolution logos, broadcast commentary on gender policy, or interviews with National Convenors and the CEO, please contact our media liaison desk.
              </p>
              <div className="flex flex-wrap gap-6 pt-2 text-xs text-gray-300">
                <div>
                  <strong className="text-white block">Media Inquiries:</strong>
                  <span>media@pwmsa.org.za / info@pwmsa.org.za</span>
                </div>
                <div>
                  <strong className="text-white block">Press Officer Phone:</strong>
                  <span>+27 79 554 4302 / 061 942 0421</span>
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
                href="mailto:info@pwmsa.org.za?subject=Media%20Inquiry%20PWMSA"
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
