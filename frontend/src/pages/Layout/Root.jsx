import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import MainFooter from "../../components/MainFooter";
import { useSelector } from "react-redux";
import { selectCurrentMessage } from "../../redux/slices/toastSlice";
import MainToast from "../../components/MainToast";

const Root = () => {
  const message = useSelector(selectCurrentMessage);
  return (
    <div className=" flex flex-col min-h-screen">
      <Nav />
      <main className="container my-16 md:my-20">
        {message && (
          <div className="relative">
            <MainToast />
          </div>
        )}
        <Outlet />
      </main>
      <MainFooter />
    </div>
  );
};

export default Root;
