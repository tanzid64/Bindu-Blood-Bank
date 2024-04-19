import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/About";
import MainFooter from "./Components/MainFooter";
import Nav from "./Components/Nav";
import SignUpForm from "./Components/SignUp/SignUpForm";
import Home from "./pages/Home";

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
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <MainFooter />
      </Router>
    </>
  );
}
