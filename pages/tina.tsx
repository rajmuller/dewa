import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import {
  getGithubPreviewProps,
  parseMarkdown,
  parseJson,
} from "next-tinacms-github";
import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";

type TinaProps = {
  post: any;
};

const Tina: FC<TinaProps> = ({ post }) => {
  const formOptions = {
    label: "Tina Page",
    fields: [
      {
        name: "title",
        component: "text",
      },
    ],
  };

  console.log({ post });

  const [data, form] = useGithubJsonForm(post, formOptions);
  usePlugin(form);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          {/**
           * Render the title from `home.md`
           */}
          - Welcome to <a href="https://nextjs.org">Next.js!</a>
          {data.title}
        </h1>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}) => {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "data/asd.json",
      parse: parseJson,
    });
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      post: {
        fileRelativePath: "/cms/posts/asd.json",
        data: (await import("../data/asd.json")).default,
      },
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = getAllContents("posts", ["slug"]);

//   const paths = posts.map((post) => ({
//     params: {
//       slug: post.slug,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Tina;
