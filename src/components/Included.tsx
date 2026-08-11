export default function Included() {
  const items = [
    "Divulgação para a audiência da TrapGround",
    "Publicações distribuídas conforme planejamento da campanha",
    "Conteúdo fornecido pelo artista/equipe",
    "Agendamento das publicações combinado previamente",
  ];

  return (
    <section className="border-b border-[#2e2e2e] bg-[#111111]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
          Incluído em todos os pacotes
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-[#d4d4d4]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
