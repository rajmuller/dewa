import React, { FC } from "react";
import Image from "next/image";
import { AspectRatio, Text, Heading, Flex } from "@chakra-ui/react";

import { PostType } from "../pages/cikkek/types";

type PageHeaderProps = {
  post: PostType;
};

const PageHeader: FC<PageHeaderProps> = ({
  post: { coverImage, date, excerpt, title },
}) => {
  return (
    <Flex direction={["column", "row", "row", "row"]} justify="space-between">
      <Flex
        direction="column"
        align="flex-start"
        justify={[null, "space-between", "space-between", "space-between"]}
        maxW={[null, "50%", "40%", "35%"]}
      >
        <Heading variant="title" mb={[3, null, null, null]}>
          {title}
        </Heading>
        <Text
          fontSize={[null, null, null, 24]}
          mb={[3, null, null, null]}
          color="grey.iron"
        >
          {excerpt}
        </Text>
        <Text variant="meta" mb={[3, null, null, null]}>
          {date}
        </Text>
      </Flex>
      <AspectRatio
        ratio={1}
        position="relative"
        overflow="hidden"
        d="flex"
        w={["100%", "40%", "35%", "35%"]}
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
    </Flex>
  );
};

export default PageHeader;
