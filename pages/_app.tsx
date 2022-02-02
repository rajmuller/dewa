import type { AppProps } from "next/app";
import { Box, ChakraProvider, useDisclosure } from "@chakra-ui/react";

import { useHydrate, StoreProvider } from "../store";
import theme from "../components/theme";
import Navbar from "../components/Nav/Navbar";
import { ContactContext } from "../hooks/useContact";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useHydrate(pageProps.initialZustandState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        <ContactContext.Provider value={{ isOpen, onClose, onOpen }}>
          <Navbar />
          <Box px={[4, 4, 16, 32]} maxW="1536px" margin="auto">
            <Component {...pageProps} />
          </Box>
        </ContactContext.Provider>
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
