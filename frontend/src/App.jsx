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
            <Route path="/signup" element={<Signup />} />
            <Route path="/documentation" element={<Documentation />} />
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
