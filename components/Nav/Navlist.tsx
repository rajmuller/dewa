import { FC, useState, useCallback } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { getRemovedAccents } from "../../util/removeAccents";
import BaseButton from "../uikit/Button/BaseButton";
import { OutsideIcon, ChevronDownIcon } from "../icons";

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
      pt={2}
      position="absolute"
      top={6}
      left={-4}
      borderBottomRadius="2xl"
      bg="background"
    >
      {productCategories.map((category, i) => {
        const lowcase = category.toLowerCase();
        const href = `termekek/${getRemovedAccents(lowcase)}`;
        return (
          <Box key={category}>
            <LinkItem
              href={href}
              currentPage={currentPage}
              css={{
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingLeft: "16px",
                paddingRight: "16px",
              }}
            >
              {category}
            </LinkItem>
            {i + 1 < productCategories.length && (
              <Box height={0.25} width="100%" backgroundColor="curtain.2" />
            )}
          </Box>
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
      mr={12}
      position="relative"
      zIndex={1}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <ChevronDownIcon ml={1} fill="none" width={3} />
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
  console.log({ href });
  console.log({ pathname });

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
