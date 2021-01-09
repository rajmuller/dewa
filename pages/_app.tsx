import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";

import { useHydrate, StoreProvider } from "../store";
import theme from "../components/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useHydrate(pageProps.initialZustandState);

  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        <Box px={[4, 4, 32, 32]} maxW="1536px" margin="auto">
          <Component {...pageProps} />
        </Box>
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
