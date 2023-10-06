import { FC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

import Logo from "../../molcules/Logo";
import { drawerDatas } from "../../datas/drawerDatas";
import { snsDatas } from "../../datas/snsDatas";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ChakraDrawer: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Logo />
        </DrawerHeader>

        <DrawerBody>
          <div className="space-y-5">
            <ul className="space-y-2">
              {drawerDatas.map(({ icon, text, url }) => (
                <li className="rounded-lg p-2 transition duration-300 hover:bg-slate-200">
                  <a href={url} className="flex items-center gap-2">
                    {icon}
                    <p>{text}</p>
                  </a>
                </li>
              ))}
            </ul>
            <hr />
            <h2 className="text-lg font-bold">SNS</h2>
            <ul className="space-y-2">
              {snsDatas.map(({ icon, text, url }) => (
                <li className="rounded-lg p-2 transition duration-300 hover:bg-slate-200">
                  <a href={url} className="flex items-center gap-2">
                    {icon}
                    <p>{text}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </DrawerBody>

        <DrawerFooter>
          <Button onClick={onClose}>Cancel</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ChakraDrawer;
