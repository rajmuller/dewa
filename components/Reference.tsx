import Image from "next/image";
import { FC } from "react";
import { Flex, AspectRatio, Heading, Text } from "@chakra-ui/react";

import { PostType } from "../types";

import { Button } from "./uikit";

type ReferenceProps = {
  post: PostType;
  onOpen: (slug: string) => void;
};

const Reference: FC<ReferenceProps> = ({
  post: { slug, coverImage, title, date, excerpt },
  onOpen,
}) => {
  return (
    <Flex
      direction="column"
      as="article"
      align="flex-start"
      key={slug}
      borderRadius={[null, null, null, "3xl"]}
      shadow={[null, null, null, "bigCard"]}
      background={["transparent", "transparent", "transparent", "#fff"]}
      onClick={() => onOpen(slug)}
      cursor="pointer"
    >
      <AspectRatio
        ratio={5 / 3}
        position="relative"
        overflow="hidden"
        d="flex"
        w="100%"
        mb={6}
        borderTopRadius="2xl"
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
        p={[null, null, null, 4]}
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
        <Button variant="secondary" side="right">
          Elolvasom
        </Button>
      </Flex>
    </Flex>
  );
};

export default Reference;
