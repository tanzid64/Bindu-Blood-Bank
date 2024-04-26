import MainFooter from "./components/MainFooter";
import Nav from "./components/Nav";
import SectionTitle from "./components/SectionTitle";
import About from "./pages/About";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
    <Nav/>
      <main className="container mt-20">
        <Home />
        <About />
      </main>
      <MainFooter/>
    </>
  );
};

export default App;
