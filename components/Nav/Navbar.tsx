import { FC, useRef } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

import { DewaIcon, DotsIcon } from "../icons";

import Navlist from "./Navlist";
import { headerMaxW, headerPX } from "./consts";
import { useContact } from "../../hooks";
import { Button } from "../uikit";

const Navbar: FC = () => {
  const { isOpen, onClose } = useContact();
  const initialRef = useRef();

  return (
    <Flex
      align="center"
      justify="space-between"
      m="auto"
      px={headerPX}
      py={4}
      maxW={headerMaxW}
      mb={[8, 8, 0]}
    >
      <Box cursor="pointer">
        <Link href="/">
          <a>
            <DewaIcon w={32} h={24} />
          </a>
        </Link>
      </Box>
      <Navlist />

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backgroundColor="backdrop" />
        <ModalContent
          backgroundColor="background"
          w={["90%", "inherit", "inherit", "inherit"]}
          borderRadius="2xl"
          overflow="hidden"
        >
          <ModalHeader
            textAlign="center"
            textTransform="uppercase"
            fontSize="2xl"
            mb={10}
            pl={0}
            pt={0}
          >
            <Flex
              width="50%"
              pl={5}
              pr={2}
              py={2}
              bg="primary.700"
              borderBottomRightRadius="3rem"
              justify="space-between"
              align="center"
            >
              <DewaIcon w={20} h={10} color="white" />
              <DotsIcon mr={2} mb={2} color="white" right={3} boxSize={14} />
            </Flex>
            <Text
              mt={8}
              fontWeight="semibold"
              textTransform="uppercase"
              fontSize="2xl"
            >
              Írjon Nekünk
            </Text>
          </ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody pb={6}>
            <FormControl isRequired id="name">
              <FormLabel>Név</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Név"
                backgroundColor="primary.100"
                py={6}
                fontSize="lg"
              />
            </FormControl>
            <FormControl isRequired mt={6} id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                backgroundColor="primary.100"
                py={6}
                fontSize="lg"
              />
            </FormControl>
            <FormControl isRequired mt={6} id="message">
              <FormLabel>Üzenet</FormLabel>
              <Textarea
                backgroundColor="primary.100"
                height={["150px", "150px", "2x", "2xs"]}
                resize="vertical"
                placeholder="Üzenet"
                fontSize="lg"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter pb={8}>
            <Button variant="primary" side="right">
              Küldés
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Navbar;
