/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { FC } from "react";

import { Divider } from "@chakra-ui/react";

import PageBody from "../../components/PageBody";
import PageHeader from "../../components/PageHeader";
import { getAllContents, getContentBySlug } from "../../util";

import { PostType } from "../../types";
import Carousel from "../../components/Carousel";

type PostProps = {
  reference: PostType;
};

const Reference: FC<PostProps> = ({ reference }) => {
  const { seo, content, slug, gallery, _template } = reference;

  const { isFallback } = useRouter();
  if (!isFallback && !slug) {
    return <div>ERRORPAGE</div>;
  }
  console.log("reference", reference);

  // gallery
  if (_template === "reference_gallery") {
    console.log("gallery", gallery);

    return (
      <>
        <Head>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
        </Head>

        <PageHeader post={reference} />
        <Divider
          my={12}
          borderBottomColor="grey.silver"
          opacity={1}
          borderBottomWidth="2px"
          orientation="horizontal"
        />
        <Carousel gallery={gallery} />
        <Divider
          my={12}
          borderBottomColor="grey.metal"
          opacity={1}
          borderBottomWidth="2px"
          orientation="horizontal"
        />
      </>
    );
  }

  // Reference
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>

      <PageHeader post={reference} />
      <Divider
        my={12}
        borderBottomColor="grey.silver"
        opacity={1}
        borderBottomWidth="2px"
        orientation="horizontal"
      />
      <PageBody content={content} />
      <Divider
        my={12}
        borderBottomColor="grey.metal"
        opacity={1}
        borderBottomWidth="2px"
        orientation="horizontal"
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const reference = getContentBySlug("references", slug as string, [
    "slug",
    "content",
    "coverImage",
    "date",
    "excerpt",
    "gallery",
    "seo",
    "title",
    "_template",
  ]);

  return {
    props: {
      reference,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllContents("references", ["slug"]);

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

export default Reference;
