import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { FC } from "react";
import { useForm, usePlugin, FormOptions } from "tinacms";
import PageBody from "../../components/PageBody";

import { getAllContents, getContentBySlug } from "../../util";
import { useWYSIWYG } from "../../hooks";

type SeoType = {
  title: string;
  description: string;
};

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
  seo: SeoType;
};

type PostProps = {
  post: PostType;
};

const Post: FC<PostProps> = ({ post: initialPost }) => {
  console.log({ initialPost });

  const formConfig: FormOptions<any> = {
    id: initialPost.slug, // a unique identifier for this instance of the form
    label: "Blog Post", // name of the form to appear in the sidebar
    initialValues: { ...initialPost, kivonat: initialPost.excerpt }, // populate the form with starting values
    onSubmit: (values) => {
      // do something with the data when the form is submitted
      alert(`Submitting ${values.title}`);
    },
    fields: [
      // define fields to appear in the form
      {
        name: "kivonat", // field name maps to the corresponding key in initialValues
        label: "Description", // label that appears above the field
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
  const [, form] = useForm(formConfig);
  usePlugin(form);

  const router = useRouter();
  if (!router.isFallback && !initialPost?.slug) {
    return <div>kell errorpage</div>;
  }

  return (
    <>
      <Head>
        <title>{initialPost.seo.title}</title>
        <meta name="description" content={initialPost.seo.description} />
      </Head>
      <PageBody content={initialPost.content} />
      <div>{initialPost.excerpt}</div>
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
  const post = getContentBySlug("posts", slug as string);

  return {
    props: {
      post,
    },
  };
};

export default Post;
