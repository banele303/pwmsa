import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Globe2,
  HeartHandshake,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Award,
  Sparkles,
  Users2,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner with Us | Corporate, NGO & Institutional Collaboration",
  description:
    "Partner with the Progressive Women's Movement of South Africa (PWMSA). Explore corporate B-BBEE SED partnerships, donor conduits, and grassroots coalition opportunities.",
  openGraph: {
    title: "Partner with Us | PWMSA Partnership Prospectus",
    description:
      "Join PWMSA's national network advancing women's empowerment, GBVF eradication, and enterprise development.",
    images: [
      {
        url: "https://pwmsa.org.za/wp-content/uploads/website-soon-to-be-Launched.jpg",
        width: 1200,
        height: 515,
        alt: "Partner with PWMSA",
      },
    ],
  },
};

const partnershipModels = [
  {
    tier: "Tier 01",
    title: "Corporate & Private Sector (ESG & B-BBEE)",
    badge: "B-BBEE SED & Skills Aligned",
    icon: Building2,
    accent: "border-amber-400 bg-amber-950/20",
    description:
      "Align your corporation's ESG mandates and B-BBEE Socio-Economic Development (SED) / Skills Development points with high-impact, verified grassroots women's empowerment initiatives across South Africa.",
    keyBenefits: [
      "Full B-BBEE Socio-Economic Development verification certificate and audit packs.",
      "Direct co-branding on regional enterprise incubators and vocational skill hubs.",
      "Executive keynote opportunities at PWMSA national and provincial symposia.",
      "Comprehensive impact tracking reports including audited beneficiary registries.",
      "Corporate employee volunteer engagement programmes in local communities.",
    ],
    idealFor: "JSE-listed corporations, financial institutions, mining houses, and retail groups.",
  },
  {
    tier: "Tier 02",
    title: "Government Departments & State Entities",
    badge: "Public Policy & Implementation",
    icon: Globe2,
    accent: "border-teal-400 bg-teal-950/20",
    description:
      "Collaborate directly with PWMSA to deliver frontline public policy mandates, community GBVF prevention programmes, enterprise incubation, and municipal ward-level public dialogues.",
    keyBenefits: [
      "Access to established grassroots branch networks across all 9 provinces.",
      "Independent community monitoring of clinic maternal care and police GBV responsiveness.",
      "Joint hosting of provincial Women's Parliament sessions and community imbizos.",
      "Rapid mobilisation for public health, environmental, and civic education campaigns.",
      "Evidence-based policy submissions and gender budgeting oversight.",
    ],
    idealFor: "National and provincial government departments, municipalities, and statutory bodies.",
  },
  {
    tier: "Tier 03",
    title: "Civil Society, NGOs & Faith Alliances",
    badge: "Movement Solidarity",
    icon: HeartHandshake,
    accent: "border-rose-400 bg-rose-950/20",
    description:
      "Build a united, formidable progressive civil society front. PWMSA works in coalition with community non-profits, legal aid clinics, trade unions, and faith organisations to amplify collective power.",
    keyBenefits: [
      "Co-signatory status on major constitutional and legislative petitions to Parliament.",
      "Shared case management for high-profile GBVF and legal rights violations.",
      "Joint fundraising, grant consortium applications, and resource sharing.",
      "Access to PWMSA's national communication and public media channels.",
      "Mutual capacity building and paralegal training workshops.",
    ],
    idealFor: "Community-based organisations, survivor shelters, youth groupings, and legal advocacy funds.",
  },
  {
    tier: "Tier 04",
    title: "Philanthropic Foundations & International Donors",
    badge: "High-Impact Grant Funding",
    icon: TrendingUp,
    accent: "border-blue-400 bg-blue-950/20",
    description:
      "Channel grant funding and philanthropic resources into institutional strengthening, grassroots feminist leadership development, climate eco-justice, and women's micro-enterprise hubs.",
    keyBenefits: [
      "Transparent programmatic expenditure audited by accredited independent auditors.",
      "Tailored monitoring and evaluation (M&E) reporting mapped to UN SDGs (Goal 5).",
      "Field visits and direct stakeholder dialogue with programme beneficiaries.",
      "Direct support for sustainable, community-owned infrastructure and cooperatives.",
      "Quarterly executive briefings with PWMSA CEO and National Convenors.",
    ],
    idealFor: "Global philanthropic funds, diplomatic missions, and international development agencies.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Expression of Interest",
    desc: "Complete the online partnership inquiry form or email the Office of the CEO directly with your institutional mandate and target focus.",
  },
  {
    step: "02",
    title: "Strategic Alignment Consultation",
    desc: "Our partnership desk convenes an introductory dialogue to identify mutual programmatic priorities, geographic focus areas, and compliance criteria.",
  },
  {
    step: "03",
    title: "Co-Design of MOU & Programme Charter",
    desc: "We formulate a structured Memorandum of Understanding (MOU) defining project timelines, deliverables, resource allocations, and reporting benchmarks.",
  },
  {
    step: "04",
    title: "Executive Execution & Ground Rollout",
    desc: "Formal signing followed by immediate activation across relevant provincial structures, accompanied by joint media announcement.",
  },
  {
    step: "05",
    title: "Audited Evaluation & Annual Reporting",
    desc: "Ongoing monitoring with quarterly progress reviews, independent financial accounting, and annual impact showcase reports.",
  },
];

export default function PartnerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative bg-[#1a140d] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a140d]/95 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-block bg-[#e8ce52] text-[#4a3720] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Institutional Collaboration Prospectus
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Partner with <br />
              <span className="text-[#e8ce52]">PWMSA Today</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We invite corporations, government bodies, philanthropic foundations, and civil society alliances to join forces with the Progressive Women&apos;s Movement of South Africa. Together, we can translate progressive policy into measurable, lasting community transformation.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#partner-form"
                className="bg-[#e8ce52] text-[#4a3720] px-7 py-3.5 rounded-xl font-black text-sm hover:bg-white transition-colors"
              >
                Submit Partnership Inquiry
              </a>
              <a
                href="#tiers"
                className="border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors"
              >
                View Partnership Models
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORIC ARCHIVE BANNER ── */}
      <section className="bg-[#fbf8f2] py-8 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-amber-300">
            <Image
              src="https://pwmsa.org.za/wp-content/uploads/website-soon-to-be-Launched.jpg"
              alt="PWMSA Partner With Us Banner"
              width={1200}
              height={515}
              className="w-full h-auto object-cover max-h-[360px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── FOUR COMPREHENSIVE PARTNERSHIP TIERS ── */}
      <section id="tiers" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#715832] bg-amber-100 border border-amber-300 px-3 py-1 rounded text-xs font-black uppercase tracking-widest">
              Tailored Collaboration Pathways
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a]">
              Strategic Partnership Models
            </h2>
            <p className="text-gray-600">
              Every partnership is structured around clear accountability, measurable community outcomes, and strict compliance with national statutory frameworks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnershipModels.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className="bg-[#fcfaf6] rounded-3xl p-8 lg:p-10 border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-[#e8ce52] text-[#4a3720] shadow-sm">
                        <Icon size={26} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-[#715832] bg-[#e8ce52]/20 border border-[#e8ce52]/40 px-3 py-1 rounded-full">
                        {model.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block">
                        {model.tier}
                      </span>
                      <h3 className="text-2xl font-black text-gray-900 mt-1">
                        {model.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed mt-3">
                        {model.description}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#715832]">
                        Key Partnership Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {model.keyBenefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                            <CheckCircle2 size={14} className="text-[#715832] mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-amber-200/60 flex items-center justify-between">
                    <div className="text-[11px] text-gray-500 max-w-[240px]">
                      <strong>Target Stakeholders:</strong> {model.idealFor}
                    </div>
                    <a
                      href="#partner-form"
                      className="bg-[#715832] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#4a3720] transition-colors"
                    >
                      Inquire for this Model &rarr;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP ROADMAP ── */}
      <section className="py-24 bg-[#1a140d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#e8ce52] text-xs font-bold uppercase tracking-widest">
              From Engagement to Action
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              The 5-Step Partnership Journey
            </h2>
            <p className="text-gray-300">
              A transparent, audited process ensuring mutual alignment and rapid on-the-ground project deployment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#261e15] border border-white/10 rounded-2xl p-6 hover:border-[#e8ce52]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-[#e8ce52] block mb-2">{step.step}</span>
                  <h3 className="font-bold text-base text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 text-[10px] text-[#e8ce52] uppercase font-semibold">
                  PWMSA Protocol Step
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE PARTNERSHIP APPLICATION FORM ── */}
      <section id="partner-form" className="py-24 bg-[#fbf8f2] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-amber-200">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-[#715832] bg-amber-100 border border-amber-300 px-3 py-1 rounded text-xs font-black uppercase tracking-widest">
                Official Submission
              </span>
              <h2 className="text-3xl font-black text-gray-900">
                Institutional Partnership Inquiry
              </h2>
              <p className="text-gray-600 text-sm">
                Our National Working Committee Secretariat reviews all inquiries and responds within 3 working days.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Institution / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Standard Bank, Department of Social Dev"
                    className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Designated Contact Person &amp; Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name, Head of CSI / Director"
                    className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Official Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contact@organisation.co.za"
                    className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Direct Telephone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+27 (0) 11 000 0000"
                    className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Select Partnership Model *
                  </label>
                  <select
                    required
                    className="w-full border border-gray-300 rounded-xl p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                  >
                    <option value="">Choose a collaboration tier...</option>
                    <option value="corporate">Corporate Private Sector (B-BBEE / ESG)</option>
                    <option value="government">Government Department / State Entity</option>
                    <option value="ngo">Civil Society / NGO / Community Coalition</option>
                    <option value="donor">Philanthropic Foundation / Grant Donor</option>
                    <option value="other">Other / Custom Initiative</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Target Province / Geographic Scope
                  </label>
                  <select className="w-full border border-gray-300 rounded-xl p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#e8ce52]">
                    <option value="national">National (All 9 Provinces)</option>
                    <option value="gauteng">Gauteng</option>
                    <option value="mpumalanga">Mpumalanga</option>
                    <option value="kzn">KwaZulu-Natal</option>
                    <option value="western-cape">Western Cape</option>
                    <option value="eastern-cape">Eastern Cape</option>
                    <option value="free-state">Free State</option>
                    <option value="limpopo">Limpopo</option>
                    <option value="north-west">North West</option>
                    <option value="northern-cape">Northern Cape</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                  Overview of Proposed Collaboration &amp; Desired Impact *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your organisation's mandate, proposed budget or in-kind support, target pillars, and anticipated outcomes..."
                  className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                />
              </div>

              <div className="flex items-start gap-3 text-xs text-gray-600 bg-amber-50 p-4 rounded-xl border border-amber-200">
                <input type="checkbox" required className="mt-0.5 accent-[#715832]" />
                <span>
                  I confirm that I am authorised to represent this entity and consent to PWMSA processing this personal and institutional data in accordance with the Protection of Personal Information Act (POPIA).
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#715832] text-white py-4 rounded-xl font-black text-base hover:bg-[#4a3720] transition-colors shadow-lg"
              >
                Submit Partnership Inquiry to National Secretariat
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
