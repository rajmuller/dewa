import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/outline";
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
  PaintGunIcon,
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
    <div className="relative bg-white">
      <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-300 text-white">
              <div className="h-6 w-6 relative">
                {/* <UsersIcon className="h-6 w-6" aria-hidden="true" /> */}
                <PaintGunIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Problémamegoldók, úttörők, szakemberek... Ezek vagyunk mi!
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            <span className="block mb-4">
              Személyre szabottan biztosítani a festőipar minden szereplőjének a
              legjobb, leginnovatívabb technológia megoldást.
            </span>
            Egy biztonságos, kreatív és inspiráló teret létrehozni
            dolgozóinknak, ahol professzionalitás és barátságos közvetlenség
            egyaránt létezik.
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 capitalize text-base font-medium text-gray-500">
                  év Tapasztalat
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-primary-500 sm:text-3xl">
                  30+
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Divízió
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-primary-500 sm:text-3xl">
                  4
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Sikeres Projekt
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-primary-500 sm:text-3xl">
                  2500+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
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
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Termékek
          </h1>
          <Text textAlign="center" fontSize={22}>
            Böngésszen
            <br /> <chakra.span color="secondary.500">divízió </chakra.span>
            szerint
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

const Divider = () => {
  return (
    <div className="relative my-16 lg:my-32">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className=" flex justify-center">
        <span className="bg-background -scale-x-100 relative h-24 w-24 lg:w-32 lg:h-32 px-2 text-gray-500">
          {/* TODO: original high q pic */}
          <Image layout="fill" objectFit="cover" src="/robot.png" />
        </span>
      </div>
    </div>
  );
};

const Index: FC = () => {
  // const router = useRouter();
  const { onOpen } = useContact();

  return (
    <>
      <div className="relative bg-transparent overflow-hidden">
        <div className="wrapper mx-auto">
          <div className="relative z-10 h-full bg-background lg:max-w-2xl lg:w-full">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="mx-auto h-full max-w-7xl py-4 sm:py-12 lg:py-16 xl:py-32">
              <div className="sm:text-center h-full lg:text-left flex flex-col gap-12 justify-center">
                <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
                  <span className="block xl:inline">
                    Mi festjük a jö<span className="text-secondary-500">w</span>
                    őt
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Magyarország piacvezető festékipari megoldásai Magyarország
                  piacvezető festékipari megoldásai Magyarország piacvezető
                  festékipari megoldásai Magyarország piacvezető festékipari
                  megoldásai
                </p>
                <div className="mt-5 sm:mt-8 sm:flex gap-4 sm:justify-center lg:justify-start">
                  <Button
                    w={["full", "auto", "auto"]}
                    side="right"
                    onClick={onOpen}
                    bg="primary.500"
                    variant="primary"
                    mb={4}
                  >
                    Írjon Nekünk
                  </Button>
                  <Link href="/kapcsolat">
                    <a>
                      <Button
                        side="right"
                        w="100%"
                        borderWidth={1}
                        borderColor="primary.500"
                        backgroundColor="transparent"
                        color="primary.500"
                        _hover={{
                          backgroundColor: "gray.200",
                        }}
                      >
                        Kapcsolat
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 relative w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full">
            <Image
              layout="fill"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="hero image"
            />
          </div>
        </div>
      </div>

      <Divider />

      <AboutUs />

      <Divider />

      <Products />
    </>
  );
};

export default Index;
