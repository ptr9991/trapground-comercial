import { getWhatsAppLink } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#2e2e2e]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            Mídia · Trap · Rap · Hip-Hop
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            TRAPGROUND
          </h1>

          <p className="mt-3 text-xl font-medium text-[#f5f5f5] sm:text-2xl">
            Divulgação para quem faz parte da cena.
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#a3a3a3] sm:text-lg">
            Coloque seu lançamento diante da audiência da TrapGround.
            Posts no X, collabs no Instagram e publicação no site editorial —
            direto para quem acompanha trap, rap e hip-hop.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pacotes"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#7C3AED] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#8B5CF6]"
            >
              Ver pacotes
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#2e2e2e] bg-transparent px-6 text-sm font-semibold text-white transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED]"
            >
              Falar com a TrapGround
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
