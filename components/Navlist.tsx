import { FC, useState, useCallback } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { useRouter } from "next/router";
import BaseButton from "./uikit/Button/BaseButton";
import { OutsideIcon } from "./icons/OutsideIcon";
import { getRemovedAccents } from "../util/removeAccents";

type LinkItemProps = {
  currentPage?: boolean;
  href: string;
  css?: any;
};

const LinkItem: FC<LinkItemProps> = ({ children, currentPage, href, css }) => {
  return (
    <Link href={href}>
      <a>
        <Box
          color={currentPage ? "secondary.500" : "black"}
          cursor="pointer"
          mr={12}
          css={css}
          _hover={{
            transform: "scale(1.02)",
          }}
        >
          {children}
        </Box>
      </a>
    </Link>
  );
};

type ProductCategoriesProps = {
  currentPage?: boolean;
  show: boolean;
};

const ProductCategories: FC<ProductCategoriesProps> = ({
  show,
  currentPage,
}) => {
  const productCategories = [
    "Felületkezelés",
    "Festőfülkék",
    "Tüzeléstechnika",
    "Szórástechnika",
  ];

  if (!show) {
    return null;
  }
  return (
    <Box
      p={4}
      zIndex={1}
      position="absolute"
      top={6}
      left={-4}
      borderBottomRadius="lg"
      bg="background"
    >
      {productCategories.map((category, i) => {
        const lowcase = category.toLowerCase();
        const href = `termekek/${getRemovedAccents(lowcase)}`;
        return (
          <LinkItem
            key={category}
            href={href}
            currentPage={currentPage}
            css={{
              marginBottom:
                i + 1 < productCategories.length ? "24px" : "initial",
            }}
          >
            {category}
          </LinkItem>
        );
      })}
    </Box>
  );
};

type ProductsProps = {
  currentPage?: boolean;
};

const Products: FC<ProductsProps> = ({ children, currentPage }) => {
  const [show, setShow] = useState(false);
  const onMouseEnter = useCallback(() => {
    setShow(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <Box
      position="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      mr={12}
      _hover={{
        transform: "scale(1.02)",
      }}
    >
      {children}
      <ProductCategories show={show} currentPage={currentPage} />
    </Box>
  );
};

type NavItemProps = {
  href?: string;
};

const NavItem: FC<NavItemProps> = ({ children, href }) => {
  const { pathname } = useRouter();
  const currentPage = pathname.includes(href);
  // TODO: remove & check red active links on products
  console.log(href);
  console.log(pathname);

  if (children === "Karrier") {
    return (
      <Box
        color={currentPage ? "secondary.500" : "black"}
        cursor="pointer"
        mr={12}
        _hover={{
          transform: "scale(1.02)",
        }}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
          <OutsideIcon />
        </a>
      </Box>
    );
  }

  if (children === "Termékek") {
    return <Products currentPage={currentPage}>{children}</Products>;
  }

  return (
    <LinkItem currentPage={currentPage} href={href}>
      {children}
    </LinkItem>
  );
};

const Navlist: FC = () => {
  return (
    <Flex align="center">
      <NavItem href="/termekek">Termékek</NavItem>
      <NavItem href="/referenciak">Referenciák</NavItem>
      <NavItem href="https://www.profession.hu/allasok/dewa-zrt/1,0,0,0,0,0,0,0,0,0,38885">
        Karrier
      </NavItem>
      <NavItem href="/cikkek">Cikkek</NavItem>
      <NavItem href="/kapcsolat">Kapcsolat</NavItem>
      <BaseButton
        variant="primary"
        px={[3, 3, 3, 3]}
        py={[2, 2, 2, 2]}
        fontSize="normal"
        borderRadius="base"
      >
        Írjon Nekünk
      </BaseButton>
    </Flex>
  );
};

export default Navlist;
