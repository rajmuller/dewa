import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { getGithubPreviewProps } from "next-tinacms-github";
import { usePlugin } from "tinacms";
import { useGithubMarkdownForm } from "react-tinacms-github";
import { useWYSIWYG } from "../hooks";
import { getContentBySlug, parseMarkdown } from "../util";

type TinaProps = {
  file: any;
};

const Tina: FC<TinaProps> = (props) => {
  console.log({ props });

  const { file } = props;

  const formOptions = {
    label: "Tina Page",
    fields: [
      // define fields to appear in the form
      {
        name: "title", // field name maps to the corresponding key in initialValues
        label: "Title", // label that appears above the field
        component: "text", // the component used to handle UI and input to the field
      },
      {
        name: "excerpt", // field name maps to the corresponding key in initialValues
        label: "Excerpt", // label that appears above the field
        component: "text", // the component used to handle UI and input to the field
      },
      {
        name: "content", // remember we want `rawMarkdownBody`, not `content` here
        label: "Content",
        component: "markdown", // `component` accepts a predefined components or a custom React component
      },
    ],
  };

  useWYSIWYG();
  const [data, form] = useGithubMarkdownForm(file, formOptions);

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
      fileRelativePath: "cms/posts/test-cikk.md",
      parse: parseMarkdown,
    });
  }

  const post = getContentBySlug("posts", "test-cikk");

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "/cms/posts/test-cikk.md",
        data: post,
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
