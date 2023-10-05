import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col gap-8 text-center">
        <h1 className="text-5xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="italic">
          <i>{`${error.status} ${error.statusText}`}</i>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
