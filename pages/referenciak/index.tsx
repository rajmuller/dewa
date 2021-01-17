import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { Grid, Heading } from "@chakra-ui/react";

import { getAllContents } from "../../util";
import { PostType } from "../../types/postTypes";

import Reference from "../../components/Reference";
import Gallery from "../../components/Gallery";

type PostProps = {
  references: PostType[];
};

const Cikkek: FC<PostProps> = ({ references }) => {
  const router = useRouter();
  const onOpen = useCallback(
    (slug: string) => {
      router.push({
        pathname: "/referenciak/[slug]",
        query: { slug },
      });
    },
    [router]
  );

  if (router.isFallback || !references) {
    return <div>ERRORPAGE</div>;
  }

  const hallOfFames = references.filter((reference) => reference.content);
  const galleries = references.filter((reference) => !reference.content);

  return (
    <>
      <Heading textAlign="center">Büszkeségfal</Heading>
      <Grid
        mt={16}
        justifyContent="center"
        gridTemplateColumns={[
          "1fr",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 536px)",
        ]}
        columnGap={[16, 16, 16, 8]}
        rowGap={[16, 16, 16, 20]}
      >
        {hallOfFames.map((hallOfFame) => {
          return <Reference post={hallOfFame} onOpen={onOpen} />;
        })}
      </Grid>

      <Heading textAlign="center" my={16}>
        Galériák
      </Heading>
      <Grid
        justify="space-between"
        gridTemplateColumns={[
          "1fr",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={[16, 16, 16, 20]}
      >
        {galleries.map((gallery) => {
          return <Gallery post={gallery} onOpen={onOpen} />;
        })}
      </Grid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const references = getAllContents("references", [
    "title",
    "excerpt",
    "coverImage",
    "content",
    "gallery",
    "date",
    "companyName",
    "seo",
    "slug",
  ]);

  return {
    props: {
      references,
    },
  };
};

export default Cikkek;
