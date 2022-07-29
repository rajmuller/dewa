import fs from "fs";
import path from "path";
import matter from "gray-matter";

import {
  ProductKeys,
  ContentType,
  PostKeys,
  ContactKeys,
  HomePageKeys,
} from "../types";

const getDirectory = (type: ContentType) => {
  switch (type) {
    case "posts":
      return path.join(process.cwd(), "cms/posts");
    case "references":
      return path.join(process.cwd(), "cms/references");
    case "feluletkezeles":
      return path.join(process.cwd(), "cms/termekek/feluletkezeles");
    case "fenyezofulkek":
      return path.join(process.cwd(), "cms/termekek/fenyezofulkek");
    case "tuzelestechnika":
      return path.join(process.cwd(), "cms/termekek/tuzelestechnika");
    case "szorastechnika":
      return path.join(process.cwd(), "cms/termekek/szorastechnika");
    case "fooldal":
      return path.join(process.cwd(), "cms/pages");
    case "kapcsolat":
      return path.join(process.cwd(), "cms/kapcsolat");

    default:
      return null;
  }
};

type Fields = PostKeys[] | ProductKeys[] | ContactKeys[] | HomePageKeys[];

export function getContentSlugs(type: ContentType) {
  return fs.readdirSync(getDirectory(type));
}

export function getContentBySlug(
  type: ContentType,
  slug: string,
  fields: Fields
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(getDirectory(type), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: { [key: string]: string } = {};

  // Ensure only the minimal needed data is exposed
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

export function getAllContents(type: ContentType, fields: Fields) {
  const slugs = getContentSlugs(type);

  const posts = slugs
    .map((slug) => getContentBySlug(type, slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
