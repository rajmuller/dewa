import Link from "next/link";
import Image from "next/image";
import { FC, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Box, Heading } from "@chakra-ui/react";

type AProps = {
  href: string;
};

type ImgProps = {
  src: string;
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

const Img: FC<ImgProps> = ({ src: fullPath }) => {
  const src = fullPath.replace("/public", "");

  return (
    <Box width="70vw" pt={`${(9 / 16) * 100}%`} position="relative">
      <Image src={src} alt="asd" layout="fill" objectFit="cover" />;
    </Box>
  );
  // return <Image src={src} alt="asd" height={600} width={1600} />;
};

const H1: FC = ({ children }) => {
  return (
    <Heading variant="hero" as="h2">
      {children}
    </Heading>
  );
};

const H2: FC = ({ children }) => {
  return <Heading as="h2">{children}</Heading>;
};

const H3: FC = ({ children }) => {
  return <Heading as="h3">{children}</Heading>;
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

    image: Img,
    link: A,
  };

  return <ReactMarkdown renderers={renderers}>{content}</ReactMarkdown>;
};

export default PageBody;
