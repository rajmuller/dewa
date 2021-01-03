import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";

type TinaProps = {
  file: any;
};

const Tina: FC<TinaProps> = ({ file }) => {
  console.log({ file });

  const { data } = file;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          {/**
           * Render the title from `home.json`
           */}
          - Welcome to <a href="https://nextjs.org">Next.js!</a>
          {data.title}
        </h1>
      </main>
    </div>
  );
};

export default Tina;

export const getStaticProps: GetStaticProps = async ({
  preview,
  previewData,
}) => {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "data/home.json",
      parse: parseJson,
    });
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../data/home.json")).default,
      },
    },
  };
};
