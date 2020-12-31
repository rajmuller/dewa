import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

import { ArrowLeftIcon } from "../components/icons";

const Index = () => {
  const router = useRouter();
  return (
    <>
      <Button
        m="4"
        rightIcon={<ArrowLeftIcon ml={20} boxSize={4} />}
        onClick={() => router.push("/cikkek/test-cikk")}
      >
        <a>test cikk</a>
      </Button>
      <Button
        m="4"
        rightIcon={<ArrowLeftIcon ml={20} boxSize={4} />}
        onClick={() => router.push("/cikkek/random-cikk")}
      >
        <a>random cikk</a>
      </Button>
    </>
  );
};

export default Index;
