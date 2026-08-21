export type PackageId = "start" | "boost" | "pro" | "domination";

export interface Package {
  id: PackageId;
  name: string;
  price: number;
  priceFormatted: string;
  originalPrice: number;
  originalPriceFormatted: string;
  discountPercent: number;
  xPosts: number;
  igCollabs: number;
  sitePubs: number;
  idealFor: string;
  description: string;
}

export const DISCOUNT_PERCENT = 40;

export const PACKAGES: Package[] = [
  {
    id: "start",
    name: "START",
    originalPrice: 200,
    originalPriceFormatted: "R$ 200",
    price: 120,
    priceFormatted: "R$ 120",
    discountPercent: DISCOUNT_PERCENT,
    xPosts: 1,
    igCollabs: 1,
    sitePubs: 1,
    idealFor: "singles, clipes e lançamentos pontuais.",
    description: "Entrada rápida na audiência da TrapGround.",
  },
  {
    id: "boost",
    name: "BOOST",
    originalPrice: 350,
    originalPriceFormatted: "R$ 350",
    price: 210,
    priceFormatted: "R$ 210",
    discountPercent: DISCOUNT_PERCENT,
    xPosts: 3,
    igCollabs: 1,
    sitePubs: 1,
    idealFor: "campanhas de lançamento com reforço de divulgação.",
    description: "Mais posts no X para manter o lançamento quente.",
  },
  {
    id: "pro",
    name: "PRO",
    originalPrice: 550,
    originalPriceFormatted: "R$ 550",
    price: 330,
    priceFormatted: "R$ 330",
    discountPercent: DISCOUNT_PERCENT,
    xPosts: 5,
    igCollabs: 2,
    sitePubs: 1,
    idealFor: "lançamentos que precisam de mais recorrência e alcance.",
    description: "Presença consistente em múltiplas plataformas.",
  },
  {
    id: "domination",
    name: "DOMINATION",
    originalPrice: 800,
    originalPriceFormatted: "R$ 800",
    price: 480,
    priceFormatted: "R$ 480",
    discountPercent: DISCOUNT_PERCENT,
    xPosts: 10,
    igCollabs: 3,
    sitePubs: 2,
    idealFor: "campanhas completas de lançamento e divulgação de projetos.",
    description: "A opção mais completa para dominar a divulgação.",
  },
];

export function estimateCustomPrice(
  xPosts: number,
  igCollabs: number,
  sitePubs: number
) {
  const list = xPosts * 50 + igCollabs * 80 + sitePubs * 70;
  const discounted = Math.round(list * (1 - DISCOUNT_PERCENT / 100));
  return {
    list,
    discounted: Math.max(discounted, 0),
  };
}
