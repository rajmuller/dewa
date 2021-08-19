import { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { DewaIcon } from "../icons";

import Navlist from "./Navlist";
import { headerMaxW, headerPX } from "./consts";

const Navbar: FC = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      m="auto"
      px={headerPX}
      py={4}
      maxW={headerMaxW}
    >
      <Box cursor="pointer">
        <Link href="/">
          <a>
            <DewaIcon w={20} h={10} />
          </a>
        </Link>
      </Box>
      <Navlist />
    </Flex>
  );
};

export default Navbar;
