import { GetStaticProps } from "next";
import { FC } from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

import { ArrowLeftIcon } from "../components/icons";
import { getContentSlugs } from "../util";

type IndexProps = {
  slugs: string[];
};

const Index: FC<IndexProps> = ({ slugs }) => {
  const router = useRouter();

  return (
    <>
      {slugs.map((slug) => {
        const buttonText = slug.replace("-", " ");
        return (
          <Button
            key={slug}
            m="4"
            rightIcon={<ArrowLeftIcon ml={20} boxSize={4} />}
            onClick={() => {
              router.push({
                pathname: "/posts/[slug]",
                query: { slug },
              });
            }}
          >
            {buttonText}
          </Button>
        );
      })}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = getContentSlugs("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default Index;
