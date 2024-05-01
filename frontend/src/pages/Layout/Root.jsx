import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import MainFooter from "../../components/MainFooter";

const Root = () => {
  return (
      <div className=" flex flex-col min-h-screen">
        <Nav />
        <main className="container my-16 md:my-20">
          <Outlet />
        </main>
        <MainFooter />
      </div>
  );
};

export default Root;
