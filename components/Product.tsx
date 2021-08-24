import Image from "next/image";
import { FC } from "react";
import { Flex, AspectRatio, Text } from "@chakra-ui/react";

import { ProductType } from "../types";

import { Button } from "./uikit";

type ProductProps = {
  product: ProductType;
  onOpen: (slug: string) => void;
};

const Product: FC<ProductProps> = ({ product, onOpen }) => {
  console.log({ product });

  const { nev, leiras, boritokep, slug } = product;
  return (
    <Flex
      direction="column"
      as="article"
      align="flex-start"
      shadow="lg"
      // background="#fff"
      borderRadius="lg"
      p={4}
    >
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
          src={boritokep}
          alt={`image of ${nev}`}
          layout="fill"
          objectFit="cover"
        />
      </AspectRatio>
      <Flex
        direction="column"
        justify="space-between"
        minH={[null, 64, 72, 80]}
      >
        <Text fontWeight="semibold" mb={[3, null, null, null]} noOfLines={2}>
          {nev}
        </Text>
        <Text
          fontSize="s"
          noOfLines={8}
          mb={[3, null, null, null]}
          color="grey.iron"
        >
          {leiras}
        </Text>
        <Button
          alignSelf="flex-start"
          onClick={() => onOpen(slug)}
          variant="secondary"
          side="right"
          fontSize="md"
        >
          Megnyitás
        </Button>
      </Flex>
    </Flex>
  );
};

export default Product;
