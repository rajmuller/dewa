import { GetStaticPaths, GetStaticProps } from "next";
// import { useRouter } from "next/router";
import Head from "next/head";
import { FC } from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { markdownToHtml } from "../../util";

type PostProps = {
  content: string;
  data: { [key: string]: any };
};

const Post: FC<PostProps> = ({ content, data }) => {
  // const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <div>kell errorpage</div>;
  // }

  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
      </Head>
      <div>
        <div>contents below</div>
        <pre>{content}</pre>

        <div>data.seo.description</div>
        <pre>{data.seo.description}</pre>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), "cms/cikkek");
  const posts = fs.readdirSync(postsDirectory);
  const paths = posts.map((file) => {
    return {
      params: {
        slug: file.replace(".md", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("cms/cikkek", `${slug}.md`),
    "utf-8"
  );
  const { content: contentMarkdown, data } = matter(markdownWithMeta);
  const content = await markdownToHtml(contentMarkdown);

  return {
    props: {
      content,
      data,
    },
  };
};

export default Post;
