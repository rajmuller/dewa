import { useMediaQuery } from "@chakra-ui/react";
import Breakpoints from "../util/breakpoints";

const useBreakpoints = () => {
  const [mobile, sm, md, lg] = useMediaQuery([
    `(max-width: ${Breakpoints.sm})`,
    `(min-width: ${Breakpoints.sm}) and (max-width: ${Breakpoints.md})`,
    `(min-width: ${Breakpoints.md}) and (max-width: ${Breakpoints.lg})`,
    `(min-width: ${Breakpoints.lg})`,
  ]);

  return { mobile, sm, md, lg };
};

export default useBreakpoints;
