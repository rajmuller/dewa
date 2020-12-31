import { GetStaticProps } from "next";
import { FC } from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

import { ArrowLeftIcon } from "../components/icons";
import { getPostSlugs } from "../util";

type IndexProps = {
  slugs: string[];
};

const Index: FC<IndexProps> = ({ slugs }) => {
  const router = useRouter();
  console.log(slugs);

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
                pathname: "/cikkek/[slug]",
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
  const files = getPostSlugs();
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default Index;
