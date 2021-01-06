import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { FC } from "react";
import { usePlugin, FormOptions } from "tinacms";
import { useGithubMarkdownForm } from "react-tinacms-github";
import { getGithubPreviewProps } from "next-tinacms-github";

import PageBody from "../../components/PageBody";
import { getAllContents, getContentBySlug, parseMarkdown } from "../../util";
import { useWYSIWYG } from "../../hooks";

import { PostType } from "./types";

type PostProps = {
  post: PostType;
  file: any;
};

const Post: FC<PostProps> = ({ file }) => {
  console.log({ file });

  const formOptions = {
    id: file.initialPost.slug, // a unique identifier for this instance of the form
    label: "Blog Post", // name of the form to appear in the sidebar
    initialValues: { ...file.initialPost, kivonat: file.initialPost.excerpt }, // populate the form with starting values
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

  const data = getContentBySlug("posts", "test-cikk");
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
