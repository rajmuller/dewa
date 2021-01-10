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
        const { slug, coverImage, title, date, excerpt } = post;

        return (
          <Flex direction="column" align="flex-start" key={slug}>
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
                src={coverImage}
                alt={`image of ${title}`}
                layout="fill"
                objectFit="cover"
              />
            </AspectRatio>
            <Flex
              direction="column"
              justify="space-between"
              minH={[null, 64, 72, 80]}
            >
              <Heading variant="title" mb={[3, null, null, null]} noOfLines={2}>
                {title}
              </Heading>
              <Text variant="meta" mb={[3, null, null, null]}>
                {date}
              </Text>
              <Text
                noOfLines={[100, 4, 4, 4]}
                mb={[3, null, null, null]}
                color="grey.iron"
              >
                {excerpt}
              </Text>
              <Button
                onClick={() => onOpen(slug)}
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
