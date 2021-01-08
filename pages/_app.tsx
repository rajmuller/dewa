import type { AppProps } from "next/app";
import { useMemo } from "react";
import { TinaProvider, TinaCMS } from "tinacms";
import { NextGithubMediaStore } from "next-tinacms-github";
import { TinacmsGithubProvider, GithubClient } from "react-tinacms-github";
import { Box, ChakraProvider } from "@chakra-ui/react";

import { useHydrate, StoreProvider } from "../store";
import theme from "../components/theme";
import EditButton from "../components/EditButton";

const onLogin = async () => {
  const token = localStorage.getItem("tinacms-github-token") || null;
  const headers = new Headers();

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  const resp = await fetch(`/api/preview`, { headers });
  const data = await resp.json();

  if (resp.status === 200) window.location.href = window.location.pathname;
  else throw new Error(data.message);
};

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload();
  });
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useHydrate(pageProps.initialZustandState);

  const { preview, error } = pageProps;
  const github = useMemo(
    () =>
      new GithubClient({
        proxy: "/api/proxy-github",
        authCallbackRoute: "/api/create-github-access-token",
        clientId: process.env.GITHUB_CLIENT_ID,
        baseRepoFullName: process.env.REPO_FULL_NAME, // e.g: tinacms/tinacms.org,
        baseBranch: process.env.BASE_BRANCH, // e.g. 'master' or 'main' on newer repos
        authScope: "repo", // normally defaults to 'public_repo'
      }),
    []
  );

  const media = useMemo(() => new NextGithubMediaStore(github), [github]);

  const cms = useMemo(
    () =>
      new TinaCMS({
        enabled: !!preview,
        sidebar: preview,
        toolbar: preview,
        apis: {
          github,
        },
        media,
      }),
    [github, media, preview]
  );

  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        <TinaProvider cms={cms}>
          <TinacmsGithubProvider
            onLogin={onLogin}
            onLogout={onLogout}
            error={error}
          >
            <EditButton cms={cms} />
            <Box px={[4, 4, 16, 32]}>
              <Component {...pageProps} />
            </Box>
          </TinacmsGithubProvider>
        </TinaProvider>
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
