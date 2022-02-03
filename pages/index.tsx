import { FC } from "react";
// import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  AspectRatio,
  Box,
  chakra,
  Flex,
  Heading,
  Text,
  Grid,
  ComponentWithAs,
  IconProps,
} from "@chakra-ui/react";

// import { ChevronLeftIcon } from "../components/icons";
import { Button } from "../components/uikit";
import { useContact } from "../hooks";
import {
  DotsIcon,
  FeluletIcon,
  FestofulkekIcon,
  GunIcon,
  StarIcon,
  SzorasIcon,
  TuzelesIcon,
} from "../components/icons";

type CardProps = {
  image: string;
  logo: string;
  description: string;
  location: string;
  date: string;
};

const AboutUs: FC = () => {
  return (
    <Flex mt={32} direction="column" justify="center" align="center">
      <Heading>Rólunk</Heading>
      <Flex mt={20} justify="center" align="center">
        <Text
          flex={1}
          maxW="420px"
          mr={40}
          fontWeight="600"
          fontSize="30px"
          color="primary.600"
        >
          Problemamegoldok, veteranok, szakemberek... Ezek vagyunk mi!
        </Text>
        <Text maxW="360px" flex={1} fontWeight={500} fontSize="20px">
          Egy gordulekenyen teljesito ceg, tobb mint 20 eves tapasztalattal a
          hata mogott varja, hogy megvalositsa barmekkora lelegzetvetelu
          projektet.
        </Text>
      </Flex>

      <Flex w="100%" overflow="hidden" pb={64}>
        <Flex
          mt={20}
          alignSelf="flex-start"
          position="relative"
          w={["100%", "95%"]}
          h={["280px", "700px"]}
          zIndex={5}
          maxW="100%"
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
              bg="primary.500"
              pt={2}
              w={32}
              pb={8}
            >
              <StarIcon boxSize={12} fill="grey.metal" />
              <Text fontSize={36} fontWeight={600} color="tertiary.300">
                25
              </Text>
              <Text fontWeight={500} fontSize={20}>
                év
              </Text>
            </Flex>

            <Flex
              direction="column"
              justify="center"
              align="center"
              borderBottomLeftRadius="30%"
              borderBottomRightRadius="30%"
              bg="primary.500"
              pt={2}
              w={32}
              pb={8}
            >
              <GunIcon boxSize={12} fill="grey.metal" />
              <Text fontSize={36} fontWeight={600} color="tertiary.300">
                4
              </Text>
              <Text fontWeight={500} fontSize={20}>
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
        <Heading fontSize={36} fontWeight={600}>
          Vizio
        </Heading>
        <Flex pb={[12, 20]} mt={[4, 20]} justify="center" align="center">
          <Text fontSize={18} maxW="420px" mr={32} lineHeight="200%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui
          </Text>
          <Flex direction="column">
            <Text fontSize={36} fontWeight={300} maxW="420px">
              War is God’s way of teaching Americans geography.
            </Text>
            <Text fontSize={14} mt={6} fontWeight={600}>
              – Ambrose Bierce
            </Text>
          </Flex>
        </Flex>
        <DotsIcon
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
    <Flex
      borderRadius={16}
      overflow="hidden"
      bg="primary.700"
      direction="column"
      w={420}
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
        <Text textAlign="justify" fontSize={18} lineHeight={1.5} mt={4} mb={10}>
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
  );
};

const References = () => {
  return (
    <Flex
      display={["none", "flex"]}
      mt={40}
      direction="column"
      justify="center"
      align="center"
    >
      <Heading>Referenciak</Heading>
      <Flex
        w="550px"
        h="480px"
        position="relative"
        mt={24}
        justify="center"
        align="center"
        direction="column"
        zIndex={10}
      >
        <Image layout="fill" objectFit="cover" src="/paint_spray.png" />
        <Flex
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
      <Flex
        transform="translateY(-250px)"
        borderBottomLeftRadius={100}
        position="relative"
        w="100%"
        h="800px"
        bg="primary.900"
      >
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
      </Flex>
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
      </a>
    </Link>
  );
};

const Products: FC = () => {
  return (
    <Flex justify="center" align="center" direction="column">
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
      <Box px={[4, 4, 16, 32]} overflow="hidden" maxW="1536px" margin="auto">
        <Flex w="100vw" h="80vh" overflow="hidden">
          <Flex flex={1} direction="column" h="100%" justify="center">
            <Heading fontSize={64}>
              Mi festjük a jö<chakra.span color="red.500">w</chakra.span>őt
            </Heading>
            <Text mt={4} mb={[12, 12, 32]}>
              Magyarország piacvezető festékipari megoldásai
            </Text>
            <Button onClick={onOpen} bg="primary.500" variant="primary">
              Írjon Nekünk
            </Button>
          </Flex>
          <Flex flex={3} h="100%" position="relative">
            <Image
              objectFit="contain"
              layout="fill"
              src="/hero.png"
              alt="Festekszoro kep"
            />
          </Flex>
        </Flex>
      </Box>
      <AboutUs />
      <References />
      <Products />
    </>
  );
};

export default Index;
