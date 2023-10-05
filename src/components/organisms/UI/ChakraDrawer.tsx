import { FC, Fragment } from "react";
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

import { drawerData } from "../../datas/drawerData";

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
        <DrawerHeader>TodoApp</DrawerHeader>

        <DrawerBody>
          <ul className="space-y-5">
            {drawerData.map(({ icon, text, title, hr }) => (
              <Fragment key={text}>
                <li className="flex items-center gap-2">
                  {icon}
                  <p>{text}</p>
                </li>
                {hr ? hr : null}
                {title ? <h2 className="text-lg font-bold">{title}</h2> : null}
              </Fragment>
            ))}
          </ul>
        </DrawerBody>

        <DrawerFooter>
          <Button onClick={onClose}>Cancel</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ChakraDrawer;
