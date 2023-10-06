import { FC } from "react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

import Logo from "../molcules/Logo";
import ChakraDrawer from "./UI/ChakraDrawer";
import { drawerDatas } from "../datas/drawerDatas";

const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="flex justify-between p-4 border-b lg:px-20 lg:py-5">
      <Logo />
      {/* Mobile */}
      <img
        src="src/images/menu.png"
        alt="メニュー"
        className="w-[30px] md:hidden"
        onClick={onOpen}
      />
      <ChakraDrawer isOpen={isOpen} onClose={onClose} />

      {/* PC */}
      <div className="hidden md:flex md:gap-5">
        {drawerDatas.map(({ icon, text, url }) => (
          <div
            key={text}
            className="flex gap-1 items-center rounded-lg p-2 transition duration-300 hover:bg-slate-200"
          >
            {icon}
            <Link to={url}>{text}</Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
