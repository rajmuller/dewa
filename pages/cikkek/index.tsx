import { Flex, AspectRatio, Heading, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

import { getAllContents } from "../../util";
import { Button } from "../../components/uikit";
import { ChevronLeftIcon } from "../../components/icons";

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
          <Flex direction="column" align="flex-start" px={4} my={16}>
            <AspectRatio
              ratio={1}
              position="relative"
              overflow="hidden"
              d="flex"
              w="100%"
              mb={3}
              borderRadius="lg"
            >
              <Image
                src={post.coverImage}
                alt={`image of ${post.title}`}
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
            <Heading variant="title" mb={3}>
              {post.title}
            </Heading>
            <Text variant="meta" mb={3}>
              {post.date}
            </Text>
            <Text mb={3} color="grey.iron">
              {post.excerpt}
            </Text>
            <Button variant="secondary" side="right">
              Elolvasom
            </Button>
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
