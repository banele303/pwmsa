import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "About Us", href: "/" },
  { label: "Pillars", href: "/pillars" },
  { label: "News", href: "/news" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Committee", href: "/committee" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "/contact" },
  { label: "Partner with Us", href: "/partner" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-5">
              <Image
                src="https://pwmsa.org.za/wp-content/uploads/2026/08/symbol@2x.png"
                alt="PWMSA Logo"
                width={72}
                height={86}
                className="h-16 sm:h-20 w-auto object-contain brightness-200 drop-shadow-md"
              />
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#e8ce52] tracking-tight block">PWMSA</span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">Est. 2006</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Progressive Women&apos;s Movement of South Africa
            </p>
            <p className="text-[#e8ce52] italic text-sm font-medium">
              &ldquo;United in Solidarity for Equality &amp; Justice&rdquo;
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[#e8ce52] font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#e8ce52] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h3 className="text-[#e8ce52] font-semibold text-sm uppercase tracking-widest mb-4">
              Organisation
            </h3>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#e8ce52] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#e8ce52] font-semibold text-sm uppercase tracking-widest mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#e8ce52] mt-0.5 shrink-0" />
                <div className="text-gray-400 text-sm">
                  <div>061 942 0421</div>
                  <div>+27 79 554 4302</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#e8ce52] mt-0.5 shrink-0" />
                <a
                  href="mailto:info@pwmsa.org.za"
                  className="text-gray-400 hover:text-[#e8ce52] text-sm transition-colors"
                >
                  info@pwmsa.org.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#e8ce52] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Progressive Women&apos;s Movement of South Africa. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Advancing Women&apos;s Emancipation, Gender Equality and Social Justice
          </p>
        </div>
      </div>
    </footer>
  );
}
