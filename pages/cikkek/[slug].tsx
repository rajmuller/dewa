import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { FC } from "react";

import PageBody from "../../components/PageBody";
import { getAllContents, getContentBySlug } from "../../util";

import { PostType } from "./types";

type PostProps = {
  post: PostType;
  file: any;
};

const Post: FC<PostProps> = ({ file }) => {
  const router = useRouter();
  if (!router.isFallback && !file) {
    return <div>ERRORPAGE</div>;
  }

  return (
    <>
      <Head>
        {/* <title>{initialPost.seo.title}</title> */}
        {/* <meta name="description" content={initialPost.seo.description} /> */}
      </Head>
      {/* <PageBody content={initialPost.content} /> */}
      {/* <div>{initialPost.excerpt}</div> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const data = getContentBySlug("posts", slug as string, ["slug"]);
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "/cms/posts/test-cikk.md",
        data,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllContents("posts", ["slug"]);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
