import Image from "next/image";
import { FC } from "react";
import { Flex, AspectRatio, Heading, Text } from "@chakra-ui/react";

import { ProductType } from "../types";

import { Button } from "./uikit";

type ProductProps = {
  product: ProductType;
  onOpen: (slug: string) => void;
};

const ProductType: FC<ProductProps> = ({
  product: { slug, description, image, name },
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
          src={image}
          alt={`image of ${name}`}
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
          {name}
        </Heading>
        <Text
          noOfLines={[100, 4, 4, 4]}
          mb={[3, null, null, null]}
          color="grey.iron"
        >
          {description}
        </Text>
        <Button onClick={() => onOpen(slug)} variant="secondary" side="right">
          Elolvasom
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProductType;
