"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Pillars", href: "/pillars" },
  { label: "News", href: "/news" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Committee", href: "/committee" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "/contact" },
  { label: "Partner with Us", href: "/partner", highlight: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-[#e8ce52]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-2" aria-label="PWMSA Home">
            <Image
              src="https://pwmsa.org.za/wp-content/uploads/2026/08/symbol@2x.png"
              alt="PWMSA Logo"
              width={76}
              height={90}
              className="h-18 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ml-2 px-4 py-2 bg-[#715832] text-white text-sm font-semibold rounded-md hover:bg-[#4a3720] transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-[#715832] hover:bg-amber-50"
                      : "text-[#715832] hover:text-[#4a3720] hover:bg-[#d4b740]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-[#715832]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-amber-100 shadow-lg">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  link.highlight
                    ? "bg-[#715832] text-white hover:bg-[#4a3720]"
                    : "text-gray-700 hover:bg-amber-50 hover:text-[#715832]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
