import { FC } from "react";
import { Link } from "react-router-dom";

import List from "../molcules/List";
import { snsDatas } from "../datas/snsDatas";

const Footer: FC = () => {
  return (
    <div className="bg-slate-700 text-slate-50 text-sm space-y-10 p-5 md:text-base">
      <div className="flex justify-around">
        <List title="開発者について">
          <li className="hover:underline">
            <a href="https://highblo.vercel.app">About</a>
          </li>
          <li className="hover:underline">
            <Link to="#">Message</Link>
          </li>
          <li className="hover:underline">
            <a href="https://github.com/Highblo/Node.js_TodoApp/tree/master">
              Code
            </a>
          </li>
        </List>
        <List title="SNS">
          {snsDatas.map(({ icon, text, url }) => (
            <li key={text} className="hover:underline">
              <a href={url} className="flex gap-2 md:gap-1">
                {icon}
                <p>{text}</p>
              </a>
            </li>
          ))}
        </List>
      </div>
      <p className="text-center font-light">©2023Highblo</p>
    </div>
  );
};

export default Footer;
