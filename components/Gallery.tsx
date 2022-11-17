import Image from "next/image";
import { FC, useState } from "react";
import { Flex, AspectRatio, Heading } from "@chakra-ui/react";

import { motion } from "framer-motion";
import Link from "next/link";
import { PostType } from "../types";

import { Button } from "./uikit";

type GalleryProps = {
  post: PostType;
};

const Gallery: FC<GalleryProps> = ({ post: { slug, coverImage, title } }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -3 }}
      className="hover:shadow-md cursor-pointer"
    >
      <Link
        href={{
          pathname: "/referenciak/[slug]",
          query: { slug },
        }}
      >
        <a>
          <Flex
            direction="column"
            as="article"
            align="flex-start"
            key={slug}
            borderRadius="xl"
            shadow={[null, null, null, "md"]}
            overflow="hidden"
            cursor="pointer"
          >
            <AspectRatio
              ratio={16 / 9}
              position="relative"
              overflow="hidden"
              d="flex"
              w="100%"
              mb={3}
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
              minH={[null, 12, 16, 36]}
              w="100%"
              px={3}
              pb={6}
            >
              <Heading
                variant="articleTitle"
                mb={[3, null, null, null]}
                noOfLines={2}
              >
                {title}
              </Heading>
              <Button
                variant="secondary"
                p={0}
                fontSize={["12px", "12px", "14px", "16px"]}
                side="right"
                w="full"
                color={[
                  "secondary.500",
                  "secondary.500",
                  isHovered ? "secondary.500" : "secondary.50",
                ]}
                borderBottomColor={[
                  "secondary.500",
                  "secondary.500",
                  isHovered ? "secondary.500" : "secondary.50",
                ]}
              >
                Megnyitás
              </Button>
            </Flex>
          </Flex>
        </a>
      </Link>
    </motion.div>
  );
};

export default Gallery;
