export default function Criteria() {
  return (
    <section className="border-b border-[#2e2e2e]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            Antes de contratar
          </h2>
          <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Critérios para contratação
          </p>
          <p className="mt-4 text-[#a3a3a3]">
            Os pacotes são destinados a artistas que já possuem catálogo e
            presença ativa nas redes.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3 text-[#d4d4d4]">
              <span className="mt-1 font-mono text-sm text-[#7C3AED]">01</span>
              <span>Mais de 10 músicas lançadas no Spotify</span>
            </li>
            <li className="flex items-start gap-3 text-[#d4d4d4]">
              <span className="mt-1 font-mono text-sm text-[#7C3AED]">02</span>
              <span>Mais de 50 ouvintes</span>
            </li>
            <li className="flex items-start gap-3 text-[#d4d4d4]">
              <span className="mt-1 font-mono text-sm text-[#7C3AED]">03</span>
              <span>Mais de 500 seguidores nas redes sociais</span>
            </li>
          </ul>

          <p className="mt-8 rounded-md border border-[#2e2e2e] bg-[#111111] px-4 py-3 text-sm text-[#a3a3a3]">
            Todos os conteúdos passam por análise e aprovação editorial da
            TrapGround.
          </p>
        </div>
      </div>
    </section>
  );
}
