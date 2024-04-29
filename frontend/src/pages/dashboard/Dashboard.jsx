import { Spinner } from "@nextui-org/spinner";
import { useGetDonationRequestQuery } from "../../redux/apiSlices/donationApi";
import MyDonationRequest from "./MyDonationRequest";
import OthersDonationRequest from "./OthersDonationRequest";

const Dashboard = () => {
  const { data, error, isLoading } = useGetDonationRequestQuery();
  return (
    <>
      {isLoading ? (
        <div
          className={isLoading && `flex items-center justify-center min-h-96`}
        >
          <Spinner />
        </div>
      ) : (
        <>
          <MyDonationRequest data={data} />
          <OthersDonationRequest data={data} />
        </>
      )}
    </>
  );
};

export default Dashboard;
