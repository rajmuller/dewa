import Image from "next/image";
import { FC } from "react";
import { Flex, AspectRatio, Heading, Text } from "@chakra-ui/react";

import { PostType } from "../types";

import { Button } from "./uikit";

type ArticleProps = {
  post: PostType;
  onOpen: (slug: string) => void;
};

const Article: FC<ArticleProps> = ({
  post: { slug, coverImage, title, date, excerpt },
  onOpen,
}) => {
  return (
    <Flex direction="column" as="article" align="flex-start">
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
        <Heading
          variant="articleTitle"
          mb={[3, null, null, null]}
          noOfLines={2}
        >
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
        <Button onClick={() => onOpen(slug)} variant="secondary" side="right">
          Elolvasom
        </Button>
      </Flex>
    </Flex>
  );
};

export default Article;
