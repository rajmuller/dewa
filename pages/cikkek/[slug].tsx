import { GetStaticPaths, GetStaticProps } from "next";
// import { useRouter } from "next/router";
import Head from "next/head";
import { FC } from "react";
import Markdown from "../../components/Markdown";

import { getAllContents, getContentBySlug } from "../../util";

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
      <Markdown>{content}</Markdown>
    </>
  );
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

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const { content, data } = getContentBySlug("posts", slug as string);

  return {
    props: {
      content,
      data,
    },
  };
};

export default Post;
