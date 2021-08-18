import { FC, useState, useCallback } from "react";
import {
  Box,
  useDisclosure,
  Link as ChakraLink,
  IconButton,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { getRemovedAccents } from "../../util/removeAccents";
import { useBreakpoints } from "../../hooks";
import BaseButton from "../uikit/Button/BaseButton";
import {
  ChevronDownIcon,
  OutsideIcon,
  HamburgerIcon,
  CloseIcon,
} from "../icons";

import { headerPX } from "./consts";

type LinkItemProps = {
  currentPage?: boolean;
  href: string;
  css?: any;
};

const LinkItem: FC<LinkItemProps> = ({ children, currentPage, href, css }) => {
  return (
    <NextLink href={href} passHref>
      <a>
        <Box
          color={
            currentPage ? "secondary.500" : ["white", "white", "white", "black"]
          }
          cursor="pointer"
          _hover={{
            transform: "scale(1.02)",
          }}
          {...css}
        >
          {children}
        </Box>
      </a>
    </NextLink>
  );
};

const productCategories = [
  "Felületkezelés",
  "Festőfülkék",
  "Tüzeléstechnika",
  "Szórástechnika",
];

type ProductCategoriesProps = {
  currentPage?: boolean;
  show: boolean;
};

const ProductCategories: FC<ProductCategoriesProps> = ({
  show,
  currentPage,
}) => {
  const { lg } = useBreakpoints();

  if (!show) {
    return null;
  }

  if (lg) {
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
  }

  return (
    <Stack alignItems="flex-end" mt={6}>
      {productCategories.map((category, i) => {
        const lowcase = category.toLowerCase();
        const href = `termekek/${getRemovedAccents(lowcase)}`;
        return (
          <LinkItem
            key={category}
            href={href}
            currentPage={currentPage}
            css={{
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingLeft: "16px",
              fontSize: "lg",
            }}
          >
            {category}
          </LinkItem>
        );
      })}
    </Stack>
  );
};

type ProductsProps = {
  currentPage?: boolean;
};

const Products: FC<ProductsProps> = ({ children, currentPage }) => {
  const { lg } = useBreakpoints();
  const [show, setShow] = useState(false);
  const onOpen = useCallback(() => {
    setShow(true);
  }, []);
  const onClose = useCallback(() => {
    setShow(false);
  }, []);

  const toggleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <Flex
      direction="column"
      position="relative"
      zIndex={1}
      onClick={!lg ? toggleShow : null}
      onMouseEnter={lg ? onOpen : null}
      onMouseLeave={lg ? onClose : null}
    >
      <Flex align="center" justify="flex-end">
        {children}
        <ChevronDownIcon
          ml={3}
          transform={show ? "rotate(180deg)" : "none"}
          transitionDuration="0.2s"
          fill="none"
          width={3}
        />
      </Flex>
      <ProductCategories show={show} currentPage={currentPage} />
    </Flex>
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
      <ChakraLink
        isExternal
        href={href}
        color={
          currentPage ? "secondary.500" : ["white", "white", "white", "black"]
        }
        cursor="pointer"
        _hover={{
          transform: "scale(1.02)",
        }}
      >
        {children}
        <OutsideIcon />
      </ChakraLink>
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        alignSelf="flex-end"
        bg="transparent !important"
        aria-label="Menu"
        onClick={onOpen}
        icon={<HamburgerIcon w="36px" h="21px" />}
      />
      <Drawer size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay background="backdrop" />
        <DrawerContent borderLeftRadius="xl" bg="primary.700" color="white">
          <DrawerHeader d="flex" justifyContent="flex-end" px={headerPX}>
            <IconButton
              alignSelf="flex-end"
              bg="transparent !important"
              aria-label="Menu"
              onClick={onClose}
              icon={<CloseIcon boxSize="21px" />}
            />
          </DrawerHeader>
          <DrawerBody fontSize="2xl" px={12}>
            <Stack spacing={12} align="flex-end" pt={8} direction="column">
              <NavItem href="/termekek">Termékek</NavItem>
              <NavItem href="/referenciak">Referenciák</NavItem>
              <NavItem href="https://www.profession.hu/allasok/dewa-zrt/1,0,0,0,0,0,0,0,0,0,38885">
                Karrier
              </NavItem>
              <NavItem href="/cikkek">Cikkek</NavItem>
              <NavItem href="/kapcsolat">Kapcsolat</NavItem>
              <BaseButton
                variant="primary"
                width="100%"
                py={[3, 3, 3, 2]}
                fontSize="normal"
                borderRadius="md"
                mb={[12, 12, 12, 0]}
              >
                Írjon Nekünk
              </BaseButton>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navlist;
