const steps = [
  {
    number: "01",
    title: "Escolha o pacote",
    description:
      "Selecione a campanha que melhor se encaixa no seu lançamento.",
  },
  {
    number: "02",
    title: "Entre em contato",
    description:
      "Envie as informações do projeto e o pacote escolhido pelo WhatsApp.",
  },
  {
    number: "03",
    title: "Análise editorial",
    description:
      "A TrapGround analisa o conteúdo antes da publicação.",
  },
  {
    number: "04",
    title: "Publicações",
    description:
      "O cronograma é combinado e as publicações são realizadas.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-[#2e2e2e] bg-[#111111]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            Como funciona
          </h2>
          <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Do contato à publicação
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-mono text-3xl font-bold text-[#7C3AED]/30">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a3a3a3]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
