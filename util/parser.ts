import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostTypeKeys } from "../pages/cikkek/types";

type ContentType = "posts" | "references";

const getDirectory = (type: ContentType) => {
  switch (type) {
    case "posts":
      return path.join(process.cwd(), "cms/posts");
    case "references":
      return path.join(process.cwd(), "cms/references");

    default:
      return null;
  }
};

export function getContentSlugs(type: ContentType) {
  return fs.readdirSync(getDirectory(type));
}

export const parseMarkdown = (fileContents: string) => {
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  };
};

export function getContentBySlug(
  type: ContentType,
  slug: string,
  fields?: PostTypeKeys[]
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(getDirectory(type), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: { [key: string]: string } = {};

  // Ensure only the minimal needed data is exposed
  if (!fields) {
    return {
      ...data,
      content,
      slug: realSlug,
    };
  }
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllContents(type: ContentType, fields?: PostTypeKeys[]) {
  const slugs = getContentSlugs(type);

  const posts = slugs
    .map((slug) => getContentBySlug(type, slug, fields))
    // sort posts by date in descending order
    // @ts-ignore
    .sort((post1, post2) => (post1.datum > post2.datum ? "-1" : "1"));
  return posts;
}
