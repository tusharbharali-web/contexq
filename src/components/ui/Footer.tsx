'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import coinData from "@/data/coin-slices.json";
import { INQUIRY_EMAIL, mailLinkProps } from "@/lib/contact";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group whitespace-nowrap"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const solutionsData = coinData.slices.find((slice: any) => slice.title === "Solutions");
  const solutionsButtons = solutionsData?.buttons || [];

  const industriesData = coinData.slices.find((slice: any) => slice.title === "Industries");
  const industriesButtons = industriesData?.buttons || [];

  return (
    <footer className="relative bg-[#080f1d] border-t border-white/10 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-16 mb-12 md:mb-16 w-full">
            {/* Brand & Contact */}
            <div className="flex flex-col">
              <Link href="/" className="group group" style={{marginBottom: '24px'}}>
                <img
                  src="/assets/icons/logo_low.png"
                  alt="ContexQ Logo"
                  className="h-14 w-auto transition-transform group-hover:scale-110"
                  width={56}
                  height={56}
                  style={{ objectFit: 'contain' }}
                />
              </Link>
              <div className="space-y-3 text-sm text-gray-400">
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <a href="tel:+6566507151" className="hover:text-cyan-400 transition-colors">
                    +65 66507151
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a {...mailLinkProps} className="hover:text-cyan-400 transition-colors">
                    {INQUIRY_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="flex flex-col md:ml-20">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Solutions
              </h4>
              <ul className="flex flex-col gap-2">
                {solutionsButtons.map((button: any) => (
                  <li key={button.slug}>
                    <FooterLink href={`/solutions/${button.slug}`}>{button.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="flex flex-col md:ml-32">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Industries
              </h4>
              <ul className="flex flex-col gap-2">
                {industriesButtons.map((button: any) => (
                  <li key={button.slug}>
                    <FooterLink href={`/Industries/${button.slug}`}>{button.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div className="flex flex-col md:ml-20">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Explore
              </h4>
              <ul className="space-y-3">
                <li>
                  <FooterLink href="/careers">Careers</FooterLink>
                </li>
                <li>
                  <FooterLink href="/Ecosystem/blogs">Our Blog</FooterLink>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/6593844958"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.928 1.227l-.36-.18L2.753 5.007 3.71 8.635a9.847 9.847 0 001.052 4.392 9.9 9.9 0 008.614 5.36h.004c2.905 0 5.643-1.128 7.704-3.175a9.856 9.856 0 002.836-7.506 9.9 9.9 0 00-9.846-9.846" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://linkedin.com/company/contexq"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 ContexQ Pte. Ltd. All rights reserved.
            </p>

            {/* Legal links */}
            <div className="flex gap-6 text-sm">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-conditions">Terms and Conditions</FooterLink>
              <FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}