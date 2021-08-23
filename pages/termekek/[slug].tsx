import React, { FC, useCallback, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Flex, Heading, Select, SimpleGrid, Text } from "@chakra-ui/react";

import { ChevronDownIcon } from "../../components/icons";
import { ProductType, ContentType } from "../../types";
import { getAllContents } from "../../util";
import Product from "../../components/Product";

type ProductProps = {
  products: ProductType[];
  slug: string;
};

const Products: FC<ProductProps> = ({ slug, products }) => {
  console.log({ slug });
  console.log({ products });

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
    <Flex direction="column" overflow="hidden">
      <Heading>
        {slug} ({products.length})
      </Heading>
      <Select
        onChange={onSubcategoryChange}
        bg="primary.100"
        icon={<ChevronDownIcon fill="none" />}
        variant="filled"
        placeholder="Összes alkategória"
      >
        {alkategoriak.map((alkategoria) => {
          return <option value={alkategoria}>{alkategoria}</option>;
        })}
      </Select>
      <SimpleGrid
        mt={16}
        justify="center"
        columns={[2, 2, 2, 3]}
        spacing={[16, 16, 16, 20]}
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
