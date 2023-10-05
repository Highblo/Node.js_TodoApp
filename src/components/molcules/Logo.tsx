import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="flex gap-1 items-center">
      <img src="src/images/logo.png" alt="ロゴ画像" className="w-[20px]" />
      <h2 className="text-xl">TodoApp</h2>
    </div>
  );
};

export default Logo;
