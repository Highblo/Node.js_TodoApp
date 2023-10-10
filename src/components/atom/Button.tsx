import { FC } from "react";
import { Link } from "react-router-dom";

import { ButtonType } from "../types/Types";

const Button: FC<ButtonType> = ({ url, children, css }) => {
  return (
    <Link to={url} className={`${css} p-4 rounded-md transition duration-300`}>
      {children}
    </Link>
  );
};

export default Button;
