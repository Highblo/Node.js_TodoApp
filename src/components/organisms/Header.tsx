import { FC } from "react";
import { useDisclosure } from "@chakra-ui/react";

import Logo from "../molcules/Logo";
import ChakraDrawer from "./UI/ChakraDrawer";

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="flex justify-between p-5 md:px-12 md:py-5">
      <Logo />
      <img
        src="src/images/menu.png"
        alt="メニュー"
        className="w-[30px] md:hidden"
        onClick={onOpen}
      />
      <ChakraDrawer isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Header;
