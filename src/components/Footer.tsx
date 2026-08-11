import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#2e2e2e] bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold text-white">
              TRAP<span className="text-[#7C3AED]">GROUND</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-[#a3a3a3]">
              Mídia especializada em trap, rap e hip-hop.
              Divulgação para a cena.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href={SITE.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] transition-colors hover:text-white"
              >
                X / Twitter
              </a>
              <a
                href={SITE.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href={SITE.links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] transition-colors hover:text-white"
              >
                Site editorial
              </a>
              <a
                href={SITE.links.playlist}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] transition-colors hover:text-white"
              >
                Playlist
              </a>
            </div>
            <p className="text-xs text-[#666]">
              WhatsApp: {SITE.whatsappDisplay}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-[#2e2e2e] pt-6 text-center text-xs text-[#666]">
          © {new Date().getFullYear()} TrapGround. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
