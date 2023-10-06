import { BiLogIn } from "react-icons/bi";
import { MdAppRegistration } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiZenn } from "react-icons/si";

import { DrawerDataType } from "../types/Types";

export const drawerData: Array<DrawerDataType> = [
  {
    icon: <BiLogIn size={20} />,
    text: "ログイン",
  },
  {
    icon: <MdAppRegistration size={20} />,
    text: "会員登録",
    title: "SNS",
    hr: <hr />,
  },
  {
    icon: <BsInstagram color="#eb7e63" size={20} />,
    text: "Instagram",
  },
  {
    icon: <FaTwitterSquare color="#1da1f2" size={20} />,
    text: "Twitter",
  },
  {
    icon: <SiQiita color="#55c500" size={20} />,
    text: "Qiita",
  },
  {
    icon: <SiZenn color="aqua" size={20} />,
    text: "Zenn",
  },
  {
    icon: <AiFillYoutube color="red" size={20} />,
    text: "Youtube",
  },
  {
    icon: <AiFillGithub color="black" size={20} />,
    text: "Github",
  },
];
