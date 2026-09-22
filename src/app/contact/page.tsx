import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldAlert,
  HelpCircle,
  Building,
  CheckCircle2,
  Send,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact National Secretariat & Provincial Desks | PWMSA",
  description:
    "Get in touch with the Progressive Women's Movement of South Africa. Contact person: Sophia Hlonipha Koko. Phone: 061 942 0421 / +27 79 554 4302. Provincial office directory and 24/7 GBVF support.",
  openGraph: {
    title: "Contact National Secretariat & Provincial Desks | PWMSA",
    description:
      "Direct channels to PWMSA National Secretariat, Sophia Hlonipha Koko, 9 provincial desks, and 24/7 GBVF survivor help.",
  },
};

const emergencyLines = [
  {
    name: "National GBVF Command Centre",
    phone: "0800 428 428",
    detail: "24/7 Toll-free, counselling, social workers, emergency SAPS dispatch",
    callUs: "tel:0800428428",
  },
  {
    name: "SAPS Emergency Police Services",
    phone: "10111",
    detail: "Immediate police response for active assaults and crimes in progress",
    callUs: "tel:10111",
  },
  {
    name: "Stop Gender Violence Helpline",
    phone: "0800 150 150",
    detail: "Confidential telephonic support and shelter placement referral",
    callUs: "tel:0800150150",
  },
  {
    name: "Legal Aid South Africa Advice Line",
    phone: "0800 110 110",
    detail: "Free legal advice for maintenance, domestic violence protection orders",
    callUs: "tel:0800110110",
  },
];

const provincialDesks = [
  {
    province: "Gauteng",
    location: "Johannesburg Central & Soweto Hub",
    coordinator: "Coordinator Mopipone",
    phone: "+27 79 554 4302",
    email: "gauteng@pwmsa.org.za",
  },
  {
    province: "Free State",
    location: "Bloemfontein Founding Secretariat, Mangaung",
    coordinator: "Provincial Executive Desk",
    phone: "061 942 0421",
    email: "freestate@pwmsa.org.za",
  },
  {
    province: "Mpumalanga",
    location: "Nelspruit (Mbombela) & Ehlanzeni Hub",
    coordinator: "WNC Enterprise Desk",
    phone: "+27 79 554 4302",
    email: "mpumalanga@pwmsa.org.za",
  },
  {
    province: "KwaZulu-Natal",
    location: "Durban Central & Pietermaritzburg",
    coordinator: "KZN Provincial Working Desk",
    phone: "061 942 0421",
    email: "kzn@pwmsa.org.za",
  },
  {
    province: "Western Cape",
    location: "Cape Town Metro & Mitchells Plain",
    coordinator: "WC Regional Secretariat",
    phone: "+27 79 554 4302",
    email: "westerncape@pwmsa.org.za",
  },
  {
    province: "Eastern Cape",
    location: "Gqeberha & East London",
    coordinator: "EC Working Committee",
    phone: "061 942 0421",
    email: "easterncape@pwmsa.org.za",
  },
  {
    province: "Limpopo",
    location: "Polokwane & Capricorn District",
    coordinator: "Limpopo Provincial Desk",
    phone: "+27 79 554 4302",
    email: "limpopo@pwmsa.org.za",
  },
  {
    province: "North West",
    location: "Mahikeng & Bojanala District",
    coordinator: "NW Provincial Desk",
    phone: "061 942 0421",
    email: "northwest@pwmsa.org.za",
  },
  {
    province: "Northern Cape",
    location: "Kimberley & Frances Baard",
    coordinator: "NC Regional Office",
    phone: "+27 79 554 4302",
    email: "northerncape@pwmsa.org.za",
  },
];

const faqs = [
  {
    q: "Who can join the Progressive Women's Movement of South Africa?",
    a: "PWMSA is a broad-based, non-partisan progressive movement. Any woman living in South Africa committed to gender equality, eradicating violence against women, and advancing constitutional social justice is welcome to join our local and provincial branches.",
  },
  {
    q: "How does PWMSA support survivors of Gender-Based Violence?",
    a: "We provide direct support through court monitoring, connecting survivors with accredited shelters and Thuthuzela Care Centres, offering pro-bono legal advocacy, and mobilising community vigilance to prevent secondary victimisation.",
  },
  {
    q: "How are donations and corporate partnership funds managed?",
    a: "All financial resources received by PWMSA are audited annually by registered independent auditors in full accordance with national non-profit governance standards and B-BBEE Socio-Economic Development regulations.",
  },
  {
    q: "How can my organisation invite a PWMSA leader to speak?",
    a: "Official speaking requests for National Convenors or the CEO should be sent via email to info@pwmsa.org.za with the subject line 'Speaking Engagement Request', noting the date, audience, and agenda topics.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#1a140d] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a140d]/95 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-block bg-[#e8ce52] text-[#4a3720] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              National Communications Desk
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Get in Touch with <br />
              <span className="text-[#e8ce52]">PWMSA Nationally</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We operate across all nine provinces. Reach out for general inquiries, media briefings, survivor assistance, membership, or corporate partnership.
            </p>
          </div>
        </div>
      </section>

      {/* ── CRISIS HELPLINE TICKER ── */}
      <section className="bg-[#5a1215] text-white py-6 border-b border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4 text-[#e8ce52] font-black text-sm uppercase tracking-wider">
            <ShieldAlert size={18} /> Immediate 24/7 Emergency GBVF Assistance Lines
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyLines.map((line) => (
              <div key={line.name} className="p-3.5 bg-black/40 rounded-xl border border-red-500/30">
                <div className="text-xs font-bold text-gray-300">{line.name}</div>
                <a
                  href={line.callUs}
                  className="text-lg font-black text-[#e8ce52] hover:text-white block mt-0.5"
                >
                  {line.phone}
                </a>
                <p className="text-[11px] text-gray-400 mt-1 leading-snug">{line.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENTRAL CONTACT & INQUIRY FORM ── */}
      <section className="py-24 bg-[#faf7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: Official Contact Desk Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#715832] uppercase tracking-widest block mb-1">
                  National Secretariat Office
                </span>
                <h2 className="text-3xl font-black text-gray-900">
                  National Contact Desk
                </h2>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Our designated national liaison officer is <strong className="text-[#715832]">Sophia Hlonipha Koko</strong>. You can reach our central office through any of the verified channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#e8ce52] text-[#4a3720] shrink-0">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">Contact Person</div>
                    <div className="text-base font-bold text-gray-900">Sophia Hlonipha Koko</div>
                    <div className="text-xs text-[#715832]">National Administrative Desk</div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#e8ce52] text-[#4a3720] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">Telephone Lines</div>
                    <div className="text-base font-bold text-gray-900">061 942 0421</div>
                    <div className="text-base font-bold text-gray-900">+27 79 554 4302</div>
                    <div className="text-xs text-gray-500 mt-1">Operating Hours: Mon – Fri (08:00 – 17:00)</div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#e8ce52] text-[#4a3720] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">Official Email</div>
                    <a
                      href="mailto:info@pwmsa.org.za"
                      className="text-base font-bold text-[#715832] hover:underline"
                    >
                      info@pwmsa.org.za
                    </a>
                    <div className="text-xs text-gray-500 mt-1">General inquiries, petitions, partnerships</div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#e8ce52] text-[#4a3720] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">Headquarters &amp; Origins</div>
                    <div className="text-base font-bold text-gray-900">Republic of South Africa</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Founding Chapter: Bloemfontein, Free State. Executive Desks across all 9 Provinces.
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Connect */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-500 text-white rounded-xl">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-emerald-900 font-bold uppercase">WhatsApp Quick Desk</div>
                      <div className="text-sm font-bold text-emerald-950">+27 79 554 4302</div>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/27795544302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Open WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Comprehensive Multi-Category Message Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-amber-200">
                <div className="mb-8">
                  <span className="text-xs font-bold text-[#715832] uppercase tracking-wider">
                    Online Communication Portal
                  </span>
                  <h3 className="text-2xl font-black text-gray-900 mt-1">
                    Send a Message to the National Secretariat
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Your inquiry will be logged and routed to the relevant provincial or national desk immediately.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your first name"
                        className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your last name"
                        className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+27 XX XXX XXXX"
                        className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                        Category of Inquiry *
                      </label>
                      <select
                        required
                        className="w-full border border-gray-300 rounded-xl p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                      >
                        <option value="">Select inquiry category...</option>
                        <option value="gbvf">GBVF Emergency / Victim Support Assistance</option>
                        <option value="membership">PWMSA Membership &amp; Local Branch Joining</option>
                        <option value="partnership">Corporate or Institutional Partnership</option>
                        <option value="media">Media Interview / Press Inquiry</option>
                        <option value="enterprise">Enterprise Incubator / Cooperative Programme</option>
                        <option value="volunteer">Volunteer on a Campaign</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                        Your Province *
                      </label>
                      <select
                        required
                        className="w-full border border-gray-300 rounded-xl p-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                      >
                        <option value="">Choose province...</option>
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
                      Detailed Message / Situation Overview *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please provide details regarding your inquiry, situation, or request..."
                      className="w-full border border-gray-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e8ce52]"
                    />
                  </div>

                  <div className="flex items-start gap-3 text-xs text-gray-600 bg-amber-50 p-4 rounded-xl border border-amber-200">
                    <input type="checkbox" required className="mt-0.5 accent-[#715832]" />
                    <span>
                      I consent to PWMSA processing my contact information in accordance with the Protection of Personal Information Act (POPIA) for the explicit purpose of responding to this communication.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#715832] text-white py-4 rounded-xl font-black text-base hover:bg-[#4a3720] transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Send Message to PWMSA Desk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL 9 PROVINCES CONTACT DIRECTORY ── */}
      <section className="py-24 bg-white border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#715832] bg-amber-100 border border-amber-300 px-3 py-1 rounded text-xs font-black uppercase tracking-widest">
              Grassroots Reach
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900">
              Provincial Desks &amp; Office Contacts
            </h2>
            <p className="text-gray-600">
              Connect directly with our regional coordinators in your area for branch activities, local petitioning, or community meetings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {provincialDesks.map((d) => (
              <div
                key={d.province}
                className="bg-[#fcfaf6] p-6 rounded-2xl border border-amber-200/80 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-black text-[#715832]">{d.province}</h4>
                  <span className="text-[11px] bg-[#e8ce52]/30 px-2 py-0.5 rounded font-bold text-[#4a3720]">
                    Provincial Desk
                  </span>
                </div>
                <div className="text-xs text-gray-600 space-y-1.5">
                  <div>
                    <strong>Hub:</strong> {d.location}
                  </div>
                  <div>
                    <strong>Lead:</strong> {d.coordinator}
                  </div>
                  <div>
                    <strong>Phone:</strong> {d.phone}
                  </div>
                  <div>
                    <strong>Email:</strong> {d.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-24 bg-[#faf7f0] border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#715832] uppercase tracking-widest">
              General Inquiries
            </span>
            <h2 className="text-3xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-2">
                <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                  <HelpCircle size={18} className="text-[#715832] shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed pl-6.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
