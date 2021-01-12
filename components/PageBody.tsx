import Link from "next/link";
import Image from "next/image";
import { FC, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  ListIcon,
  AspectRatio,
} from "@chakra-ui/react";

import { TriangleIcon } from "./icons";

type AProps = {
  href: string;
};

type ImgProps = {
  src: string;
  alt: string;
  title: string;
};

const A: FC<AProps> = ({ children, href }) => {
  return href.startsWith("/") || href === "" ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const Img: FC<ImgProps> = ({ src, alt, title }) => {
  return (
    <AspectRatio
      ratio={16 / 9}
      mx={-16}
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
    >
      <a target="_blank" href={src} rel="noreferrer">
        <Image
          src={src}
          alt={alt}
          title={title}
          layout="fill"
          objectFit="cover"
        />
      </a>
    </AspectRatio>
  );
};

const H1: FC = ({ children }) => {
  return (
    <Heading variant="hero" as="h2">
      {children}
    </Heading>
  );
};

const H2: FC = ({ children }) => {
  return (
    <Heading as="h2" mb={4}>
      {children}
    </Heading>
  );
};

const H3: FC = ({ children }) => {
  return <Heading as="h3">{children}</Heading>;
};

const P: FC = ({ children }) => {
  return <Text mb={4}>{children}</Text>;
};

const Ul: FC = ({ children }) => {
  return (
    <UnorderedList ml={0} listStyleType="none" spacing={2} mb={4}>
      {children}
    </UnorderedList>
  );
};

const Ol: FC = ({ children }) => {
  return (
    <OrderedList spacing={3} mb={6}>
      {children}
    </OrderedList>
  );
};

const Li: FC = ({ children }) => {
  return (
    <ListItem>
      <ListIcon
        mr={5}
        verticalAlign="initial"
        color="grey.shadow"
        fontSize="xs"
        as={TriangleIcon}
      />
      {children}
    </ListItem>
  );
};

const Blockqoute: FC = ({ children }) => {
  return (
    <Box
      as="blockquote"
      bg="blockquote"
      borderLeftWidth="5px"
      borderLeftStyle="solid"
      borderLeftColor="secondary.500"
      borderRadius="3xl"
      borderTopLeftRadius="0"
      color="#000"
      px={6}
      py={8}
      my={6}
    >
      {children}
    </Box>
  );
};

type PageBodyProps = {
  content: string;
};

const PageBody: FC<PageBodyProps> = ({ content }) => {
  const renderers = {
    heading: ({ level, children }: { level: number; children: ReactNode }) => {
      switch (level) {
        case 1:
          return <H1>{children}</H1>;
        case 2:
          return <H2>{children}</H2>;
        case 3:
          return <H3>{children}</H3>;
        default:
          return <H3>{children}</H3>;
      }
    },

    paragraph: P,
    image: ({
      title,
      alt,
      src,
    }: {
      title: string;
      alt: string;
      src: string;
    }) => {
      console.log("SRC: ", src);

      return <Img title={title} alt={alt} src={src} />;
    },
    link: A,
    list: ({
      ordered,
      children,
    }: {
      ordered: boolean;
      children: ReactNode;
    }) => {
      if (ordered) {
        return <Ol>{children}</Ol>;
      }
      return <Ul>{children}</Ul>;
    },
    listItem: Li,
    blockquote: Blockqoute,
  };

  return (
    <Box
      as="article"
      maxW="2xl"
      color="grey.charcoal"
      fontSize="lg"
      margin="0 auto"
      lineHeight="2"
    >
      <ReactMarkdown renderers={renderers}>{content}</ReactMarkdown>
    </Box>
  );
};

export default PageBody;
