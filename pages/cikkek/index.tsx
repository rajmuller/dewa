import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { Heading, SimpleGrid } from "@chakra-ui/react";

import { getAllContents } from "../../util";

import { PostType } from "../../types";
import Article from "../../components/Article";

type CikkekType = {
  posts: PostType[];
};

const Cikkek: FC<CikkekType> = ({ posts }) => {
  const router = useRouter();
  const onOpen = useCallback(
    (slug: string) => {
      router.push({
        pathname: "/cikkek/[slug]",
        query: { slug },
      });
    },
    [router]
  );

  if (router.isFallback || !posts) {
    return <div>ERRORPAGE</div>;
  }

  return (
    <>
      <Heading textAlign="center">Cikkek</Heading>
      <SimpleGrid
        mt={16}
        justify="center"
        columns={[1, 2, 2, 3]}
        spacing={[16, 16, 16, 20]}
      >
        {posts.map((post) => {
          return <Article key={post.slug} post={post} onOpen={onOpen} />;
        })}
      </SimpleGrid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllContents("posts", [
    "title",
    "excerpt",
    "coverImage",
    "date",
    "seo",
    "slug",
  ]);

  return {
    props: {
      posts,
    },
  };
};

export default Cikkek;
