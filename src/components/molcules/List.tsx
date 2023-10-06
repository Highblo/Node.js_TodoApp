import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

const List: FC<Props> = ({ children, title }) => {
  return (
    <div className={title === "SNS" ? "md:ml-6 lg:ml-0" : ""}>
      <h4 className="font-bold text-slate-300 mb-5">{title}</h4>
      <ul className="space-y-3 md:flex md:gap-6 md:flex-wrap md:space-y-0">
        {children}
      </ul>
    </div>
  );
};

export default List;
