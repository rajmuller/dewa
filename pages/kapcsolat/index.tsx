import { FC, useState, useCallback } from "react";
import { Flex, HStack, Button, Stack } from "@chakra-ui/react";

type OptionProps = {
  value: string;
  active: string;
  onClick: (e: any) => void;
};

const Option: FC<OptionProps> = ({ value, active, onClick, children }) => {
  return (
    <Stack>
      <Button
        variant="ghost"
        bg="none"
        border="none"
        borderRadius="none"
        h="32px"
        px={[4, 4, 32]}
        value={value}
        _hover={{
          background: "none",
        }}
        _focus={{
          background: "none",
        }}
        // borderBottom={active === value ? "primary.500 2px solid" : "none"}
        borderBottomColor="primary.500"
        borderBottomStyle="solid"
        borderBottomWidth={active === value ? "2px" : "none"}
        onClick={onClick}
      >
        {children}
      </Button>
      <Flex />
    </Stack>
  );
};

const Contact: FC = () => {
  const [active, setActive] = useState("budaors");
  console.log({ active });

  const onActivation = useCallback((e) => {
    setActive(e.target.value);
  }, []);

  return (
    <Flex dir="column" align="center">
      <HStack w="100%" align="center" justify="center">
        <Option value="budaors" active={active} onClick={onActivation}>
          Budaörs
        </Option>
        <Option value="bekecsaba" active={active} onClick={onActivation}>
          Békéscsaba
        </Option>
      </HStack>
    </Flex>
  );
};

export default Contact;
