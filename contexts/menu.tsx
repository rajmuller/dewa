import { createContext } from "react";

export const MenuContext = createContext({
  onClose: null,
  onOpen: null,
  isOpen: null,
  onToggle: null,
});
