export const SITE = {
  name: "TrapGround",
  tagline: "Divulgação para quem faz parte da cena.",
  whatsapp: "5544998022466",
  whatsappDisplay: "+55 (44) 99802-2466",
  links: {
    instagram: "https://www.instagram.com/trapgroundx/",
    x: "https://x.com/trapcit0u",
    site: "https://www.trapground.com.br/",
    playlist: "https://open.spotify.com/playlist/420PqlBisd7m8UOQLHoFiX?si=58a7436b4dd24f36",
  },
} as const;

export function getWhatsAppLink(packageName?: string, discountPercent?: number) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!packageName) {
    return `${base}?text=${encodeURIComponent(
      "Olá! Quero divulgar meu lançamento com a TrapGround."
    )}`;
  }
  const discount =
    typeof discountPercent === "number"
      ? ` com ${discountPercent}% de desconto`
      : "";
  return `${base}?text=${encodeURIComponent(
    `Olá! Tenho interesse no Pacote ${packageName} da TrapGround${discount}. Pode me passar mais detalhes?`
  )}`;
}

export function getCustomWhatsAppLink(params: {
  xPosts: number;
  igCollabs: number;
  sitePubs: number;
  want: string;
  price: number;
}) {
  const details = params.want.trim()
    ? params.want.trim()
    : "(ainda não descrevi)";

  const text = `Olá! Quero montar uma campanha personalizada na TrapGround.

- Posts no X: ${params.xPosts}
- Collabs no Instagram: ${params.igCollabs}
- Publicações no site: ${params.sitePubs}
- O que quero divulgar: ${details}

Valor aproximado: R$ ${params.price}`;

  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Números oficiais da TrapGround
 * Fonte: painéis oficiais X e Instagram
 */
export const STATS = [
  {
    id: "x-followers",
    value: "21.841",
    label: "seguidores no X",
  },
  {
    id: "impressions",
    value: "159M",
    label: "impressões no X",
  },
  {
    id: "ig-followers",
    value: "3.700",
    label: "seguidores no Instagram",
  },
  {
    id: "ig-views",
    value: "23.6M",
    label: "visualizações no Instagram (30 dias)",
  },
] as const;
