import MainFooter from "./components/MainFooter";
import Nav from "./components/Nav";
import SectionTitle from "./components/SectionTitle";
import About from "./pages/About";
import Donors from "./pages/donors/Donors";
import Home from "./pages/home/Home";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Documentation from "./pages/Documentation/Documentation";
import DeveloperZone from "./pages/Documentation/DeveloperZone";
import ServiceDetails from "./pages/home/Services/ServiceDetails";
import Login from "./pages/Login";
import MainToast from "./components/MainToast";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/dashboard/Dashboard";
import Otp from "./pages/Otp";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="container my-20 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/confirm/email" element={<Otp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/developer" element={<DeveloperZone />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
          </Routes>
        </main>
        <MainFooter />
      </div>
    </Router>
  );
};

export default App;
