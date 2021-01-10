import { FC } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "../../icons";

import BaseButton from "./BaseButton";

import { ButtonProps } from "./types";

const Primary: FC<ButtonProps> = ({ side, ...props }) => {
  if (side === "left") {
    return (
      <BaseButton
        borderBottomColor="secondary.500"
        leftIcon={<ChevronLeftIcon fontSize={[10, 10, 12, 15]} />}
        {...props}
      />
    );
  }

  return (
    <BaseButton
      borderBottom="1px solid"
      borderBottomColor="secondary.500"
      rightIcon={<ChevronRightIcon fontSize={[10, 10, 12, 15]} />}
      {...props}
    />
  );
};

const Secondary: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <BaseButton
      pl={[0, 0, 0, 0]}
      pb={[2, 2, 2, 2]}
      bg="transparent"
      color="secondary.500"
      borderRadius="none"
      borderBottomColor="secondary.500"
      _hover={{ bg: "transparent", color: "secondary.700" }}
      _active={{ bg: "transparent", color: "secondary.900" }}
      {...props}
    >
      {children}
    </BaseButton>
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
