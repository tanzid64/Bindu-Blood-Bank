import { useGetDonationRequestQuery } from "../../redux/apiSlices/donationApi";
import MyDonationRequest from "./MyDonationRequest";
import OthersDonationRequest from "./OthersDonationRequest";

const Dashboard = () => {
  const { data, error, isLoading } = useGetDonationRequestQuery();
  return <div>
    <MyDonationRequest data={data}/>
    <OthersDonationRequest data={data}/>
  </div>;
};

export default Dashboard;
