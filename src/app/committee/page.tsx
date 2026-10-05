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
      "Profiles and portfolios of Angie Motshega, Zingiswa Losi, Me Getrude Mtsweni, Lulama Nare (CEO), Vuyiwe Hani, Syvia Maphala, Thandie Shongwe, Sophia Hlonipha Sikhosana, and provincial structures.",
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
    image: "/images/committee/angie-motshega.jpg",
    imagePosition: "object-top",
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
    name: "Zingiswa Losi",
    role: "National Convenor",
    badge: "Executive Leadership",
    image: "/images/committee/zingiswa-losi.jpg",
    imagePosition: "object-[center_20%]",
    bio: "Zingiswa Losi is a National Convenor of PWMSA, bringing formidable grassroots mobilisation expertise and decades of working-class trade union activism. Her leadership ensures that the movement remains uncompromisingly centered on the lived realities of farm workers, domestic workers, informal traders, and rural women.",
    responsibilities: [
      "Mobilising trade union coalitions and informal sector women's leagues.",
      "Direct oversight of provincial grassroots branch consolidation.",
      "Advocating for strict compliance with equal pay laws and workplace safety conventions.",
      "Championing rural women's land tenure and agricultural cooperative rights.",
    ],
    experience: "Prominent veteran of labour federation leadership, worker rights advocacy, and civic movement building.",
  },
  {
    name: "Lulama Nare",
    role: "National Working Committee & Chief Executive Officer",
    badge: "Executive & Administration",
    image: "/images/committee/lulama-nare.jpg",
    imagePosition: "object-top",
    bio: "Chief administrative executive running daily operations, secretariat staff, and programmes.\n\nPresenting legislative petitions, such as the Women's Parliament Declaration Report.\n\nManagement of donor agreements, compliance, and B-BBEE corporate partnership conduits.\n\nOverseeing research outputs, policy monitoring, and legal intervention desks.",
    responsibilities: [
      "Executive administration and daily operational oversight of PWMSA secretariat and national programmes.",
      "Tabling statutory legislative petitions, including the Women's Parliament Declaration Report.",
      "Stewardship of donor agreements, financial compliance, and B-BBEE corporate partnership conduits.",
      "Directing policy monitoring, research outputs, and national legal intervention desks.",
    ],
    experience: "Experienced executive in institutional governance, gender-responsive budgeting, and human rights law.",
  },
  {
    name: "Me Getrude Mtsweni",
    role: "National Working Committee",
    badge: "Portfolio Lead",
    image: "/images/committee/getrude-mtsweni.jpg",
    imagePosition: "object-top",
    bio: "Me Getrude Mtsweni is a pivotal member of the National Working Committee, leading community mobilisation and enterprise development portfolios. She has been instrumental in conceptualising and executing the Women's Enterprise Incubator in Mpumalanga and building rapid response GBV networks.",
    responsibilities: [
      "National portfolio lead for the Women's Economic Empowerment Fund.",
      "Coordinating provincial field operations and township community dialogues.",
      "Interfacing with provincial economic development agencies and micro-finance lenders.",
      "Direct oversight of cooperative establishment in agriculture and agro-processing.",
    ],
    experience: "Over two decades in community development, cooperative economics, and municipal governance.",
  },
  {
    name: "Vuyiwe Hani",
    role: "National Working Committee",
    badge: "Committee Member & Governance",
    image: "/images/committee/vuyiwe-hani.jpg",
    imagePosition: "object-top",
    bio: "Vuyiwe Hani is an experienced public representative, governance professional and community development practitioner with extensive experience in public leadership, stakeholder engagement, women empowerment and community development.\n\nShe currently serves as a PR Councillor and Leader of the Opposition at the Cape Winelands District Municipality, where she contributes to governance, oversight, public accountability and community advocacy. She is a Member of the National Executive Committee (NEC) of the ANC Women’s League (ANCWL) and serves as a National Working Committee Member of PWMSA, contributing to women's leadership, empowerment and organisational development.\n\nHer professional experience spans government, education, social development and community empowerment, including leadership and coordination of programmes focused on education, youth development, skills development and community advancement. Vuyiwe has a longstanding commitment to women's empowerment and gender equality. During her university years, she founded New Women Today (NEWTO), an organisation focused on women's empowerment, gender equality, safety and advocacy.",
    responsibilities: [
      "National Working Committee Member of PWMSA contributing to women's leadership, empowerment and organisational development.",
      "PR Councillor and Leader of the Opposition at the Cape Winelands District Municipality (governance, oversight & public accountability).",
      "Member of the National Executive Committee (NEC) of the ANC Women’s League (ANCWL).",
      "Founder of New Women Today (NEWTO) and coordinator of programmes in education, youth development, skills development and community advancement.",
    ],
    experience: "Qualifications in Governance and Leadership, Advanced Governance and Public Leadership, and Research Awareness for Leaders and Transitional Justice.",
  },
  {
    name: "Sylvia Maphala",
    role: "National Working Committee Member",
    badge: "National Working Committee",
    image: "/images/committee/syvia-maphala.jpg",
    imagePosition: "object-top",
    bio: "Sylvia Maphala is a lifelong liberation activist and National Working Committee Member of PWMSA (2025 to date), having previously served as PWMSA Sub-committee Chairperson (2017 – 2020).\n\nCapricorn & Mopani Regions: An activist from a young age, she joined BOYCO (Botlokwa Youth Congress) in 1980 and served as SRC President at Kgarahara High School (1988). She joined uMkhonto we Sizwe (MK) in 1984 in Trichardsdal, and later served as College SRC Female Convener (1990), Giyani South CIVIC Sub-regional Chairperson (1993), SADTU Giyani South Branch Chairperson (1993), ANC Khashane Branch Chairperson (1993), ANCYL Phalaborwa Sub-region Deputy Chairperson (1997), and ANC Dumitri Branch Secretary and ANCWL Chairperson (1997).\n\nProvincial, National & International Leadership: At the provincial level, she served as Deputy Chairperson of Moral Regeneration (2019) and MKLWV PEC Member (2022 to date). Nationally, she served as ANC NCOP Advisor (2014 – 2019), SANCO National Women Desk Convener, and SANCO 2nd Deputy General Secretary (2023 to date). Internationally, she served as President of African People and Human Rights for Women (2018) and President of China Investigation Bureau (2019).",
    responsibilities: [
      "PWMSA National Working Committee Member (2025 to date) & former PWMSA Sub-committee Chairperson (2017 – 2020).",
      "SANCO 2nd Deputy General Secretary (2023 to date) & SANCO National Women Desk Convener.",
      "MKLWV Provincial Executive Committee (PEC) Member (2022 to date) & former ANC NCOP Advisor (2014 – 2019).",
      "President of African People and Human Rights for Women (2018) & Deputy Chairperson of Moral Regeneration (2019).",
    ],
    experience: "Veteran of uMkhonto we Sizwe (joined 1984) and BOYCO (1980), with over four decades of civic, labour (SADTU), parliamentary (NCOP), and international women's rights leadership.",
  },
  {
    name: "Thandie Shongwe",
    role: "National Working Committee",
    badge: "Committee Member & Governance",
    image: "/images/committee/thandie-shongwe.jpg",
    imagePosition: "object-top",
    bio: "Blessing Thandie Shongwe is a seasoned legislator, former Speaker and MEC, educator, and National Working Committee Member of PWMSA with over four decades of leadership across education, municipal governance, parliament, and provincial executive administration.\n\nHer public service career began as an educator, Head of Department, and Deputy Principal (1982–2000) before serving as Councillor and MMC for Community Services at Ehlanzeni District Municipality (2000–2006) and Member of Parliament in the National Assembly (2008–2009). In the Mpumalanga Provincial Legislature, she served with distinction as Deputy Chief Whip (2009–2010), Chief Whip (2010–2014), and Speaker of the Legislature (2014–2017), followed by executive appointments as MEC for Culture, Sport and Recreation (2017–2019; 2020–present) and MEC for Social Development (2019–2020).\n\nA dedicated gender activist since her student and SADTU union leadership days in the 1980s, she has served as Board Director of Malibongwe in Mpumalanga, Regional Secretary of the ANC Women's League in Ehlanzeni, long-standing ANC & ANCWL PEC Member, and currently serves as an NEC Member of the ANC Women's League (2023 to date).",
    responsibilities: [
      "National Working Committee Member of PWMSA and NEC Member of the ANC Women’s League (ANCWL), designing and championing women's empowerment programmes.",
      "MEC for Culture, Sport and Recreation (2017–2019; 2020–present) & former MEC for Social Development (2019–2020) in Mpumalanga Province.",
      "Former Speaker (2014–2017) & Chief Whip (2010–2014) of the Mpumalanga Provincial Legislature, and former Member of Parliament in the National Assembly.",
      "Former Malibongwe Board Director, Ehlanzeni MMC for Community Services, and veteran SADTU & student leader.",
    ],
    experience: "BA Degree & Higher Education Diplomas (Vista University), Further Diploma in Educational Management, and Postgraduate Certificate & Advanced Diploma in Public Governance and Public Leadership (Wits University).",
  },
  {
    name: "Sophia Hlonipha Sikhosana",
    role: "PWMSA National Working Committee | Communications Officer",
    badge: "Communications Officer",
    image: "/images/committee/sophia-hlonipha-sikhosana.jpg",
    imagePosition: "object-top",
    bio: "Sophia Hlonipha Sikhosana is an entrepreneur, communications strategist, publisher, writer, editor, life coach, inspirational speaker and social impact advocate. She is the Founder and CEO of Innovizt Content Solutions, where she works across publishing, content development, communications, project management, brand strategy and business solutions.\n\nWith extensive experience in publishing and storytelling, Sophia has worked with authors, organisations and entrepreneurs, helping transform ideas into books, campaigns, brands and professional communication platforms. She is passionate about using communication and storytelling to amplify voices, particularly those of women and communities.\n\nAs a PWMSA National Working Committee Communications Officer, Sophia contributes her expertise in strategic communication, media, content creation, advocacy and public engagement to strengthen the organisation’s voice and advance its work in women’s empowerment, gender equality and the fight against GBVF.\n\nShe is also a recognised inspirational speaker and African Peace Magazine awardee, with a strong passion for resilience, women’s leadership, empowerment and turning ideas into meaningful action.",
    responsibilities: [
      "PWMSA National Working Committee Communications Officer leading strategic communication, media relations, content creation, advocacy and public engagement.",
      "Amplifying PWMSA's national voice in advancing women’s empowerment, gender equality and the eradication of Gender-Based Violence and Femicide (GBVF).",
      "Founder and CEO of Innovizt Content Solutions, overseeing publishing, content development, project management, brand strategy and business solutions.",
      "Transforming ideas into campaigns, books, brands and communication platforms that elevate the voices of women and communities.",
    ],
    experience: "Founder & CEO of Innovizt Content Solutions, publisher, communications strategist, inspirational speaker, and African Peace Magazine Awardee.",
  },
];

const provincialDirectory = [
  {
    province: "Gauteng",
    coordinator: "Mopipone & Provincial Committee",
    hub: "Johannesburg & Soweto",
    email: "communications@pwmsa.org.za",
    focus: "GBVF court monitoring, Jukskei River eco-justice, township women in business.",
  },
  {
    province: "Mpumalanga",
    coordinator: "Provincial Executive Secretariat",
    hub: "Nelspruit & Ehlanzeni",
    email: "communications@pwmsa.org.za",
    focus: "Women's Enterprise Incubator, agricultural cooperatives, rural land rights.",
  },
  {
    province: "KwaZulu-Natal",
    coordinator: "KZN Provincial Working Group",
    hub: "Durban & Pietermaritzburg",
    email: "communications@pwmsa.org.za",
    focus: "Sanitary dignity drive, flood disaster recovery, traditional authority gender dialogues.",
  },
  {
    province: "Western Cape",
    coordinator: "WC Provincial Secretariat",
    hub: "Cape Town & Mitchells Plain",
    email: "communications@pwmsa.org.za",
    focus: "Gang-related violence protection, domestic worker rights, youth tech mentorship.",
  },
  {
    province: "Eastern Cape",
    coordinator: "EC Working Committee",
    hub: "Gqeberha & Buffalo City",
    email: "communications@pwmsa.org.za",
    focus: "Rural clinic maternal care, anti-witchcraft persecution campaigns, girls in STEM.",
  },
  {
    province: "Free State",
    coordinator: "Bloemfontein Founding Chapter",
    hub: "Bloemfontein & Mangaung",
    email: "communications@pwmsa.org.za",
    focus: "Founding chapter heritage, farmworker rights, municipal gender budgeting.",
  },
  {
    province: "Limpopo",
    coordinator: "Limpopo Provincial Desk",
    hub: "Polokwane & Vhembe",
    email: "communications@pwmsa.org.za",
    focus: "Cross-border women traders, water access, indigenous crafts enterprise.",
  },
  {
    province: "North West",
    coordinator: "NW Provincial Working Team",
    hub: "Mahikeng & Rustenburg",
    email: "communications@pwmsa.org.za",
    focus: "Mining host community women, socio-economic environmental impacts.",
  },
  {
    province: "Northern Cape",
    coordinator: "NC Executive Secretariat",
    hub: "Kimberley & Upington",
    email: "communications@pwmsa.org.za",
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
    desc: "Manages the Women's Enterprise Fund, cooperative training, and monitoring of 40% preferential procurement.",
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
              National Working Committee
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
                {/* Photo Column (4 cols) */}
                <div className="lg:col-span-4 bg-gradient-to-b from-[#fdfbf7] to-[#f6f0e4] p-6 sm:p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-amber-200/70">
                  <div className="relative w-48 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300/80 bg-white">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      unoptimized
                      priority={i < 3}
                      className={`object-cover ${leader.imagePosition || "object-top"} group-hover:scale-105 transition-transform duration-500`}
                      sizes="(max-width: 640px) 192px, 224px"
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <span className="inline-block text-[11px] bg-[#e8ce52] text-[#4a3720] px-3 py-1 rounded-full font-black uppercase tracking-wider shadow-sm">
                      {leader.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">{leader.name}</h3>
                    <p className="text-[#715832] text-xs sm:text-sm font-bold mt-0.5">{leader.role}</p>
                  </div>
                </div>

                {/* Bio & Mandate (8 cols) */}
                <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="hidden lg:block border-b border-amber-100 pb-3">
                      <span className="text-xs bg-[#e8ce52]/40 text-[#4a3720] border border-amber-300/60 px-2.5 py-0.5 rounded font-black uppercase tracking-wider">
                        {leader.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">{leader.name}</h3>
                      <p className="text-[#715832] text-sm font-bold">{leader.role}</p>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
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
