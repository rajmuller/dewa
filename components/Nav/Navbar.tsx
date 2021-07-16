import { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import Navlist from "./Navlist";
import { headerPX } from "./consts";

const Navbar: FC = () => {
  return (
    <Flex align="center" justify="space-between" px={headerPX} maxW="1536px">
      <Box cursor="pointer" h={10} w={20} position="relative">
        <Link href="/">
          <a>
            <Image
              src="/dewa.png"
              alt="Dewa Homepage"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
      </Box>
      <Navlist />
    </Flex>
  );
};

export default Navbar;
