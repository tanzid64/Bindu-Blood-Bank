import { useEffect, useState } from "react";
import Donor from "../Components/Donor/Donor";
import Header from "../Components/Donor/Header";
import Filter from "../Components/Donor/Filter";
import DonorSkeleton from "../Components/Donor/DonorSkeleton";
import { useGetDonorsQuery } from "../Redux/apiSlice/userAuthApi";

const Donors = () => {
  const [filterData, setFilterData] = useState({
    bloodGroup: "",
    search: "",
    availableDonor: "",
  });

  // Fetch data from the API whenever the filter data changes
  const { data, isLoading, isError, refetch } = useGetDonorsQuery(filterData);

  const handleFilterChange = (newFilterData) => {
    setFilterData({ ...filterData, ...newFilterData });
  };
  console.log(data);
  useEffect(() => {
    refetch();
  }, [filterData, refetch]);
  return (
    <div className="py-5 px-8">
      <Header />
      <div className="">
        <Filter onFilterChange={handleFilterChange} />
        {isError && (
          <div>
            <DonorSkeleton />
          </div>
        )}

        <div className="">
          {isLoading ? (
            <DonorSkeleton />
          ) : (
            <div className="flex flex-col gap-6 flex-wrap md:flex-row">
              {data?.map((user, index) => (
                <Donor key={index} user={user} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donors;
