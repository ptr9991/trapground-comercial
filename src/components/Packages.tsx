import { PACKAGES } from "@/data/packages";
import { getWhatsAppLink } from "@/data/site";

export default function Packages() {
  return (
    <section id="pacotes" className="border-b border-[#2e2e2e]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[#7C3AED]">
            Serviços
          </h2>
          <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Escolha sua campanha
          </p>
          <p className="mt-3 text-[#a3a3a3]">
            Quatro opções claras. Você escolhe o pacote, envia o material e a
            TrapGround cuida das publicações.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className="package-card flex flex-col rounded-lg border border-[#2e2e2e] bg-[#111111] p-5"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold tracking-wide text-white">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-xs text-[#a3a3a3]">{pkg.description}</p>
              </div>

              <p className="mb-5 font-mono text-3xl font-bold text-white">
                {pkg.priceFormatted}
              </p>

              <ul className="mb-6 flex-1 space-y-2.5 text-sm text-[#d4d4d4]">
                <li className="flex items-baseline gap-2">
                  <span className="font-mono text-[#7C3AED]">{pkg.xPosts}</span>
                  <span>
                    {pkg.xPosts === 1 ? "post no X" : "posts no X"}
                  </span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="font-mono text-[#7C3AED]">
                    {pkg.igCollabs}
                  </span>
                  <span>
                    {pkg.igCollabs === 1
                      ? "Collab no Instagram"
                      : "Collabs no Instagram"}
                  </span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="font-mono text-[#7C3AED]">
                    {pkg.sitePubs}
                  </span>
                  <span>
                    {pkg.sitePubs === 1
                      ? "publicação no site"
                      : "publicações no site"}
                  </span>
                </li>
              </ul>

              <p className="mb-5 text-xs leading-relaxed text-[#737373]">
                Ideal para: {pkg.idealFor}
              </p>

              <a
                href={getWhatsAppLink(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full rounded-md bg-[#7C3AED] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#8B5CF6]"
              >
                Contratar este pacote
              </a>
            </article>
          ))}
        </div>

        {/* Comparison table - desktop */}
        <div className="mt-12 hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#2e2e2e]">
                <th className="py-3 pr-4 text-left font-medium text-[#a3a3a3]">
                  Entrega
                </th>
                {PACKAGES.map((pkg) => (
                  <th
                    key={pkg.id}
                    className="px-3 py-3 text-center font-bold text-white"
                  >
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#2e2e2e]">
                <td className="py-3 pr-4 text-[#a3a3a3]">Preço</td>
                {PACKAGES.map((pkg) => (
                  <td
                    key={pkg.id}
                    className="px-3 py-3 text-center font-mono font-semibold text-white"
                  >
                    {pkg.priceFormatted}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[#2e2e2e]">
                <td className="py-3 pr-4 text-[#a3a3a3]">Posts no X</td>
                {PACKAGES.map((pkg) => (
                  <td
                    key={pkg.id}
                    className="px-3 py-3 text-center font-mono text-white"
                  >
                    {pkg.xPosts}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-[#2e2e2e]">
                <td className="py-3 pr-4 text-[#a3a3a3]">Collabs Instagram</td>
                {PACKAGES.map((pkg) => (
                  <td
                    key={pkg.id}
                    className="px-3 py-3 text-center font-mono text-white"
                  >
                    {pkg.igCollabs}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 pr-4 text-[#a3a3a3]">Publicações site</td>
                {PACKAGES.map((pkg) => (
                  <td
                    key={pkg.id}
                    className="px-3 py-3 text-center font-mono text-white"
                  >
                    {pkg.sitePubs}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
