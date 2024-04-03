import About from "./Components/About";
import MainFooter from "./Components/MainFooter";
import Nav from "./Components/Nav";
import SignUpForm from "./Components/SignUp/SignUpForm";

export default function App() {
  return (
    <>
      <Nav />
      <main className="mt-10 p-10 min-h-100h">
        <SignUpForm />
      </main>
      <MainFooter />
    </>
  );
}
