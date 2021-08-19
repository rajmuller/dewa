import { useBreakpointValue } from "@chakra-ui/react";

type BreakPoints = "mobile" | "sm" | "md" | "lg";

const useCurrentBreakpoint = () => {
  const currentBreakPoint: BreakPoints = useBreakpointValue({
    base: "mobile",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return {
    currentBreakPoint,
    mobile: currentBreakPoint === "mobile",
    sm: currentBreakPoint === "sm",
    md: currentBreakPoint === "md",
    lg: currentBreakPoint === "lg",
  };
};

export default useCurrentBreakpoint;
