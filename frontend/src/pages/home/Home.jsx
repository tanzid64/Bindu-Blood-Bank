import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import { selectCurrentUser } from "../../redux/slices/authSlice";
import Banner from "./Banner";
import Services from "./Services/Services";

const Home = () => {
  const user = useSelector(selectCurrentUser);
  
  return (
    <div>
      <Banner />
      <Services />
    </div>
  );
};

export default Home;
