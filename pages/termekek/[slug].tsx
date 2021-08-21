import React, { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { Flex, Heading, Select, SimpleGrid, Text } from "@chakra-ui/react";

import { GetStaticPaths, GetStaticProps } from "next";
import { ChevronDownIcon } from "../../components/icons";
import { ProductType, ContentType } from "../../types";
import { getAllContents } from "../../util";

type ProductProps = {
  products: ProductType[];
  slug: string;
};

const Feluletkezeles: FC<ProductProps> = ({ slug, products }) => {
  console.log({ slug });
  console.log({ products });

  const {
    nev,
    divizio,
    boritokep,
    alkategoria,
    slug: slugProduct,
    leiras,
  } = products[0];
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

  if (router.isFallback || !products) {
    return <div>ERRORPAGE</div>;
  }

  return (
    <Flex px={4} direction="column">
      <Heading>
        {slug} ({products.length})
      </Heading>
      {/* <Text>{products.}</Text> */}
      <Select
        icon={<ChevronDownIcon />}
        variant="filled"
        placeholder="Válassz alkategóriát..."
      />
      {/* <SimpleGrid
        mt={16}
        justify="center"
        columns={[1, 2, 2, 3]}
        spacing={[16, 16, 16, 20]}
      >
        {products.map((product) => {
          return (
            <Product key={product.slug} product={product} onOpen={onOpen} />
          );
        })}
      </SimpleGrid> */}
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

export default Feluletkezeles;
