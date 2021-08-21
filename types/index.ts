export type ContentType =
  | "posts"
  | "references"
  | "feluletkezeles"
  | "fenyezofulkek"
  | "tuzelestechnika"
  | "szorastechnika";

export type SeoType = {
  title: string;
  description: string;
};

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  gallery?: string[];
  companyName?: string;
  excerpt: string;
  content: string;
  seo: SeoType;
};

export type PostTypeKeys = keyof PostType;

export type ProductType = {
  nev: string;
  alkategoria: string;
  divizio: string;
  leiras: string;
  boritokep: string;
  slug: string;
};

export type ProductKeys = keyof ProductType;
