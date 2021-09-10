import { FC } from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { DotsIcon } from "../icons";
import { Button } from "../uikit";

type HeadquarterProps = {
  name: string;
  address: string;
  mobile: string;
  email: string;
};

const Headquarter: FC<HeadquarterProps> = ({
  name,
  address,
  mobile,
  email,
}) => {
  return (
    <Stack align="center">
      <Stack spacing={2} direction={["column", "column", "row"]}>
        <Text fontSize="xl">{name}</Text>
      </Stack>
      <Stack
        spacing={2}
        align="center"
        fontSize="sm"
        direction={["column", "column", "row"]}
      >
        {/* <MapIcon/> */}
        <Flex>MAP</Flex>
        <Text fontSize="sm">{address}</Text>
      </Stack>
      <Stack
        spacing={2}
        align="center"
        fontSize="sm"
        direction={["column", "column", "row"]}
      >
        {/* <MapIcon/> */}
        <Flex>MOB</Flex>
        <Text fontSize="sm">{mobile}</Text>
      </Stack>
      <Stack
        spacing={2}
        align="center"
        fontSize="sm"
        direction={["column", "column", "row"]}
      >
        {/* <MapIcon/> */}
        <Flex>EMA</Flex>
        <Text fontSize="sm">{email}</Text>
      </Stack>
    </Stack>
  );
};

const Footer: FC = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      borderTopRightRadius="40px"
      bg="footer"
      position="relative"
      px={[null, null, 60]}
      color="white"
    >
      <DotsIcon
        pos="absolute"
        transform="rotate(-90deg)"
        color="white"
        top={[4, 4, 8]}
        right={[4, 4, 8]}
        boxSize={[14, 14, 28]}
      />

      <Stack
        direction={["column", "column", "row"]}
        align="center"
        justify="center"
        py={[10, 10, 16]}
        spacing={[8, 8, 16]}
        position="relative"
      >
        <Heading textAlign="center" px={4} color="white" variant="title">
          Felkeltettük Érdeklődését ?
        </Heading>
        <Button variant="tertiary">Írjon Nekünk</Button>
      </Stack>

      <Stack
        direction={["column", "column", "row"]}
        align="center"
        justify="center"
        py={[10, 10, 16]}
        spacing={[8, 8, 16]}
        position="relative"
      >
        <Headquarter
          name="Budaörsi Központ"
          address="2040 Budaörs, Gyár u. 2. (Budaörsi Ipari Park)"
          mobile="+36 23 889 770"
          email="dewa@dewa.hu"
        />
        <Headquarter
          name="Békéscsabai Központ"
          address="5600 Békéscsaba Gyulai út (Lukoil-al szemben) "
          mobile="+36 66 546 500"
          email="dewabcs@dewa.hu"
        />
      </Stack>
    </Flex>
  );
};

export default Footer;
