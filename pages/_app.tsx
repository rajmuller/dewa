import type { AppProps } from "next/app";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";

import { useHydrate, StoreProvider } from "../store";
import theme from "../components/theme";
import Navbar from "../components/Nav/Navbar";
import { ContactContext } from "../hooks/useContact";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useHydrate(pageProps.initialZustandState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        <ContactContext.Provider value={{ isOpen, onClose, onOpen }}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ContactContext.Provider>
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
