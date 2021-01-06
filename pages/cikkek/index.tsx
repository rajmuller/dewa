import { Flex, Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

import { getAllContents } from "../../util";
import { PostType } from "./types";

type CikkekType = {
  posts: PostType[];
};

const Cikkek: FC<CikkekType> = ({ posts }) => {
  console.log({ posts });

  const router = useRouter();
  if (router.isFallback || !posts) {
    return <div>ERRORPAGE</div>;
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <Flex direction="column" px={4}>
            <Flex
              position="relative"
              overflow="hidden"
              w="100%"
              borderRadius="xl"
              pt="100%"
            >
              <Image src={post.coverImage} layout="fill" objectFit="cover" />
            </Flex>
            <Box>{post.title}</Box>
          </Flex>
        );
      })}
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
