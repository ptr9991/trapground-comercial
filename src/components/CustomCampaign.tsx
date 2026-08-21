"use client";

import { useMemo, useState } from "react";
import { CUSTOM_PRICE_PER_POST, estimateCustomPrice } from "@/data/packages";
import { getCustomWhatsAppLink } from "@/data/site";

function Stepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (next: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-[#2e2e2e] bg-[#0a0a0a] px-4 py-3">
      <span className="text-sm text-[#d4d4d4]">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2e2e2e] text-white hover:border-[#7C3AED]"
          aria-label={`Diminuir ${label}`}
        >
          −
        </button>
        <span className="w-6 text-center font-mono text-lg font-bold text-white">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2e2e2e] text-white hover:border-[#7C3AED]"
          aria-label={`Aumentar ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function CustomCampaign() {
  const [xPosts, setXPosts] = useState(1);
  const [igCollabs, setIgCollabs] = useState(0);
  const [sitePubs, setSitePubs] = useState(0);
  const [want, setWant] = useState("");

  const totalPosts = xPosts + igCollabs + sitePubs;
  const price = useMemo(
    () => estimateCustomPrice(xPosts, igCollabs, sitePubs),
    [xPosts, igCollabs, sitePubs]
  );

  return (
    <section id="personalizar" className="border-b border-[#2e2e2e] bg-[#111111]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            Campanha personalizada
          </h2>
          <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Monte o que você precisa
          </p>
          <p className="mt-3 text-[#a3a3a3]">
            R$ {CUSTOM_PRICE_PER_POST} por post, em qualquer rede. Sem desconto.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <Stepper
              label="Posts no X"
              value={xPosts}
              min={0}
              max={15}
              onChange={setXPosts}
            />
            <Stepper
              label="Collabs no Instagram"
              value={igCollabs}
              min={0}
              max={6}
              onChange={setIgCollabs}
            />
            <Stepper
              label="Publicações no site"
              value={sitePubs}
              min={0}
              max={5}
              onChange={setSitePubs}
            />
            <label className="block">
              <span className="mb-2 block text-sm text-[#d4d4d4]">
                O que você quer divulgar?
              </span>
              <textarea
                value={want}
                onChange={(e) => setWant(e.target.value)}
                rows={4}
                placeholder="Ex: single novo, clipe, feat, data de lançamento..."
                className="w-full resize-none rounded-lg border border-[#2e2e2e] bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-[#666] focus:border-[#7C3AED] focus:outline-none"
              />
            </label>
          </div>

          <div className="rounded-lg border border-[#2e2e2e] bg-[#0a0a0a] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
              Valor aproximado
            </p>
            <p className="mt-3 font-mono text-4xl font-bold text-white">
              R$ {price}
            </p>
            <p className="mt-2 text-sm text-[#a3a3a3]">
              {Math.max(totalPosts, 1)} {Math.max(totalPosts, 1) === 1 ? "post" : "posts"}{" "}
              × R$ {CUSTOM_PRICE_PER_POST}
            </p>

            <ul className="mt-6 space-y-2 text-sm text-[#d4d4d4]">
              <li>
                {xPosts} {xPosts === 1 ? "post no X" : "posts no X"}
              </li>
              <li>
                {igCollabs}{" "}
                {igCollabs === 1 ? "collab no Instagram" : "collabs no Instagram"}
              </li>
              <li>
                {sitePubs}{" "}
                {sitePubs === 1 ? "publicação no site" : "publicações no site"}
              </li>
            </ul>

            <a
              href={getCustomWhatsAppLink({
                xPosts,
                igCollabs,
                sitePubs,
                want,
                price,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex h-12 w-full items-center justify-center rounded-md bg-[#7C3AED] text-sm font-semibold text-white transition-colors hover:bg-[#8B5CF6]"
            >
              Pedir essa campanha no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
