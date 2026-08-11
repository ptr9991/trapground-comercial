import { getWhatsAppLink } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="border-b border-[#2e2e2e] bg-[#111111]">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Pronto para colocar seu lançamento na frente da audiência?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[#a3a3a3]">
          Escolha o pacote, manda no WhatsApp e a gente analisa.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pacotes"
            className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-md border border-[#2e2e2e] px-6 text-sm font-semibold text-white transition-colors hover:border-[#7C3AED] sm:w-auto"
          >
            Ver pacotes
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-md bg-[#7C3AED] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#8B5CF6] sm:w-auto"
          >
            Falar com a TrapGround
          </a>
        </div>
      </div>
    </section>
  );
}
