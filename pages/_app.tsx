import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";

import { useHydrate, StoreProvider } from "../store";
import theme from "../components/theme";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useHydrate(pageProps.initialZustandState);

  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        <Navbar />
        <Box px={[4, 4, 16, 32]} maxW="1536px" margin="auto">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
