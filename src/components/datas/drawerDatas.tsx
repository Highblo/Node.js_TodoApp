import { BiLogIn } from "react-icons/bi";
import { MdAppRegistration } from "react-icons/md";

import { listType } from "../types/Types";

export const drawerDatas: Array<listType> = [
  {
    icon: <BiLogIn size={20} />,
    text: "ログイン",
    url: "#",
  },
  {
    icon: <MdAppRegistration size={20} />,
    text: "会員登録",
    url: "#",
  },
];
