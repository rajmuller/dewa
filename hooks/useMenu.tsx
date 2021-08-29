import { useContext } from "react";

import { MenuContext } from "../contexts";

const useMenu = () => {
  const { isOpen, onClose, onOpen, onToggle } = useContext(MenuContext);
  return { isOpen, onClose, onOpen, onToggle };
};

export default useMenu;
