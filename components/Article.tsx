import Image from "next/image";
import { FC, useState } from "react";
import { Flex, AspectRatio, Heading, Text } from "@chakra-ui/react";

import Link from "next/link";
import { motion } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={{
        pathname: "/cikkek/[slug]",
        query: { slug },
      }}
    >
      <a>
        <motion.article
          whileHover={{ y: -5 }}
          className="flex flex-col items-start p-4 rounded-md hover:shadow-md"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <AspectRatio
            ratio={3 / 2}
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
              objectFit="contain"
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
              {new Date(date).toLocaleDateString("hu-HU", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
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
              side="right"
              w="full"
            >
              Elolvasom
            </Button>
          </Flex>
        </motion.article>
      </a>
    </Link>
  );
};

export default Article;
