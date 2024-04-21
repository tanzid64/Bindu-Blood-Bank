import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/common/About";
import MainFooter from "./Components/MainFooter";
import Nav from "./Components/common/Nav";
import SignUpForm from "./Components/SignUp/SignUpForm";
import Home from "./pages/Home";
import Donors from "./pages/Donors";
import Login from "./Components/Login";




export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <ToastContainer toastClassName={`dark:bg-gray-800`} />
        <main className=" md:p-10 min-h-[73.5vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<SignUpForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/donors" element={<Donors />} />
          </Routes>
        </main>
        <MainFooter />
      </Router>
    </>
  );
}
