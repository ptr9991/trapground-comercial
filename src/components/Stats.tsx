import { STATS } from "@/data/site";

export default function Stats() {
  return (
    <section id="numeros" className="border-b border-[#2e2e2e] bg-[#111111]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            Números
          </h2>
          <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            A audiência da TrapGround
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-lg border border-[#2e2e2e] bg-[#0a0a0a] px-4 py-6 sm:px-5 sm:py-8"
            >
              <p className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-[#a3a3a3] sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
