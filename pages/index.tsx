import { FC, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import { Button } from "../components/uikit";
import { useContact } from "../hooks";
import {
  FeluletIcon,
  FestofulkekIcon,
  PaintGunIcon,
  SzorasIcon,
  TuzelesIcon,
} from "../components/icons";
import MotionWrapper from "../components/MotionWrapper";

const AboutUs: FC = () => {
  return (
    <MotionWrapper>
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
                  <PaintGunIcon className="w-6 h-6" />
                </div>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Problémamegoldók, úttörők, szakemberek... Ezek vagyunk mi!
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              <span className="block mb-4">
                Személyre szabottan biztosítani a festőipar minden szereplőjének
                a legjobb, leginnovatívabb technológia megoldást.
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
    </MotionWrapper>
  );
};

const divisions = [
  {
    href: "/termekek/fenyezofulkek",
    name: "Fényezőfülkék",
    Logo: FestofulkekIcon,
    description:
      "When you walked through the door. It was clear to me (Clear to me). You’re the one they adore. Who they came to see (Who they came to see). You’re a rock star (Baby). Everybody wants you (Everybody wants you). Player, who can really blame you? (Who can really blame you?). We’re the ones who made you.",
  },
  {
    href: "/termekek/szorastechnika",
    name: "Szórástechnika",
    Logo: SzorasIcon,
    description:
      "We're gonna rock this house until we knock it down. So turn the volume loud. 'Cause it's mayhem 'til the A.M.. So, baby, make just like K-Fed. And let yourself go, let yourself go. Say before we kick the bucket. Life's too short to not go for broke. So everybody, everybody, go berserk, grab your vial, yeah.",
  },
  {
    href: "/termekek/tuzelestechnika",
    name: "Tüzeléstechnika",
    Logo: TuzelesIcon,
    description:
      "Mom, I know I let you down. And though you say the days are happy. Why is the power off and I'm fucked up?. And, Mom, I know he's not around. But don't you place the blame on me. As you pour yourself another drink, yeah. I guess we are who we are. Headlights shining in the dark night, I drive on. Maybe we took this too far.",
  },
  {
    href: "/termekek/feluletkezeles",
    name: "Felületkezelés",
    Logo: FeluletIcon,
    description:
      "I never meant to give you mushrooms, girl. I never meant to bring you to my world. Now you sitting in the corner crying. And now it's my fault, my fault. I never meant to give you mushrooms, girl. I never meant to bring you to my world. Now you sitting in the corner crying. And now it's my fault, my fault.",
  },
];

const Products = () => {
  return (
    <MotionWrapper>
      <div className="bg-background">
        <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                  We built our business on great customer service
                </h2>
                <p className="mt-4 text-gray-500">
                  I am beginning to feel like a Rap God, Rap God. All my people
                  from the front to the back nod, back nod. The way I am racing
                  around the track, call me NASCAR, NASCAR. Dale Earnhardt of
                  the trailer park, the White Trash God. Kneel before General
                  Zod. This planet Krypton – no, Asgard, Asgard.
                </p>
              </div>
              <div className="aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618275340450-a684fa3d7743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                  className="object-center object-cover"
                />
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 lg:grid-cols-4">
              {divisions.map((division) => (
                <Link key={division.name} href={division.href}>
                  <a>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="sm:flex hover:shadow-md rounded-md p-4 lg:block"
                    >
                      <div className="sm:flex-shrink-0">
                        <division.Logo boxSize={32} />
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                        <h3 className="text-md font-medium text-gray-900">
                          {division.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          {division.description}
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
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
          <Image layout="fill" objectFit="cover" src="/robot.png" />
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
  const { onOpen } = useContact();

  const titleRevealControls = useAnimationControls();
  const titleMoveControls = useAnimationControls();
  const subTitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  const sequence = useCallback(async () => {
    await titleRevealControls.start({ height: 0 });

    await titleMoveControls.start({
      x: 0,
    });

    if (ctaRef.current) {
      ctaRef.current.classList.add("clip-from-left");
    }

    if (subTitleRef.current) {
      subTitleRef.current.classList.add("clip-from-bottom");
    }

    if (bgImageRef.current) {
      bgImageRef.current.classList.add("clip-from-right");
    }
  }, [titleMoveControls, titleRevealControls]);

  useEffect(() => {
    sequence();
  }, [sequence]);

  return (
    <div className="relative">
      <div>
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
                  <motion.h1
                    className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl"
                    initial={{
                      x: "50%",
                    }}
                    animate={titleMoveControls}
                    transition={{
                      type: "spring",
                      duration: 0.4,
                    }}
                  >
                    <div className="w-full h-full relative">
                      <motion.div
                        transition={{ duration: 0.6 }}
                        initial={{
                          height: "110%",
                        }}
                        animate={titleRevealControls}
                        className="absolute w-full right-0 top-0 z-10 bg-background"
                      />
                      <span className="block xl:inline">
                        Mi festjük a jö
                        <span className="text-secondary-500">w</span>
                        őt
                      </span>
                    </div>
                  </motion.h1>
                  <h3
                    ref={subTitleRef}
                    className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                    style={{
                      clipPath:
                        "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    }}
                  >
                    Magyarország piacvezető festékipari megoldásai Magyarország
                    piacvezető festékipari megoldásai Magyarország piacvezető
                    festékipari megoldásai Magyarország piacvezető festékipari
                    megoldásai
                  </h3>
                  <div
                    ref={ctaRef}
                    className="mt-5 sm:mt-8 sm:flex gap-4 sm:justify-center lg:justify-start"
                    style={{
                      clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)",
                    }}
                  >
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
          <div
            ref={bgImageRef}
            className="lg:absolute z-2 lg:inset-y-0 lg:right-0 lg:w-1/2"
            style={{
              clipPath: "polygon(100% 100%, 100% 0, 100% 0, 100% 100%)",
            }}
          >
            <div className="h-56 relative z-2 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full">
              <Image
                layout="fill"
                objectFit="cover"
                className="z-2"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="hero image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index: FC = () => {
  return (
    <>
      <Hero />

      <Divider />

      <AboutUs />

      <Divider />

      <Products />
    </>
  );
};

export default Index;
