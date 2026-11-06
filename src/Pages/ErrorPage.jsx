import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const Error = useRouteError();
  console.log(Error);

  return (
    <div className="flex flex-col justify-center m-10 items-center">
      <h3 className="text-2xl font-semibold">Opps! Page Not Found</h3>
      <h1 className="text-3xl font-bold">404</h1>
      {Error && Error.data}

      <Link
        to="/"
        className="text-red-600 p-10 font-semibold text-2xl hover:text-white"
      >
        👉 Go To Home Page 👈
      </Link>
      <img
        src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"
        alt="Page Not Found gif"
        className="m-10"
      />
    </div>
  );
};
export default ErrorPage;
