import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const referencesDirectory = join(process.cwd(), "cms/cikkek");

export function getReferenceslugs() {
  return fs.readdirSync(referencesDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(referencesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: { [key: string]: unknown } = {};

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

export function getAllreferences(fields: string[] = []) {
  const slugs = getReferenceslugs();
  const references = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort references by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return references;
}
