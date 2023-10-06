import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiZenn } from "react-icons/si";

import { listType } from "../types/Types";

export const snsDatas: Array<listType> = [
  {
    icon: <BsInstagram color="#eb7e63" size={20} />,
    text: "Instagram",
    url: "#",
  },
  {
    icon: <FaTwitterSquare color="#1da1f2" size={20} />,
    text: "Twitter",
    url: "#",
  },
  {
    icon: <SiQiita color="#55c500" size={20} />,
    text: "Qiita",
    url: "#",
  },
  {
    icon: <SiZenn color="aqua" size={20} />,
    text: "Zenn",
    url: "#",
  },
  {
    icon: <AiFillYoutube color="red" size={20} />,
    text: "Youtube",
    url: "#",
  },
  {
    icon: <AiFillGithub color="black" size={20} />,
    text: "Github",
    url: "#",
  },
];
