import DonorCard from "./DonorCard";
import SectionTitle from "../../components/SectionTitle";
import { NavbarMenuToggle, Pagination, Spinner } from "@nextui-org/react";
import { useGetAllUserProfileQuery } from "../../redux/apiSlices/authApi";
import { useState } from "react";
import BloodGroup from "../../components/Form/BloodGroup";
import { Checkbox, Label, Select, ToggleSwitch } from "flowbite-react";
import DonorSkeleton from "./DonorSkeleton";

const Donors = () => {
  const [page, setPage] = useState(1);
  const [bloodGroup, setBloodGroup] = useState("");
  const [isAvailable, setIsAvailable] = useState();
  const { data, error, isLoading, isFetching, refetch } =
    useGetAllUserProfileQuery({
      p: page,
      bloodGroup: bloodGroup,
      isAvailable: isAvailable,
    });
  console.log(data);
  const handlePagination = async (page) => {
    console.log("fatching");
    setPage(page);
    await refetch();
  };
  const handleOnChange = async (e) => {
    setBloodGroup(e.target.value);
    await refetch();
  };
  const handleIsAvailable = async (e) => {
    setIsAvailable(e.target.value);
    await refetch();
  };
  return (
    <div className="mb-5">
      <SectionTitle title="All Donors" />
      {/* Filtering Options */}
      <div className="w-full border p-5 rounded-xl border-indigo-500 mb-5 flex gap-5 flex-col md:flex-row items-center ">
        {/* By Availability */}
        <div className="">
          <Label htmlFor="bloodGroup" value="Available for Donation" />
          {/* By BloodGroup */}
          <div className="mb-2 block"></div>
          <Select
            id="bloodGroup"
            name="blood_group"
            onChange={handleIsAvailable}
          >
            <option value="">All User</option>
            <option value={true}>Available</option>
            <option value={false}>Not Available</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="bloodGroup" value="Blood Group" />
          {/* By BloodGroup */}
          <div className="mb-2 block"></div>
          <Select id="bloodGroup" name="blood_group" onChange={handleOnChange}>
            <option value="">None</option>
            <option value="A%2b">A+</option>
            <option value="A-">A-</option>
            <option value="B%2b">B+</option>
            <option value="B-">B-</option>
            <option value="O%2b">O+</option>
            <option value="O-">O-</option>
            <option value="AB%2b">AB+</option>
            <option value="AB-">AB-</option>
          </Select>
        </div>
      </div>
      {/* Loading State */}

      {isLoading | isFetching ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
          <DonorSkeleton />
          <DonorSkeleton />
          <DonorSkeleton />
          <DonorSkeleton />
          <DonorSkeleton />
          <DonorSkeleton />
          <DonorSkeleton />
          <DonorSkeleton />
          <DonorSkeleton />
          <DonorSkeleton />
          <DonorSkeleton />
          <DonorSkeleton />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
          {data?.results?.map((donor, index) => (
            <DonorCard user={donor} key={index} />
          ))}
        </div>
      )}
      <div className=" mt-10 flex justify-center md:justify-end ">
        <Pagination
          showControls
          total={data?.total_pages}
          initialPage={data?.current_page_number}
          onChange={handlePagination}
        />
      </div>
    </div>
  );
};
export default Donors;
