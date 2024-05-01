import Nav from "../components/Nav";
import MainFooter from "../components/MainFooter";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <Nav />
      <main className="my-20 container min-h-[26.5rem]">
        <div className="flex flex-col items-center justify-center min-h-96">
          <h1 className="text-5xl text-center">404</h1>
          <h2 className="text-2xl text-center">Page Not Found</h2>
          <p className="text-center">
            The page you are looking for does not exist
          </p>
          <Link href="/">
            <a className="text-center">Go Back Home</a>
          </Link>
        </div>
      </main>
      <MainFooter />
    </>
  );
};

export default Error;
