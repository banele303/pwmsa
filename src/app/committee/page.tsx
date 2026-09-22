import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Network,
  ArrowRight,
  Shield,
  Award,
  Users,
  Building,
  CheckCircle2,
  FileCheck,
  Scale,
  Landmark,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "National Leadership & Committee | PWMSA Governance",
  description:
    "Meet the national convenors, executive leadership, and provincial coordinators driving the Progressive Women's Movement of South Africa.",
  openGraph: {
    title: "National Leadership & Committee | PWMSA Governance",
    description:
      "Profiles and portfolios of Angie Motshega, Zingiswa Losingie, Getrude Mtswene, ALulama Nare (CEO), Vuyelwa Hani, and provincial structures.",
    images: [
      {
        url: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab1.jpg",
        width: 800,
        height: 676,
        alt: "PWMSA National Committee Leaders",
      },
    ],
  },
};

const nationalLeaders = [
  {
    name: "Angie Motshega",
    role: "National Convenor",
    badge: "Executive Leadership",
    image: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab1.jpg",
    bio: "Angie Motshega serves as National Convenor of the Progressive Women's Movement of South Africa. A stalwart of gender activism and educational transformation with decades of public service, she provides strategic vision and high-level political guidance to the movement. Her lifelong activism is rooted in the tradition of South Africa's foundational women freedom fighters.",
    responsibilities: [
      "Custodian of the Movement's political direction and foundational charter.",
      "Leading national multi-sectoral alliances with government, labour federations, and civil society.",
      "Championing women's representation at cabinet, parliamentary, and constitutional levels.",
      "Presiding over the Special Alliance Conference and National Assemblies.",
    ],
    experience: "Over 35 years in education policy, gender advocacy, and national governance.",
  },
  {
    name: "Zingiswa Losingie",
    role: "National Convenor",
    badge: "Executive Leadership",
    image: "https://pwmsa.org.za/wp-content/uploads/pwmsa-ab2.jpg",
    bio: "Zingiswa Losingie is a National Convenor of PWMSA, bringing formidable grassroots mobilisation expertise and decades of working-class trade union activism. Her leadership ensures that the movement remains uncompromisingly centered on the lived realities of farm workers, domestic workers, informal traders, and rural women.",
    responsibilities: [
      "Mobilising trade union coalitions and informal sector women's leagues.",
      "Direct oversight of provincial grassroots branch consolidation.",
      "Advocating for strict compliance with equal pay laws and workplace safety conventions.",
      "Championing rural women's land tenure and agricultural cooperative rights.",
    ],
    experience: "Prominent veteran of labour federation leadership, worker rights advocacy, and civic movement building.",
  },
  {
    name: "ALulama Nare",
    role: "National Working Committee & Chief Executive Officer",
    badge: "Executive & Administration",
    image: "https://pwmsa.org.za/wp-content/uploads/20250718_080227-768x576.jpg",
    bio: "ALulama Nare holds the dual mandate of serving on the National Working Committee and serving as the Chief Executive Officer of PWMSA. In this capacity, she is the chief administrative and operational architect of the movement, steering programme delivery, financial governance, donor accountability, and international partnerships.",
    responsibilities: [
      "Chief administrative executive running daily operations, secretariat staff, and programmes.",
      "Presenting legislative petitions, such as the Women's Parliament Declaration Report.",
      "Management of donor agreements, compliance, and B-BBEE corporate partnership conduits.",
      "Overseeing research outputs, policy monitoring, and legal intervention desks.",
    ],
    experience: "Experienced executive in institutional governance, gender-responsive budgeting, and human rights law.",
  },
  {
    name: "Getrude Mtswene",
    role: "National Working Committee",
    badge: "NWC Portfolio Lead",
    image: "https://pwmsa.org.za/wp-content/uploads/20241012_164953-Copy-Copy-768x576.jpg",
    bio: "Getrude Mtswene is a pivotal member of the National Working Committee, leading community mobilisation and enterprise development portfolios. She has been instrumental in conceptualising and executing the WNC Women's Enterprise Incubator in Mpumalanga and building rapid response GBV networks.",
    responsibilities: [
      "National portfolio lead for the WNC Women's Economic Empowerment Fund.",
      "Coordinating provincial field operations and township community dialogues.",
      "Interfacing with provincial economic development agencies and micro-finance lenders.",
      "Direct oversight of cooperative establishment in agriculture and agro-processing.",
    ],
    experience: "Over two decades in community development, cooperative economics, and municipal governance.",
  },
  {
    name: "Vuyelwa Hani",
    role: "National Working Committee",
    badge: "NWC Portfolio Lead",
    image: "https://pwmsa.org.za/wp-content/uploads/20250718_071213-768x576.jpg",
    bio: "Vuyelwa Hani is an esteemed member of the National Working Committee, stewarding the social justice, legal reform, and victim support desks. Her rigorous focus on constitutional enforcement ensures PWMSA holds institutional offenders and perpetrators of gender-based violence legally accountable.",
    responsibilities: [
      "Leading the Legal & Human Rights Sub-committee and pro-bono advocate networks.",
      "Directing court monitoring operations for sexual assault and domestic violence cases.",
      "Spearheading campaigns against institutional and faith-based abuse.",
      "Managing civil society submissions on legislative amendments and criminal procedure acts.",
    ],
    experience: "Renowned human rights campaigner, paralegal trainer, and community mediator.",
  },
];

const provincialDirectory = [
  {
    province: "Gauteng",
    coordinator: "Mopipone & Provincial Committee",
    hub: "Johannesburg & Soweto",
    email: "gauteng@pwmsa.org.za",
    focus: "GBVF court monitoring, Jukskei River eco-justice, township women in business.",
  },
  {
    province: "Mpumalanga",
    coordinator: "Provincial Executive Secretariat",
    hub: "Nelspruit & Ehlanzeni",
    email: "mpumalanga@pwmsa.org.za",
    focus: "WNC Enterprise Incubator, agricultural cooperatives, rural land rights.",
  },
  {
    province: "KwaZulu-Natal",
    coordinator: "KZN Provincial Working Group",
    hub: "Durban & Pietermaritzburg",
    email: "kzn@pwmsa.org.za",
    focus: "Sanitary dignity drive, flood disaster recovery, traditional authority gender dialogues.",
  },
  {
    province: "Western Cape",
    coordinator: "WC Provincial Secretariat",
    hub: "Cape Town & Mitchells Plain",
    email: "westerncape@pwmsa.org.za",
    focus: "Gang-related violence protection, domestic worker rights, youth tech mentorship.",
  },
  {
    province: "Eastern Cape",
    coordinator: "EC Working Committee",
    hub: "Gqeberha & Buffalo City",
    email: "easterncape@pwmsa.org.za",
    focus: "Rural clinic maternal care, anti-witchcraft persecution campaigns, girls in STEM.",
  },
  {
    province: "Free State",
    coordinator: "Bloemfontein Founding Chapter",
    hub: "Bloemfontein & Mangaung",
    email: "freestate@pwmsa.org.za",
    focus: "Founding chapter heritage, farmworker rights, municipal gender budgeting.",
  },
  {
    province: "Limpopo",
    coordinator: "Limpopo Provincial Desk",
    hub: "Polokwane & Vhembe",
    email: "limpopo@pwmsa.org.za",
    focus: "Cross-border women traders, water access, indigenous crafts enterprise.",
  },
  {
    province: "North West",
    coordinator: "NW Provincial Working Team",
    hub: "Mahikeng & Rustenburg",
    email: "northwest@pwmsa.org.za",
    focus: "Mining host community women, socio-economic environmental impacts.",
  },
  {
    province: "Northern Cape",
    coordinator: "NC Executive Secretariat",
    hub: "Kimberley & Upington",
    email: "northerncape@pwmsa.org.za",
    focus: "Women's Parliament declaration follow-up, renewable energy inclusion.",
  },
];

const subCommittees = [
  {
    title: "Legal, Human Rights & Constitutional Compliance",
    desc: "Oversees court monitoring, policy submissions to Parliament, and pro-bono defense for GBV survivors.",
    icon: Scale,
  },
  {
    title: "Economic Transformation & Enterprise Development",
    desc: "Manages the WNC Enterprise Fund, cooperative training, and monitoring of 40% preferential procurement.",
    icon: Building,
  },
  {
    title: "Youth Chapter & Academic Mentorship",
    desc: "Headed by Ms Phumelela Zigoxo, driving tech skills, university chapters, and next-gen leadership.",
    icon: Users,
  },
  {
    title: "Audit, Finance, Risk & POPIA Compliance",
    desc: "Maintains financial transparency, independent annual audits, and statutory POPIA data protection.",
    icon: FileCheck,
  },
  {
    title: "Media, Communications & Public Education",
    desc: "Directs media briefings, public education broadcasts, social awareness, and campaign communications.",
    icon: Network,
  },
  {
    title: "International Solidarity & Pan-African Engagement",
    desc: "Engages the African Union Gender Directorate, UN Women, CEDAW reporting, and global sister movements.",
    icon: Landmark,
  },
];

export default function CommitteePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#1a140d] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a140d]/95 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-block bg-[#e8ce52] text-[#4a3720] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              National Governance &amp; Executive Secretariat
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              PWMSA National <br />
              <span className="text-[#e8ce52]">Leadership &amp; Committee</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Rooted in collective democratic leadership, the Progressive Women&apos;s Movement of South Africa is led by experienced convenors, executive administrators, and dedicated provincial coordinators across all nine provinces.
            </p>
          </div>
        </div>
      </section>

      {/* ── NATIONAL WORKING COMMITTEE PROFILES ── */}
      <section className="py-24 bg-[#faf7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#715832] bg-amber-100 border border-amber-300 px-3 py-1 rounded text-xs font-black uppercase tracking-widest">
              Executive Governance
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a]">
              National Working Committee (NWC)
            </h2>
            <p className="text-gray-600">
              The National Working Committee is tasked with executing the resolutions of the National Assembly, governing programmatic operations, and safeguarding the movement&apos;s constitutional integrity.
            </p>
          </div>

          <div className="space-y-12">
            {nationalLeaders.map((leader, i) => (
              <div
                key={leader.name}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-200/80 grid lg:grid-cols-12 gap-0 group"
              >
                {/* Photo (4 cols) */}
                <div className="lg:col-span-4 relative min-h-[320px] lg:min-h-full">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs bg-[#e8ce52] text-[#4a3720] px-2.5 py-0.5 rounded font-black uppercase tracking-wider">
                      {leader.badge}
                    </span>
                    <h3 className="text-2xl font-black mt-2">{leader.name}</h3>
                    <p className="text-[#e8ce52] text-sm font-semibold">{leader.role}</p>
                  </div>
                </div>

                {/* Bio & Mandate (8 cols) */}
                <div className="lg:col-span-8 p-8 lg:p-12 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {leader.bio}
                    </p>

                    <div className="bg-[#fcfaf5] border border-amber-200/70 rounded-2xl p-5 space-y-2">
                      <div className="text-xs font-black uppercase tracking-wider text-[#715832]">
                        Key Portfolio Responsibilities
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-2.5 pt-2">
                        {leader.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                            <CheckCircle2 size={14} className="text-[#715832] mt-0.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-amber-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
                    <div>
                      <strong className="text-gray-800">Background:</strong> {leader.experience}
                    </div>
                    <Link
                      href="/contact"
                      className="text-[#715832] font-bold hover:underline"
                    >
                      Connect with Office &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROVINCIAL COORDINATION DIRECTORY ── */}
      <section className="py-24 bg-white border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#715832] bg-amber-100 border border-amber-300 px-3 py-1 rounded text-xs font-black uppercase tracking-widest">
              Grassroots Footprint
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a]">
              All 9 Provincial Coordination Desks
            </h2>
            <p className="text-gray-600">
              PWMSA maintains active executive committees across all nine provinces of the Republic of South Africa, ensuring grassroots accountability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {provincialDirectory.map((prov) => (
              <div
                key={prov.province}
                className="bg-[#fcfaf6] rounded-2xl p-6 border border-amber-200/80 shadow-sm hover:shadow-md hover:border-[#715832] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-[#715832]">{prov.province}</span>
                    <span className="text-xs bg-[#e8ce52]/30 text-[#4a3720] px-2 py-0.5 rounded font-bold">
                      Active
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users size={12} className="text-[#715832]" />
                      <strong>Lead:</strong> {prov.coordinator}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-[#715832]" />
                      <strong>Regional Office:</strong> {prov.hub}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={12} className="text-[#715832]" />
                      <strong>Email:</strong> {prov.email}
                    </div>
                  </div>

                  <p className="text-xs text-gray-700 pt-2 border-t border-amber-100/60 leading-relaxed">
                    <strong>Provincial Priority:</strong> {prov.focus}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-amber-100">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-[#715832] hover:underline"
                  >
                    Contact {prov.province} Office &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE & SUB-COMMITTEES ── */}
      <section className="py-24 bg-[#1a140d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#e8ce52] text-xs font-bold uppercase tracking-widest">
              Accountability &amp; Structure
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Operational Sub-Committees
            </h2>
            <p className="text-gray-300">
              Ensuring the movement operates with unimpeachable institutional rigor, compliance, and public accountability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subCommittees.map((sub, i) => {
              const Icon = sub.icon;
              return (
                <div
                  key={i}
                  className="bg-[#261e15] border border-white/10 rounded-2xl p-6 hover:border-[#e8ce52]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="p-3 bg-[#e8ce52] text-[#4a3720] rounded-xl w-max">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{sub.title}</h3>
                    <p className="text-gray-300 text-xs leading-relaxed">{sub.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 text-[11px] text-[#e8ce52] font-semibold">
                    Constitutional Sub-Committee
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
