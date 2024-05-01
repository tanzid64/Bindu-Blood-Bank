import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import MainFooter from "../../components/MainFooter";

const Root = () => {
  return (
    <div>
      <Nav />
      <main className="container my-20 ">
        <Outlet />
      </main>
      <MainFooter />
    </div>
  );
};

export default Root;
