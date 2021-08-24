import React, { FC, useCallback, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Flex, Heading, Select, SimpleGrid, Text } from "@chakra-ui/react";

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

const Products: FC<ProductProps> = ({ slug, products }) => {
  // console.log({ slug });
  // console.log({ products });
  const { isMdMinus } = useCurrentBreakpoint();

  const alkategoriak = products.map(({ alkategoria }) => {
    const uniqueCatgories: string[] = [];
    if (!uniqueCatgories.includes(alkategoria)) {
      uniqueCatgories.push(alkategoria);
    }
    return alkategoria;
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
    setcurrentSubcategory(e.target.value);
  }, []);

  if (router.isFallback || !products) {
    return <div>ERRORPAGE</div>;
  }

  return (
    <Flex direction="column">
      <Heading mt={4} mb={12} variant="title" fontWeight="medium">
        {getDivisionName(slug)} ({products.length})
      </Heading>
      {isMdMinus ? (
        <Select
          h="48px"
          mb={3.5}
          bg="primary.100"
          icon={<ChevronDownIcon fontSize={12} fill="none" />}
          variant="filled"
          placeholder="Összes alkategória"
          onChange={onSubcategoryChange}
        >
          {alkategoriak.map((alkategoria) => {
            return <option value={alkategoria}>{alkategoria}</option>;
          })}
        </Select>
      ) : (
        <Flex>asd</Flex>
      )}
      <SimpleGrid
        mt={16}
        justify="center"
        columns={[1, 2, 2, 2]}
        spacing={[16, 12, 16, 20]}
      >
        {selectedProducts.map((product) => {
          return (
            <Product key={product.slug} product={product} onOpen={onOpen} />
          );
        })}
      </SimpleGrid>
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
