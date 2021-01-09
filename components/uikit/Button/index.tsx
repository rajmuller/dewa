import { FC } from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "../../icons";

type ButtonProps = ChakraButtonProps & {
  variant?: "primary" | "secondary" | "tertiary";
  side?: "right" | "left";
};

const iconSpanMargin = 2;
const desiredMargin = [12, 12, 16, 20];
const m = desiredMargin.map((element) => element - iconSpanMargin);

const Primary: FC<ButtonProps> = ({ side, ...props }) => {
  if (side === "left") {
    return (
      <ChakraButton
        borderBottom="1pxsolid"
        borderBottomColor="secondary.500"
        leftIcon={<ChevronLeftIcon fontSize={[10, 10, 12, 15]} mr={m} />}
        {...props}
      />
    );
  }

  return (
    <ChakraButton
      borderBottom="1px solid"
      borderBottomColor="secondary.500"
      rightIcon={<ChevronRightIcon fontSize={[10, 10, 12, 15]} ml={m} />}
      {...props}
    />
  );
};

const Secondary: FC<ButtonProps> = ({ side, ...props }) => {
  if (side === "left") {
    return (
      <ChakraButton
        w="100%"
        justifyContent="flex-end"
        pr={[0, 0, 0, 0]}
        pb={[2, 2, 2, 2]}
        borderBottom="1px solid"
        borderBottomColor="secondary.500"
        leftIcon={<ChevronLeftIcon fontSize={[10, 10, 12, 15]} mr={m} />}
        {...props}
      />
    );
  }

  return (
    <ChakraButton
      w="100%"
      pl={[0, 0, 0, 0]}
      pb={[2, 2, 2, 2]}
      justifyContent="flex-start"
      borderBottom="1px solid"
      borderBottomColor="secondary.500"
      rightIcon={<ChevronRightIcon fontSize={[10, 10, 12, 15]} ml={m} />}
      {...props}
    />
  );
};

const Button: FC<ButtonProps> = ({ side, ...props }) => {
  const { variant } = props;

  switch (variant) {
    case "secondary":
      return <Secondary side={side} {...props} />;

    default:
      return <Primary side={side} {...props} />;
  }
};

export default Button;
