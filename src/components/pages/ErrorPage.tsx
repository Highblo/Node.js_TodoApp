import { FC } from "react";
import { useRouteError } from "react-router-dom";

import Layout from "../templetes/Layout";

const ErrorPage: FC = () => {
  const error = useRouteError() as any;

  return (
    <Layout>
      <div className="flex-1 grid place-items-center">
        <div className="space-y-9 text-center">
          <h1 className="text-5xl">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p className="italic">
            <i>{`${error.status} ${error.statusText}`}</i>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
