"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Quem pode contratar?",
    a: "Artistas que atendam aos critérios: mais de 10 músicas no Spotify, mais de 50 ouvintes e mais de 500 seguidores nas redes.",
  },
  {
    q: "O conteúdo é garantido?",
    a: "Todo conteúdo passa por análise e aprovação editorial da TrapGround. Não há garantia de alcance, streams ou viralização.",
  },
  {
    q: "Quem fornece o material?",
    a: "O artista ou a equipe. Você envia o conteúdo que será usado nas publicações.",
  },
  {
    q: "As publicações são agendadas?",
    a: "Sim. O cronograma é combinado previamente com a TrapGround.",
  },
  {
    q: "Posso escolher o pacote?",
    a: "Sim. Você escolhe o pacote que faz mais sentido para o seu lançamento e entra em contato.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-b border-[#2e2e2e]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            FAQ
          </h2>
          <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Perguntas frequentes
          </p>
        </div>

        <div className="max-w-2xl divide-y divide-[#2e2e2e]">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={open === i}
              >
                <span className="text-base font-medium text-white">
                  {faq.q}
                </span>
                <span className="ml-4 text-[#7C3AED]">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="mt-3 text-sm leading-relaxed text-[#a3a3a3]">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
