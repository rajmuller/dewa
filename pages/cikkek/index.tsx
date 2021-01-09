import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { Flex, AspectRatio, Heading, Text, SimpleGrid } from "@chakra-ui/react";

import { getAllContents } from "../../util";
import { Button } from "../../components/uikit";

import { PostType } from "./types";

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
    <SimpleGrid
      justify="center"
      columns={[1, 2, 2, 3]}
      my={16}
      spacing={[16, 16, 16, 20]}
    >
      {posts.map((post) => {
        return (
          <Flex direction="column" align="flex-start" key={post.slug}>
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
            <Flex
              direction="column"
              justify="space-between"
              minH={[null, 64, 72, 72]}
            >
              <Heading variant="title" mb={[3, null, null, null]} noOfLines={2}>
                {post.title}
              </Heading>
              <Text variant="meta" mb={[3, null, null, null]}>
                {post.date}
              </Text>
              <Text
                noOfLines={[100, 4, 4, 4]}
                mb={[3, null, null, null]}
                color="grey.iron"
              >
                {post.excerpt}
              </Text>
              <Button
                onClick={() => onOpen(post.slug)}
                variant="secondary"
                side="right"
              >
                Elolvasom
              </Button>
            </Flex>
          </Flex>
        );
      })}
    </SimpleGrid>
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
