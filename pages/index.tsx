import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  AspectRatio,
  chakra,
  Flex,
  Heading,
  Text,
  Grid,
  ComponentWithAs,
  IconProps,
} from "@chakra-ui/react";

import { Button } from "../components/uikit";
import { useContact, useCurrentBreakpoint } from "../hooks";
import {
  DotsIcon,
  FeluletIcon,
  FestofulkekIcon,
  GunIcon,
  StarIcon,
  SzorasIcon,
  TuzelesIcon,
} from "../components/icons";
import Perspective from "../components/Perspective";

type CardProps = {
  image: string;
  logo: string;
  description: string;
  location: string;
  date: string;
};

const AboutUs: FC = () => {
  return (
    <Flex
      textAlign={["center", "center", "inherit"]}
      w="100%"
      pt={8}
      mt={[0, 0, 24]}
      direction="column"
      justify="center"
      align="center"
      borderTopRightRadius={32}
      boxShadow={[
        "12px -9px 23px -1px rgba(0,0,0,0.1);",
        "12px -9px 23px -1px rgba(0,0,0,0.1);",
        "none",
      ]}
      position="relative"
    >
      <DotsIcon
        color={["black", "black", "transparent"]}
        position="absolute"
        boxSize={20}
        transform="rotate(-90deg)"
        right={4}
        top={4}
      />
      <Heading>Rólunk</Heading>
      <Flex
        mt={[6, 6, 20]}
        justify="center"
        align="center"
        direction={["column", "column", "row"]}
      >
        <Text
          flex={1}
          maxW="420px"
          mr={[0, 0, 40]}
          fontWeight="600"
          fontSize={[20, 20, 30]}
          color="primary.600"
          px={[12, 12, 0]}
          mb={[8, 8, 0]}
        >
          Problemamegoldok, veteranok, szakemberek... <br /> Ezek vagyunk mi!
        </Text>
        <Text maxW="360px" flex={1} fontWeight={500} fontSize="20px">
          Egy gordulekenyen teljesito ceg, tobb mint 20 eves tapasztalattal a
          hata mogott varja, hogy megvalositsa barmekkora lelegzetvetelu
          projektet.
        </Text>
      </Flex>

      <Flex w="100%" overflow="hidden" pb={[0, 0, 64]}>
        <Flex
          mt={[12, 12, 20]}
          alignSelf="flex-start"
          position="relative"
          w={["100%", "100%", "95%"]}
          h={["280px", "280px", "700px"]}
          zIndex={5}
          maxW="100%"
          borderTopLeftRadius={[32, 32, 0]}
        >
          <Image src="/graff.jpeg" layout="fill" objectFit="cover" />
          <Flex
            position="absolute"
            bottom={0}
            right={["50%", 0]}
            transform="translate(0, 100%)"
            color="white"
          >
            <Flex
              mr={20}
              direction="column"
              justify="center"
              align="center"
              borderBottomLeftRadius="30%"
              borderBottomRightRadius="30%"
              bg="primary.800"
              pt={2}
              w={32}
              pb={8}
            >
              <StarIcon boxSize={12} fill="tertiary.500" />
              <Text
                lineHeight={1.5}
                fontSize={36}
                fontWeight={600}
                color="white"
              >
                25
              </Text>
              <Text lineHeight={1} fontWeight={500} fontSize={20}>
                év
              </Text>
            </Flex>

            <Flex
              direction="column"
              justify="center"
              align="center"
              borderBottomLeftRadius="30%"
              borderBottomRightRadius="30%"
              bg="primary.800"
              pt={2}
              w={32}
              pb={8}
            >
              <GunIcon boxSize={12} fill="tertiary.500" />
              <Text
                lineHeight={1.5}
                fontSize={36}
                fontWeight={600}
                color="white"
              >
                4
              </Text>
              <Text lineHeight={1} fontWeight={500} fontSize={20}>
                divizio
              </Text>
            </Flex>
          </Flex>
          <Flex
            position="absolute"
            left={0}
            bottom={-64}
            h="420px"
            zIndex={-1}
            bg="primary.600"
            w="100vw"
          />
        </Flex>
      </Flex>
      <Flex
        direction="column"
        color="white"
        align="center"
        justify="center"
        bg="primary.600"
        w="100%"
        borderBottomRightRadius={100}
        position="relative"
      >
        <Heading mt={[8, 8, 0]} fontSize={[24, 24, 36]} fontWeight={600}>
          Vizio
        </Heading>
        <Flex
          pb={[12, 20]}
          mt={[4, 4, 20]}
          direction={["column", "column", "row"]}
          justify="center"
          align="center"
        >
          <Text
            fontSize={[14, 14, 18]}
            maxW="420px"
            mb={[8, 8, 0]}
            mr={[0, 0, 32]}
            lineHeight="200%"
            px={[8, 8, 0]}
            textAlign={["justify", "justify", "inherit"]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui
          </Text>
          <Flex direction="column">
            <Text fontSize={[24, 24, 36]} fontWeight={300} maxW="420px">
              War is God’s way of teaching Americans geography.
            </Text>
            <Text fontSize={14} mt={6} fontWeight={600}>
              – Ambrose Bierce
            </Text>
          </Flex>
        </Flex>
        <DotsIcon
          color="white"
          position="absolute"
          boxSize={[24, 40]}
          right={10}
          bottom={10}
        />
      </Flex>
    </Flex>
  );
};

const Card: FC<CardProps> = ({ image, logo, description, location, date }) => {
  return (
    <Link href="/referenciak">
      <a>
        <Perspective>
          <Flex
            borderRadius={16}
            // w="100%"
            overflow="hidden"
            bg="primary.700"
            direction="column"
            w={[320, 320, 320, 420]}
            color="#ccc"
          >
            <AspectRatio w="100%" ratio={16 / 9} position="relative">
              <Image src={image} layout="fill" objectFit="cover" />
            </AspectRatio>
            <Flex
              pt={6}
              px={10}
              pb={10}
              justify="center"
              align="center"
              direction="column"
            >
              <Flex w="100%" h={16} position="relative">
                <Image layout="fill" objectFit="contain" src={logo} />
              </Flex>
              <Text
                textAlign="justify"
                fontSize={18}
                lineHeight={1.5}
                mt={4}
                mb={10}
              >
                {description}
              </Text>
              <Flex w="100%" justify="space-between">
                <chakra.span fontSize={20} fontWeight="500">
                  {location}
                </chakra.span>
                <chakra.span fontWeight="300" fontSize={20}>
                  {date}
                </chakra.span>
              </Flex>
            </Flex>
          </Flex>
        </Perspective>
      </a>
    </Link>
  );
};

const CTA = () => {
  const { isMdMinus } = useCurrentBreakpoint();
  const router = useRouter();

  return (
    <Flex
      transform="translateY(-250px)"
      borderBottomLeftRadius={100}
      position="relative"
      w="100%"
      h={[450, 450, "800px"]}
      bg="primary.900"
      direction="column"
      // TODO: !!
      justify="flex-end"
      align="center"
    >
      {isMdMinus ? (
        <Button
          bg="tertiary.300"
          variant="tertiary"
          color="black"
          transform="translateY(-50%)"
          side="right"
          onClick={() => router.push("/referenciak")}
        >
          Referenciák
        </Button>
      ) : (
        <Grid
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -15%)"
          gap={20}
          gridTemplateColumns="1fr 1fr"
        >
          <Card
            logo="/blizzard.png"
            image="/uploads/medence_fujas.jpg"
            date="2021.03.15"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim..."
            location="Gyor"
          />
          <Card
            logo="/blizzard.png"
            image="/uploads/medence_fujas.jpg"
            date="2021.03.15"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim..."
            location="Gyor"
          />
        </Grid>
      )}
      <DotsIcon
        color="white"
        position="absolute"
        zIndex={10}
        boxSize={[24, 40]}
        left={10}
        bottom={10}
        transform="rotate(90deg)"
      />
    </Flex>
  );
};

const References = () => {
  return (
    <Flex mt={40} direction="column" justify="center" align="center">
      <Heading>Referenciak</Heading>
      <Flex
        w={["auto", "auto", "550px"]}
        h="480px"
        position="relative"
        mt={[8, 8, 24]}
        justify="center"
        align="center"
        direction="column"
        zIndex={10}
      >
        <Image layout="fill" objectFit="cover" src="/paint_spray.png" />
        <Flex
          display={["none", "none", "flex"]}
          position="absolute"
          top={0}
          left={0}
          transform="translate(-80%, -40%)"
        >
          <Flex position="relative" w={60} h={60}>
            {/* TODO: original high q pic */}
            <Image layout="fill" objectFit="cover" src="/robot.png" />
          </Flex>
        </Flex>
        <Flex
          display={["none", "none", "flex"]}
          position="absolute"
          top={0}
          right={0}
          transform="translate(80%, -40%) scaleX(-1)"
        >
          <Flex position="relative" w={60} h={60}>
            <Image layout="fill" objectFit="cover" src="/robot.png" />
          </Flex>
        </Flex>
        <Heading
          fontWeight={700}
          fontSize={64}
          color="tertiary.500"
          zIndex={1}
          mb={4}
        >
          2500+
        </Heading>
        <Text
          fontWeight={600}
          fontSize={24}
          color="white"
          textAlign="center"
          maxW="50%"
          zIndex={1}
        >
          ugyfelnek tettuk szinesebbe a vallalkozasat!
        </Text>
      </Flex>

      <CTA />
    </Flex>
  );
};

type DivisionProps = {
  Logo: ComponentWithAs<"svg", IconProps>;
  name: string;
  href: string;
};

const Division: FC<DivisionProps> = ({ Logo, name, href }) => {
  return (
    <Link href={href}>
      <a>
        <Perspective>
          <Flex
            align="center"
            direction="column"
            p={8}
            shadow="smallCard"
            borderRadius={32}
          >
            <Logo boxSize={250} />
            <Text fontSize={24} fontWeight={600} mt={6}>
              {name}
            </Text>
          </Flex>
        </Perspective>
      </a>
    </Link>
  );
};

const Products: FC = () => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      py={12}
      bg="primary.50"
    >
      <Flex direction="column">
        <Flex direction="column" align="center" mb={12}>
          <Heading mb={2}>Termékek</Heading>
          <Text textAlign="center" fontSize={18}>
            Bongessze termekeink <br />{" "}
            <chakra.span color="secondary.500">diviziok </chakra.span>szerint
          </Text>
        </Flex>
        <Grid
          gap={4}
          gridTemplateColumns={[
            "1fr",
            "1fr",
            "1fr",
            "1fr 1fr",
            "repeat(4, 1fr)",
          ]}
        >
          <Division
            href="/termekek/fenyezofulkek"
            name="Fényezofülkék"
            Logo={FestofulkekIcon}
          />
          <Division
            href="/termekek/szorastechnika"
            name="Szórástechnika"
            Logo={SzorasIcon}
          />
          <Division
            href="/termekek/tuzelestechnika"
            name="Tüzeléstechnika"
            Logo={TuzelesIcon}
          />
          <Division
            href="/termekek/feluletkezeles"
            name="Felületkezelés"
            Logo={FeluletIcon}
          />
        </Grid>
      </Flex>
    </Flex>
  );
};

const Index: FC = () => {
  // const router = useRouter();
  const { onOpen } = useContact();

  return (
    <>
      <Flex
        pl={[4, 4, 16, 32]}
        pr={[4, 4, 0]}
        direction={["column", "column", "row"]}
        w="100%"
        h={["auto", "auto", "80vh"]}
        overflow="hidden"
        pb={[32, 32, 0]}
      >
        <Flex
          flex={2}
          direction="column"
          h="100%"
          justify="center"
          textAlign={["center", "center", "left"]}
        >
          <Heading fontSize={[48, 48, 64]}>
            Mi festjük a jö<chakra.span color="red.500">w</chakra.span>őt
          </Heading>
          <Text mt={4} px={[8, 8, 0]} fontSize={[14, 14, 16]} mb={[12, 12, 32]}>
            Magyarország piacvezető festékipari megoldásai
          </Text>
          <Button
            side="right"
            onClick={onOpen}
            bg="primary.500"
            variant="primary"
          >
            Írjon Nekünk
          </Button>
        </Flex>

        <Flex
          display={["none", "none", "flex"]}
          zIndex={-1}
          flex={5}
          transform={["scale(1.0)", "scale(1.0)", "scale(1.3)", "scale(1.0)"]}
          h="100%"
          position="relative"
        >
          <Image
            objectFit="contain"
            layout="fill"
            src="/hero.png"
            alt="Festekszoro kep"
          />
        </Flex>
      </Flex>

      <AboutUs />
      <References />
      <Products />
    </>
  );
};

export default Index;
