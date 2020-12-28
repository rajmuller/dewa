import { Button } from "@chakra-ui/react";
import { ArrowLeftIcon } from "../components/icons";

const Index = () => {
  return (
    <Button m="4" rightIcon={<ArrowLeftIcon ml={20} boxSize={4} />}>
      button
    </Button>
  );
};

export default Index;
