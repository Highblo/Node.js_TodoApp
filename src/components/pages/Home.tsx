import { FC } from "react";

import Layout from "../templetes/Layout";
import Button from "../atom/Button";

const Home: FC = () => {
  return (
    <Layout>
      <div className="flex-1 text-center py-12 px-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold md:text-5xl md:mb-5 lg:text-6xl lg:mb-6">
            TodoApp
          </h1>
          <p className="lg:text-lg">忙しい日々をTodoリストでシンプルに!</p>
        </div>
        <div className="space-y-8">
          <div className="w-[60%] max-w-[520px] mx-auto">
            <img
              src="images/key.jpg"
              alt="イラスト"
              className="w-full rounded-xl"
            />
          </div>
          <p className="text-start bg-white p-3 rounded-lg md:text-center md:max-w-[1280px] md:w-[82%] md:mx-auto">
            シンプルなデザインと使いやすさで、Todoアプリがあなたの日常を助けます
            <br />
            夢や目標を実現するためのステップを、Todoアプリで確実に踏み出しましょう
          </p>
          <div className="space-y-5 md:hidden">
            <Button
              url="/login"
              css="block bg-slate-700 text-white hover:opacity-70"
            >
              ログイン
            </Button>
            <Button
              url="/registration"
              css="block bg-slate-700 text-white hover:opacity-70"
            >
              会員登録
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
