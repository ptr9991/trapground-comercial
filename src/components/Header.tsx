"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/data/site";

const navItems = [
  { label: "Serviços", href: "#pacotes" },
  { label: "Números", href: "#numeros" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Como funciona", href: "#como-funciona" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#2e2e2e] bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            TRAP<span className="text-[#7C3AED]">GROUND</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#a3a3a3] transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-[#7C3AED] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#8B5CF6] sm:inline-block"
          >
            Contratar divulgação
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#2e2e2e] text-white md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#2e2e2e] bg-[#0a0a0a] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-[#a3a3a3] transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md bg-[#7C3AED] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Contratar divulgação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
