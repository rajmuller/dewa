export type SeoType = {
  title: string;
  description: string;
};

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  gallery?: string;
  excerpt: string;
  content: string;
  seo: SeoType;
};

export type PostTypeKeys = keyof PostType;
