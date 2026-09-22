import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Lock,
  Scale,
  Building,
  Mail,
  Phone,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & POPIA Compliance | PWMSA Statutory Notice",
  description:
    "Comprehensive Privacy Policy of the Progressive Women's Movement of South Africa in full compliance with the Protection of Personal Information Act 4 of 2013 (POPIA) and PAIA.",
  robots: { index: true, follow: true },
};

const policySections = [
  {
    id: "sec-1",
    num: "01",
    title: "Statutory Undertaking & Scope of Policy",
    content: `The Progressive Women's Movement of South Africa (PWMSA) operates as an incorporated broad-based national civil movement established in 2006 in Bloemfontein. This comprehensive Privacy Policy governs the collection, processing, storage, dissemination, and destruction of personal information by PWMSA in rigorous compliance with the Protection of Personal Information Act 4 of 2013 (POPIA), the Promotion of Access to Information Act 2 of 2000 (PAIA), and the Constitution of the Republic of South Africa.

This policy applies without exception to all natural persons and juristic entities whose personal information is processed by PWMSA, including registered members, campaign participants, donor organisations, corporate CSI partners, event attendees, digital website visitors, and survivors accessing our legal assistance and referral desks.`,
  },
  {
    id: "sec-2",
    num: "02",
    title: "The Responsible Party & Information Officer",
    content: `PWMSA is the 'Responsible Party' as defined in Section 1 of POPIA. The organisation determines the lawful purpose and technical means for processing personal information.

In accordance with Sections 55 and 56 of POPIA, PWMSA has registered an Information Officer with the Information Regulator of South Africa. All statutory notices, data access requests, or regulatory queries must be directed to:

• Designated Information Officer: Office of the Chief Executive Officer / National Administrative Desk
• Attention: Sophia Hlonipha Koko / ALulama Nare
• Physical Address: PWMSA National Secretariat, Republic of South Africa
• Electronic Mail: info@pwmsa.org.za / popia@pwmsa.org.za
• Telephone: 061 942 0421 / +27 79 554 4302`,
  },
  {
    id: "sec-3",
    num: "03",
    title: "Lawful Grounds for Data Processing",
    content: `PWMSA adheres strictly to the eight statutory conditions for lawful processing set out in Chapter 3 of POPIA:

1. Accountability: Ensuring full compliance at all stages of data handling.
2. Processing Limitation: Processing is conducted lawfully, reasonably, and with informed consent or statutory justification.
3. Purpose Specification: Personal information is collected solely for explicit, defined, and lawful organizational purposes.
4. Further Processing Limitation: Information is not repurposed in a manner incompatible with the initial collection consent.
5. Information Quality: Taking reasonable measures to ensure personal information remains complete, accurate, and up to date.
6. Openness: Full transparency regarding collection practices and Information Officer registration.
7. Security Safeguards: Maintaining state-of-the-art administrative and digital safeguards against unauthorized access, destruction, or breach.
8. Data Subject Participation: Ensuring accessible mechanisms for individuals to access, verify, or demand deletion of their personal records.`,
  },
  {
    id: "sec-4",
    num: "04",
    title: "Categories of Personal Information Processed",
    content: `Depending on the nature of your interaction with PWMSA, we collect and process the following categories of data:

• Identifiers: First name, surname, national identity number or passport number, date of birth, and nationality (primarily for formal membership registers, bursary applications, and enterprise incubator compliance).
• Contact Information: Physical residential address, postal code, mobile telephone numbers, and email addresses.
• Civic & Demographic Profile: Provincial residence, local municipal ward, language preference, and organizational affiliation.
• Financial & CSI Information: For donors, sponsors, and cooperative grant beneficiaries—banking details, B-BBEE verification certificates, tax compliance documentation, and accounting records.
• Sensitive & Victim Support Information: Where survivors of Gender-Based Violence voluntarily engage our victim support desk, we may record case docket numbers, police precinct references, medical referral records, and court attendance logs under strict special-personal-information confidentiality rules.`,
  },
  {
    id: "sec-5",
    num: "05",
    title: "Processing of Special Personal Information",
    content: `Under Section 26 of POPIA, the processing of Special Personal Information (including health data, biometric data, religious beliefs, or criminal behavior allegations) is strictly prohibited unless specific statutory exemptions apply.

PWMSA processes Special Personal Information exclusively under the following conditions:
• Explicit, voluntary written consent granted by the data subject or legal guardian.
• For the establishment, exercise, or defense of legal claims concerning victims of sexual violence, abuse, or constitutional human rights violations.
• In historical, statistical, or research contexts where the information is completely anonymised and de-identified so individual identification is impossible.`,
  },
  {
    id: "sec-6",
    num: "06",
    title: "Mandatory Non-Disclosure & Third-Party Sharing",
    content: `PWMSA maintains an absolute policy never to sell, commercialise, monetize, rent, or lease any personal information to commercial marketing brokers, data aggregators, or unauthorized third parties.

Personal data is disclosed only to verified third parties strictly under formal written Data Processing Agreements:
• Accredited psychosocial care facilities, shelter networks, and Thuthuzela Care Centres when assisting a survivor with explicit consent.
• Registered pro-bono attorneys and advocate chambers representing victims in ongoing legal and court proceedings.
• Statutory law enforcement authorities (SAPS, National Prosecuting Authority) when formally compelled by a valid subpoena or court warrant.
• Certified cloud infrastructure and encrypted database service providers bound by strict confidentiality and POPIA-equivalent security protocols.`,
  },
  {
    id: "sec-7",
    num: "07",
    title: "Technical & Organizational Security Measures",
    content: `PWMSA implements robust multi-layer technical and physical security defenses to prevent data loss, unauthorized access, identity theft, or cyber manipulation:

• 256-bit Secure Socket Layer (SSL/TLS) encryption on all website forms and communications.
• Role-based access control restricting sensitive registers strictly to authorized National Working Committee executives.
• Routine security audits, penetration assessments, and encrypted offsite backups.
• Comprehensive physical locking mechanisms for paper files, court logs, and archivist records at national and provincial desks.`,
  },
  {
    id: "sec-8",
    num: "08",
    title: "Data Retention & Destruction Schedules",
    content: `In accordance with Section 14 of POPIA, PWMSA does not retain personal information for longer than is necessary to achieve the designated purpose for which it was acquired.

Our standardized retention schedule specifies:
• General Website Inquiries & Contact Forms: Retained for 24 months, followed by permanent electronic deletion.
• Membership & Volunteer Directories: Maintained for the duration of active affiliation plus 5 years for historical movement continuity.
• Financial, Donor, and B-BBEE Audit Packs: Retained for 5 to 7 years in strict compliance with the Companies Act and SARS requirements.
• GBVF Victim Support Files: Archived under high-security encryption for a minimum of 10 years to support ongoing legal appeals, subsequent civil litigation, or historical justice research.`,
  },
  {
    id: "sec-9",
    num: "09",
    title: "Your Statutory Rights as a Data Subject",
    content: `Under POPIA, all individuals whose data is processed by PWMSA possess enforceable statutory rights:

• Right to Confirmation & Access: You may request written confirmation of whether we hold personal information concerning you, and obtain an unredacted copy thereof.
• Right to Rectification: You have the unconditional right to request the correction, amendment, or updating of inaccurate, irrelevant, or obsolete data.
• Right to Erasure / Destruction: You may request the destruction or permanent deletion of your personal records where processing is no longer justified.
• Right to Object: You may object on reasonable grounds to the processing of your personal information.
• Right to Withdraw Consent: Where processing was grounded solely in consent, you may withdraw that consent at any juncture without penalty.`,
  },
  {
    id: "sec-10",
    num: "10",
    title: "Cookies & Digital Analytics Disclosure",
    content: `Our website utilizes essential session cookies and aggregated analytics to ensure smooth technical navigation, responsive form handling, and accessibility compliance. We do not deploy invasive third-party cross-site behavioral tracking cookies.

Visitors may adjust their web browser settings to reject or delete cookies; however, certain interactive portals (such as the partnership submission form) may experience reduced operational functionality.`,
  },
  {
    id: "sec-11",
    num: "11",
    title: "Lodging Complaints with the Information Regulator",
    content: `If you believe that PWMSA has processed your personal information in violation of POPIA, or has failed to respond adequately to your statutory rights request, you have the right to lodge a formal complaint with the Information Regulator of South Africa:

• The Information Regulator (South Africa)
• JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001
• Postal Address: P.O. Box 31533, Braamfontein, Johannesburg, 2017
• Complaints Email: POPIAComplaints@inforegulator.org.za
• General Inquiries: enquiries@inforegulator.org.za
• Website: https://inforegulator.org.za`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#1a140d] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1a140d]/95 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <span className="inline-block bg-[#e8ce52] text-[#4a3720] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Statutory Compliance Framework
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Privacy Policy &amp; <br />
              <span className="text-[#e8ce52]">POPIA Compliance</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              The Progressive Women&apos;s Movement of South Africa is committed to uncompromising standards of transparency, data subject confidentiality, and lawful governance under the Protection of Personal Information Act 4 of 2013.
            </p>
            <div className="text-xs text-gray-400">
              <span>Last Formal Audit Review: September 2026</span> • <span>Effective Date: 08 August 2006 to Present</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGAL COMPLIANCE NOTICE BAR ── */}
      <section className="bg-[#e8ce52] py-4 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#4a3720]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="shrink-0" />
            <span>
              POPIA ACT 4 OF 2013 &amp; PAIA ACT 2 OF 2000 COMPLIANCE CHARTER
            </span>
          </div>
          <div>
            Registered Information Officer: <span className="underline">info@pwmsa.org.za</span>
          </div>
        </div>
      </section>

      {/* ── EXHAUSTIVE POLICY PROVISIONS ── */}
      <section className="py-24 bg-[#faf7f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {policySections.map((sec) => (
            <div
              key={sec.id}
              id={sec.id}
              className="bg-white p-8 lg:p-10 rounded-3xl border border-amber-200/80 shadow-md space-y-4 scroll-mt-24"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-[#715832]">{sec.num}</span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                  {sec.title}
                </h2>
              </div>
              <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line border-t border-amber-100 pt-4">
                {sec.content}
              </div>
            </div>
          ))}

          {/* Contact Information Desk Box */}
          <div className="bg-[#241a10] text-white p-8 rounded-3xl border border-[#e8ce52]/40 shadow-xl space-y-4">
            <h3 className="text-xl font-bold text-[#e8ce52] flex items-center gap-2">
              <Lock size={20} /> Exercise Your Data Subject Rights
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              To request access, correction, or destruction of your personal information held by the Progressive Women&apos;s Movement of South Africa, please submit a formal written request to our Information Officer.
            </p>
            <div className="pt-2 text-xs text-gray-300 space-y-1">
              <div><strong>Information Officer:</strong> Sophia Hlonipha Koko / Office of the CEO</div>
              <div><strong>Email:</strong> info@pwmsa.org.za / popia@pwmsa.org.za</div>
              <div><strong>Hotline:</strong> 061 942 0421 / +27 79 554 4302</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
