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
    isMobile: currentBreakPoint === "mobile",
    isSm: currentBreakPoint === "sm",
    isMd: currentBreakPoint === "md",
    isLg: currentBreakPoint === "lg",
  };
};

export default useCurrentBreakpoint;
