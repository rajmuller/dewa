import { GetStaticProps } from "next";
import { FC } from "react";
// import { useRouter } from "next/router";
import Image from "next/image";
import { chakra, Flex, Heading, Text } from "@chakra-ui/react";

// import { ChevronLeftIcon } from "../components/icons";
import { getContentSlugs } from "../util";
import { Button } from "../components/uikit";
import { useContact } from "../hooks";

type IndexProps = {
  slugs: string[];
};

const Index: FC<IndexProps> = () => {
  // const router = useRouter();
  const { onOpen } = useContact();

  return (
    <Flex w="100vw" h="80vh" overflow="hidden">
      <Flex flex={1} direction="column" h="100%" justify="center">
        <Heading fontSize={64}>
          Mi festjük a jö<chakra.span color="red.500">w</chakra.span>őt
        </Heading>
        <Text mt={4} mb={[12, 12, 32]}>
          Magyarország piacvezető festékipari megoldásai
        </Text>
        <Button onClick={onOpen} bg="primary.500" variant="primary">
          Írjon Nekünk
        </Button>
      </Flex>
      <Flex flex={3} h="100%" position="relative">
        <Image
          objectFit="contain"
          layout="fill"
          src="/hero.png"
          alt="Festekszoro kep"
        />
      </Flex>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = getContentSlugs("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default Index;
