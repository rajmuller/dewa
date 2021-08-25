import React, { FC, useCallback, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  Flex,
  Heading,
  Select,
  SimpleGrid,
  Stack,
  Button,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "../../components/icons";
import { ProductType, ContentType } from "../../types";
import { getAllContents } from "../../util";
import Product from "../../components/Product";
import { useCurrentBreakpoint } from "../../hooks";

type ProductProps = {
  products: ProductType[];
  slug: ContentType;
};

const getDivisionName = (slug: ContentType) => {
  switch (slug) {
    case "feluletkezeles":
      return "Felületkezelés";
    case "fenyezofulkek":
      return "Fényezőfülkék";
    case "tuzelestechnika":
      return "Tüzeléstechnika";
    case "szorastechnika":
      return "Szórástechnika";
    default:
      return null;
  }
};

type SubCategoryProps = {
  currentSubcategory: string;
  value: string;
  onClick: (e: any) => void;
};

const SubCategory: FC<SubCategoryProps> = ({
  currentSubcategory,
  value,
  children,
  onClick,
}) => {
  return (
    <Button
      color={currentSubcategory === value ? "secondary.500" : "black"}
      py={4}
      value={value}
      justifyContent="flex-start"
      outline="none"
      border="none"
      variant="link"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const Products: FC<ProductProps> = ({ slug, products }) => {
  // console.log({ slug });
  // console.log({ products });
  const { isLgMinus } = useCurrentBreakpoint();

  const uniqueCategories: string[] = [];
  products.forEach(({ alkategoria }) => {
    if (!uniqueCategories.includes(alkategoria)) {
      uniqueCategories.push(alkategoria);
    }
  });

  const router = useRouter();
  const onOpen = useCallback(
    (slugString: string) => {
      router.push({
        pathname: `/termekek/${slug}[${slugString}]`,
        query: { slug, slugString },
      });
    },
    [router, slug]
  );

  const [currentSubcategory, setcurrentSubcategory] = useState("");
  const currentSubProducts = products.filter(
    (product) => product.alkategoria === currentSubcategory
  );
  const selectedProducts =
    currentSubcategory === "" ? products : currentSubProducts;

  const onSubcategoryChange = useCallback((e) => {
    console.log({ e });

    setcurrentSubcategory(e.target.value);
  }, []);

  if (router.isFallback || !products) {
    return <div>ERRORPAGE</div>;
  }

  return (
    <Flex direction="column">
      <Heading
        display="flex"
        alignItems="center"
        mt={[6, 8, 12, 16]}
        fontSize={["xl", "xl", "2xl", "2xl"]}
        mb={12}
        variant="title"
        fontWeight="medium"
      >
        {getDivisionName(slug)}
        <Flex ml={1} color="secondary.500">
          ({selectedProducts.length}){" "}
        </Flex>
      </Heading>
      <Stack
        mt={16}
        spacing={16}
        direction={["column", "column", "column", "row"]}
      >
        {isLgMinus ? (
          <Select
            h="48px"
            mb={3.5}
            bg="primary.100"
            icon={<ChevronDownIcon fontSize={12} fill="none" />}
            variant="filled"
            placeholder="Összes alkategória"
            onChange={onSubcategoryChange}
          >
            {uniqueCategories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </Select>
        ) : (
          <Stack>
            <SubCategory
              currentSubcategory={currentSubcategory}
              value=""
              onClick={onSubcategoryChange}
            >
              Összes alkategória
            </SubCategory>
            {uniqueCategories.map((category) => {
              return (
                <SubCategory
                  currentSubcategory={currentSubcategory}
                  value={category}
                  onClick={onSubcategoryChange}
                >
                  {category}
                </SubCategory>
              );
            })}
          </Stack>
        )}
        <SimpleGrid
          justify="center"
          columns={[1, 2, 2, 2]}
          spacing={[16, 12, 8, 12]}
        >
          {selectedProducts.map((product) => {
            return (
              <Product key={product.slug} product={product} onOpen={onOpen} />
            );
          })}
        </SimpleGrid>
      </Stack>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: {
  params: { slug: ContentType };
}) => {
  const products = getAllContents(slug, [
    "divizio",
    "boritokep",
    "alkategoria",
    "leiras",
    "nev",
    "slug",
  ]);

  return {
    props: {
      slug,
      products,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        slug: "feluletkezeles",
      },
    },
    {
      params: {
        slug: "fenyezofulkek",
      },
    },
    {
      params: {
        slug: "tuzelestechnika",
      },
    },
    {
      params: {
        slug: "szorastechnika",
      },
    },
  ];

  return {
    paths,
    fallback: false,
  };
};

export default Products;
