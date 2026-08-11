"use client";

import { getWhatsAppLink } from "@/data/site";

export default function MobileCTA() {
  return (
    <div className="mobile-cta-bar md:hidden">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-full items-center justify-center rounded-md bg-[#7C3AED] text-sm font-semibold text-white"
      >
        Contratar divulgação
      </a>
    </div>
  );
}
