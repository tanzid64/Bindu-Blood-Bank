import DonorCard from "./DonorCard";
import SectionTitle from "../../components/SectionTitle";
import { Spinner } from "@nextui-org/react";
import { useGetAllUserProfileQuery } from "../../redux/apiSlices/authApi";

const Donors = () => {
  const { data, error, isLoading } = useGetAllUserProfileQuery();
  return (
    <div className="mb-5">
      <SectionTitle title="All Donors" />
      {isLoading ? (
        <div className={isLoading && `flex items-center justify-center min-h-96`}>
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
          {data?.map((donor, index) => (
            <DonorCard user={donor} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Donors;
