import Link from "next/link";
import { Heading } from "@chakra-ui/react";
import unified from "unified";
import parse from "remark-parse";
// @ts-ignore
import remark2react from "remark-react";
import { FC } from "react";

type AProps = {
  href: string;
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

const H1: FC = ({ children }) => {
  return (
    <Heading as="h1" ml={4}>
      {children}
    </Heading>
  );
};

const H2: FC = ({ children }) => {
  return (
    <Heading as="h2" ml={4}>
      {children}
    </Heading>
  );
};

const H3: FC = ({ children }) => {
  return (
    <Heading as="h3" ml={4}>
      {children}
    </Heading>
  );
};

const Markdown: FC = ({ children }) => {
  const content = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        a: A,
        h1: H1,
        h2: H2,
        h3: H3,
      },
    })
    // NOTE: maybe a problem
    .processSync(children as any).result;

  return <div>{content}</div>;
};

export default Markdown;
