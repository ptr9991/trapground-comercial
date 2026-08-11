export type PackageId = "start" | "boost" | "pro" | "domination";

export interface Package {
  id: PackageId;
  name: string;
  price: number;
  priceFormatted: string;
  xPosts: number;
  igCollabs: number;
  sitePubs: number;
  idealFor: string;
  description: string;
}

export const PACKAGES: Package[] = [
  {
    id: "start",
    name: "START",
    price: 150,
    priceFormatted: "R$ 150",
    xPosts: 1,
    igCollabs: 1,
    sitePubs: 1,
    idealFor: "singles, clipes e lançamentos pontuais.",
    description: "Entrada rápida na audiência da TrapGround.",
  },
  {
    id: "boost",
    name: "BOOST",
    price: 300,
    priceFormatted: "R$ 300",
    xPosts: 3,
    igCollabs: 1,
    sitePubs: 1,
    idealFor: "campanhas de lançamento com reforço de divulgação.",
    description: "Mais posts no X para manter o lançamento quente.",
  },
  {
    id: "pro",
    name: "PRO",
    price: 500,
    priceFormatted: "R$ 500",
    xPosts: 5,
    igCollabs: 2,
    sitePubs: 1,
    idealFor: "lançamentos que precisam de mais recorrência e alcance.",
    description: "Presença consistente em múltiplas plataformas.",
  },
  {
    id: "domination",
    name: "DOMINATION",
    price: 750,
    priceFormatted: "R$ 750",
    xPosts: 10,
    igCollabs: 3,
    sitePubs: 2,
    idealFor: "campanhas completas de lançamento e divulgação de projetos.",
    description: "A opção mais completa para dominar a divulgação.",
  },
];
